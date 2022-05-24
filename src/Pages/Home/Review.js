import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card w-96 bg-blue-100 shadow-xl">
        <div className="card-body">
          <div className="flex  items-start mb-3">
              <div>
                  <h4><span className='text-orange-600 font-bold mb-2'>Name</span> : {review.name}</h4>
                  <p><span className='text-orange-600 font-bold mb-2'>Location</span> : {review.location}</p>
                  <p><span className='text-orange-600 font-bold mb-2'>Rating</span> : {review.rating}</p>
                  <p><span className='text-orange-600 font-bold '>Review</span> : {review.review}</p>
                  
              </div>
          </div>
          
        </div>
      </div>
    );
};

export default Review;