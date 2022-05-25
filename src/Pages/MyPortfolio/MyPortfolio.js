import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import profile from '../../Images/profile.jpg';
import linked from '../../Images/linkedin.svg';


const MyPortfolio = () => {
    return (
        <div>
            <section className='lg:flex'>
            <div>
            <div class="card lg:card-side lg:w-10/12 bg-base-100 lg:m-20 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">Hi, I'm <span className='text-orange-400'>Faizul Hassan</span></h2>
    <p className='text-purple-400 font-bold'>Frontend Developer</p>
    <p className='text-xs'><span><FontAwesomeIcon icon={faEnvelope}/></span> faizulhassan.rien@gmail.com</p>
    <p className='text-xs flex'><img className='w-3 h-4 mr-1' src={linked} alt="" /> https://www.linkedin.com/in/faizul-hassan-4088b8229/</p>
    </div>
  <div class="avatar">
  <div class="ml-20 lg:ml-0 w-44 mask mask-squircle">
    <img src={profile} alt='' />
  </div>
</div>
</div>
</div>




<div>
<div class="card lg:w-10/12 bg-base-100 lg:mt-16 lg:ml-20 shadow-xl">
  <div class="card-body">
    <h2 class="card-title m-2 font-bold text-orange-400">Technology and Skills</h2>
     <div>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">HTML5</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Bootstrap4</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">CSS3</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Tailwindcss</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Github</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">JavaScript</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">ES6</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">React.js</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">React Router</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">React Hooks</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">React Query</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">React Form</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Netlify</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">FontAwesome</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Figma</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Firebase</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Node.js</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Mongodb</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Daisyui</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">heroku</kbd>
     <kbd class="kbd kbd-lg m-2 bg-blue-300 text-sm font-semibold">Stripe</kbd>
     </div>
     
  </div>
</div>
            </div>
        </section>

        <div style={{marginTop:"-130px"}} class="card  lg:w-5/12 bg-base-100 lg:m-20 shadow-xl">
  <div class="card-body">
    <h2 class="card-title m-2 font-bold text-orange-400">Educational Background</h2>
   <div className='bg-green-200 rounded-lg p-3 mb-3'>
   <p className='font-semibold'>Bangladesh University of Business and Technology</p>
    <p className='text-xs'>Bachelor of Science in Computer Science and Engineering </p>
   </div>

    <div className='bg-green-200 rounded-lg p-3 mb-3'>
    <p className='font-semibold'>Government M.M College Jashore</p>
    <p className='text-xs'>HSC, Science</p>
    </div>

    <div className='bg-green-200 rounded-lg p-3'>
    <p className='font-semibold'>Badshah Faisal Islami Institute Jashore</p>
    <p className='text-xs'>SSC, Science</p>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default MyPortfolio;