import React from 'react';
import profile from '../../Images/profile.jpg';

const MyPortfolio = () => {
    return (
        <section>
            <div class="card lg:card-side lg:w-5/12 bg-base-100 lg:m-20 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">Hi, I'm <span className='text-orange-400'>Faizul Hassan</span></h2>
    <p className='text-purple-400 font-bold'>Frontend Developer</p>
    <p className='text-xs'><span className='font-bold text-sm'>Email</span> faizulhassan.rien@gmail.com</p>
    <p className='text-xs'><span className='font-bold text-sm text-blue-500'>LinkedIn</span> https://www.linkedin.com/in/faizul-hassan-4088b8229/</p>
    
  </div>
  <div class="avatar">
  <div class="w-40 mask mask-squircle">
    <img src={profile} alt='' />
  </div>
</div>
</div>
        </section>
    );
};

export default MyPortfolio;