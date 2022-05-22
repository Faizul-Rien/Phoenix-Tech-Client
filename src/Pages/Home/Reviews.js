import React from 'react';
import person1 from '../../Images/person1.png';
import person2 from '../../Images/person2.png';
import person3 from '../../Images/person3.png';
import Review from './Review';

const Reviews = () => {
    const reviews =[
        {
            _id : 1,
            name: 'Thomas Muller',
            review:'I bought a battery for my laptop, and had it shipped fast to Germany.Thanks to Phoenix Tech.',
            img:person1,
            location:'Germany',
            rating:5

        },
        {
            _id : 2,
            name: 'Lionel Messi',
            review:'Impressive customer service. Quickly highlighted and resolved 100%.',
            img:person2,
            location:'Argentina',
            rating:4.5

        },
        {
            _id : 3,
            name: 'Shakib Al Hassan',
            review:'It was the first time for me to buy from this site.I love there products.',
            img:person3,
            location:'Bangladesh',
            rating:5

        }
    ]
    return (
        <div className='my-20 px-12'>
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