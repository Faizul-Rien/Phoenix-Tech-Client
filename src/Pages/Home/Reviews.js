import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='my-20 lg:px-20'>
                <div>
                <h2 className='text-3xl text-center text-green-300 font-bold'>What Our Customers Says</h2>
                </div>
           
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;