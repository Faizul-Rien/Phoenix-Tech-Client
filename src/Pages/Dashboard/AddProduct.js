import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);

        fetch('https://serene-scrubland-35114.herokuapp.com/part', {
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
            <h2 className='lg:ml-32 mt-5 text-2xl font-bold text-orange-400'>Add a new Product here</h2>
            <form className='lg:ml-32 mt-10 rounded-lg bg-purple-100 lg:w-2/4'  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control lg:ml-20 w-full max-w-xs">
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
    <div className="form-control lg:ml-20 w-full max-w-xs">
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

    <div className="form-control lg:ml-20 w-full max-w-xs">
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
    <div className="form-control lg:ml-20 w-full max-w-xs">
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
    <div className="form-control lg:ml-20 w-full max-w-xs">
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
    <div className="form-control lg:ml-20 w-full max-w-xs">
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
    <input className='btn lg:ml-20 mt-5 bg-green-400 text-white font-bold  w-full max-w-xs' type="submit" value='Add Product' />
    </form>
    
        </div>
    );
};

export default AddProduct;