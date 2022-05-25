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
    fetch('https://serene-scrubland-35114.herokuapp.com/purchase', {
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
        fetch(`https://serene-scrubland-35114.herokuapp.com/part/${purchaseId}`)
        .then(res=> res.json())
        .then(data => setParts(data))
    },[purchaseId])
    return (
        <div class="card w-96 bg-blue-100 lg:m-10 shadow-xl">
  <figure class="lg:px-10 lg:pt-10">
    <img src={parts.img} alt="parts" class="rounded-xl" />
  </figure>
  <div class="card-body items-start text-left">
    <h2 class="card-title font-bold">{parts.name}</h2>
    <p className='text-green-500 font-bold text-xl '> ${parts.price}</p>
    <p><span className='text-orange-600 font-bold '>Minimum Quantity</span> : {parts.minquantity}</p>
    <p><span className='text-orange-600 font-bold '>Available Quantity</span> : {parts.avaquantity}</p>
    <p><span className='text-orange-600 font-bold '>Description</span> : <span className='text-sm'>{parts.description}</span></p>
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