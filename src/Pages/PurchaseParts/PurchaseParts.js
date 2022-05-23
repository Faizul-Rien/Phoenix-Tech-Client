import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseParts = () => {
    const {purchaseId} = useParams()
    const [parts,setParts] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/part/${purchaseId}`)
        .then(res=> res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div class="card w-96 bg-blue-100 m-10 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={parts.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-start text-left">
    <h2 class="card-title">{parts.name}</h2>
    <p>Price : ${parts.price}</p>
    <p>Minumum Quantity : {parts.minquantity}</p>
    <p>Available Quantity : {parts.avaquantity}</p>
    <p>Description : {parts.description}</p>
    <input type="text" placeholder="Name" class="input input-bordered input-accent w-full max-w-xs" />
    <input type="email" placeholder="Email" class="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" placeholder="Quantity" class="input input-bordered input-accent w-28 max-w-xs" />
    <div class="card-actions">
      <button class="btn bg-green-400">BUY NOW</button>
    </div>
  </div>
</div>
    );
};

export default PurchaseParts;