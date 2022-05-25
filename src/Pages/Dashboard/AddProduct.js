import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);

        fetch('http://localhost:5000/part', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div>
            <form className='ml-32 mt-10 rounded-lg bg-purple-100 w-2/4'  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input 
            type="text" 
            placeholder="Your Name" 
            className="input input-bordered w-full max-w-xs"
            {...register("name")}
  />
    </div>
    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Price</span>
        </label>
        <input 
            type="text" 
            placeholder="Price" 
            className="input input-bordered w-full max-w-xs"
            {...register("price")}
  />
    </div>

    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Minimum</span>
        </label>
        <input 
            type="text" 
            placeholder="Minimum Quantity" 
            className="input input-bordered w-full max-w-xs"
            {...register("minimum")}
  />
    </div>
    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Available</span>
        </label>
        <input 
            type="text" 
            placeholder="Available Quantity" 
            className="input input-bordered w-full max-w-xs"
            {...register("available")}
  />
    </div>
    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Description</span>
        </label>
        <input 
            type="text" 
            placeholder="Description" 
            className="input input-bordered w-full max-w-xs"
            {...register("description")}
  />
    </div>
    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Image</span>
        </label>
        <input 
            type="text" 
            placeholder="Photo Url" 
            className="input input-bordered w-full max-w-xs"
            {...register("img")}
  />
    </div>
    <input className='btn ml-20 mt-5 bg-green-400 text-white font-bold  w-full max-w-xs' type="submit" value='Add Product' />
    </form>
    
        </div>
    );
};

export default AddProduct;