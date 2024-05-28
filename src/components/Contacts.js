import React from 'react';
import '../App.css';
import image18 from "./images/image18.png";
import image20 from "./images/image20.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  return (
    <div>
    <div className=" w-full ">
      <img 
        src={image18} 
        alt="About" 
        className=" object-cover w-full  " 
      />
    </div>

{/* contact us */}
<div className='testimonial-card bg-white mt-6 p-6 rounded-lg shadow-md text-start  mb-8 max-w-2xl mx-auto hover:text-white'>
  <img className='w-auto  mx-auto mb-4' src={image20} alt='images' />
  <h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
  <form className='space-y-4'>
    <div className='flex items-center'>
      <label className='w-32' htmlFor='full-name'>Full Name:</label>
      <input
        className='flex-1 border text-black rounded p-2'
        type='text'
        id='full-name'
        name='full-name'
        required
      />
    </div>
    <div className='flex items-center'>
      <label className='w-32' htmlFor='email'>Email:</label>
      <input
        className='flex-1 text-black border rounded p-2'
        type='email'
        id='email'
        name='email'
        required
      />
    </div>
    <div className='flex items-center'>
      <label className='w-32' htmlFor='phone-number'>Phone Number:</label>
      <input
        className='flex-1 text-black border rounded p-2'
        type='tel'
        id='phone-number'
        name='phone-number'
        required
      />
    </div>
    <div className='flex items-center'>
      <label className='w-32' htmlFor='subject'>Subject:</label>
      <input
        className='flex-1 text-black border rounded p-2'
        type='text'
        id='subject'
        name='subject'
        required
      />
    </div>
    <div className='flex items-center'>
      <label className='w-32' htmlFor='message'>Enter Your Message:</label>
      <textarea
        className='flex-1 text-black border rounded p-2'
        id='message'
        name='message'
        rows='4'
        required
      ></textarea>
    </div>
    <div  className="button-hover-effect mt-6 w-40 bg-slate-700 hover:text-white hover:bg-slate-800 px-4 py-4 mb-4  rounded-sm">
      <span>Send Message <FontAwesomeIcon icon={faArrowRight}  className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
    </div>
  </form>
</div>


    </div>
  );
}

export default Contacts;
