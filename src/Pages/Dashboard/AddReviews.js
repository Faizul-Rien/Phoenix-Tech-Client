import React from 'react';
import { useForm } from 'react-hook-form';

const AddReviews = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);

        fetch('http://localhost:5000/review', {
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
            <span className="label-text">Location</span>
        </label>
        <input 
            type="text" 
            placeholder="Location" 
            className="input input-bordered w-full max-w-xs"
            {...register("location")}
  />
    </div>

    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
        <input 
            type="text" 
            placeholder="Rating" 
            className="input input-bordered w-full max-w-xs"
            {...register("rating")}
  />
    </div>
    <div className="form-control ml-20 w-full max-w-xs">
        <label className="label">
            <span className="label-text">Review</span>
        </label>
        <textarea 
            type="review" 
            placeholder="Review" 
            className="textarea textarea-bordered w-full max-w-xs"
            {...register("review")}
  />
    </div>
    <input className='btn ml-20 mt-5 bg-green-400 text-white font-bold  w-full max-w-xs' type="submit" value='Add Review' />
    </form>
    
        </div>
    );
};

export default AddReviews;