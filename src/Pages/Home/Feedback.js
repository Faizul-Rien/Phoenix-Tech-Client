import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className='text-3xl text-center text-green-300 font-bold'>Give your most valuable feedback to us</h2>
            <div 
         className='mt-12 text-center bg-blue-100 py-20'>
            <h2 className='text-3xl '>Stay connected with us</h2>
           <div className='flex flex-col items-center'>
           <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs my-4" />
           <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs my-4" />
            <input type="text" placeholder="Location" className="input input-bordered input-primary w-full max-w-xs" />
            <textarea className="textarea textarea-primary w-full max-w-xs my-4" placeholder="Your Message"></textarea>
            <button className="btn bg-green-400">Submit Feedback</button>
           </div>
        </div>
        </div>
    );
};

export default Feedback;