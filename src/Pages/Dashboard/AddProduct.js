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
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
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
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input 
            type="email" 
            placeholder="Your Email" 
            className="input input-bordered w-full max-w-xs"
            {...register("email")}
  />
    </div>

    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input 
            type="password" 
            placeholder="Password" 
            className="input input-bordered w-full max-w-xs"
            {...register("password")}
  />
    </div>
    <input className='btn text-white font-bold  w-full max-w-xs' type="submit" value='Submit' />
    </form>
    
        </div>
    );
};

export default AddProduct;