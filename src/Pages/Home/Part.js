import React from 'react';
import { useNavigate } from "react-router-dom";

const Part = ({part}) => {
    const {_id,name,img,price,minquantity,avaquantity,description} = part;

    const nevigate = useNavigate();

    const handlePurchase = (id) => {
      nevigate(`/purchase/${id}`);
    }
    return (
        <div class="card w-80 bg-blue-100 mb-10 shadow-xl">
        <figure><img className='mt-5 rounded-lg' src={img} style={{ height:'250px', width:'18rem'}} alt="parts" /></figure>
        <div class="card-body">
          <h2 class="card-title font-bold">{name}</h2>
          <p className='text-green-500 font-bold text-xl '>$ {price} </p>
          <p><span className='text-orange-600 font-bold '>Minimum Quantity</span> : {minquantity}</p>
          <p><span className='text-orange-600 font-bold '>Available Quantity</span>: {avaquantity}</p>
          <p><span className='text-orange-600 font-bold '>Description</span> : <span className='text-sm'>{description}</span></p>
          <div class="card-actions justify-end">
            <button onClick={()=> handlePurchase(_id)} class="btn btn-sm  bg-blue-400">Purchase Now</button>
          </div>
        </div>
      </div>
    );
};

export default Part;