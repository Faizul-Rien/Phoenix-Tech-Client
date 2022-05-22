import React from 'react';
import avatar from '../../Images/avatar.jpg';

const Summary = () => {
    return (
        <div>
            <h2 className='text-3xl text-center text-green-300 font-bold mb-10'>Think Fast, Work Smart, Have Fun,Your key to running a business</h2>
<div className='flex justify-center items-center'>
            <div class="stats shadow">
  
  <div class="stat">
  <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title text-black font-bold">Total Selling Units</div>
    <div class="stat-value text-purple-400">50,600</div>
    <div class="stat-desc font-bold">21% more than last month</div>
  </div>
  
  <div class="stat">
    
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title text-black font-bold">New Client</div>
    <div class="stat-value text-purple-400">15K</div>
    <div class="stat-desc font-bold">15% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src={avatar} alt=''></img>
        </div>
      </div>
    </div>
    <div class="stat-title text-black font-bold">Clients Feedback</div>
    <div class="stat-value text-purple-400">5k+</div>
   
  </div>
  
</div>
        </div>
        </div>
        
    );
};

export default Summary;