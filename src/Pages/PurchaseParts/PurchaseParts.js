import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseParts = () => {
    const nevigate = useNavigate()
    const [user] = useAuthState(auth);
    const {purchaseId} = useParams()
    const [parts,setParts] = useState({})

    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.value;
        nevigate('/dashboard');
        
    const purchase = {
        purchaseId: parts._id,
        parts: parts.name,
        price : parts.price,
        user: user.email,
        userName: user.displayName,
        quantity,
        
    }
    fetch('http://localhost:5000/purchase', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast('Purchase is set to Database')
            }
            
        });
}

    useEffect(()=>{
        fetch(`http://localhost:5000/part/${purchaseId}`)
        .then(res=> res.json())
        .then(data => setParts(data))
    },[purchaseId])
    return (
        <div class="card w-96 bg-blue-100 m-10 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={parts.img} alt="parts" class="rounded-xl" />
  </figure>
  <div class="card-body items-start text-left">
    <h2 class="card-title">{parts.name}</h2>
    <p>Price : ${parts.price}</p>
    <p>Minumum Quantity : {parts.minquantity}</p>
    <p>Available Quantity : {parts.avaquantity}</p>
    <p>Description : {parts.description}</p>
    <input type="text" name='name' disabled value={user?.displayName || ""} placeholder="Name"  class="input input-bordered input-accent w-full max-w-xs" />
    <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email" class="input input-bordered input-accent w-full max-w-xs" />
    <input type="text"  name='quantity'  placeholder="Quantity" class="input input-bordered input-accent w-28 max-w-xs" />
    <div class="card-actions">
      <button onClick={handlePurchase} class="btn bg-green-400">BUY NOW</button>
    </div>
  </div>
</div>
    );
};

export default PurchaseParts;