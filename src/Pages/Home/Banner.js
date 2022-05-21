import React from 'react';
import banner from '../../Images/banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-lg rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold text-green-300">Great performance and design</h1>
      <p class="py-6">Affordable accessories for every Laptop. Enhances your computing experience. Laptop accessories that truly works affordability and durability guaranteed. Improving laptops audio and visual experience.</p>
      <button class="btn bg-blue-400 ">Explore more</button>
    </div>
  </div>
</div>
    );
};

export default Banner;