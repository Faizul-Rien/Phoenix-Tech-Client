import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://serene-scrubland-35114.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
   
    return (
        <div className='mb-28 lg:mx-8'>
            <div>
            <h2 className='text-3xl text-green-300 text-center font-bold mb-5'>Laptop Selling Parts</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-12'>
            {
                parts.map((part) => <Part
                key={part.id}
                part={part}
                ></Part>)
            }
            </div>
        </div>
    );
};

export default Parts;
