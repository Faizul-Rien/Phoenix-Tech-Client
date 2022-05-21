import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {name,img,price,minquantity,avaquantity,description} = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} style={{ height:'250px', width:'18rem'}} alt="parts" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>$ {price}</p>
          <p>Minimum Quantity : {minquantity}</p>
          <p>Available Quantity : {avaquantity}</p>
          <p>Description : {description}</p>
          <div class="card-actions justify-end">
            <Link to='/purchase' class="btn btn-sm  bg-blue-400">Purchase Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Part;