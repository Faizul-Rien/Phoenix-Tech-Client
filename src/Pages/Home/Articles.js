import React from 'react';
import article from '../../Images/article.png';

const Articles = () => {
    return (
        <div className='lg:mx-20'>
            <h2 style={{marginBottom:'-80px'}} className='text-3xl text-center  text-green-300 font-bold '>Recent Tech Article</h2>
            <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='lg:max-w-lg rounded-lg shadow-2xl' src={article} alt=''/>
          <div>
            <h1 class="text-3xl font-bold text-blue-400">AMD Zen 4 roadmap confirms Phoenix and powerful Dragon Range APUs</h1>
            <p class="py-6 text-sm text-justify">AMD has updated its Zen 4 roadmap to show what will be replacing its current Ryzen 6000 (Rembrandt) series of mobile chips. The very D&D-sounding Dragon Range and Phoenix APUs will be part of the Ryzen 7000 line and, like their desktop siblings, will come with PCIe 5.0 support.AMD, which this week posted record quarterly revenue, is pushing Dragon Range's gaming laptop credentials in the slide. In addition to the Zen 4 architecture, it will also have the highest ever core/thread count and cache for a mobile gaming CPU. No specifics on exactly how many Zen 4 cores it will boast, but there have been rumors that it could reach as high as 16.</p>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Articles;