import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import about from "./images/about.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from './images/image1.png'; 
import image2 from './images/image2.png'; 
import image3 from './images/image3.png'; 
import image4 from './images/image4.png'; 
import image5 from './images/image5.png'; 
import image6 from './images/image6.png'; 
import image7 from './images/image7.png'; 
import image8 from './images/image8.png'; 

const AboutUs = () => {
  return (
    <div>
  <div className="relative h-screen w-screen md:mt-6">
      <img 
        src={about} 
        alt="About" 
        className="absolute inset-0 object-cover md:pb-4 md:object-fill h-full w-full z-0 responsive-image" 
      />
      <h2 
        className="absolute text-5xl text-white p-3 rounded-sm z-10 rise-up"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '3rem' }}
      >
        About Us
      </h2>
      <div className="absolute flex flex-col items-start space-x-8 z-10 bottom-28 left-20 transform -translate-x-1/2 md:bottom-20 md:left-10 md:flex-row md:space-x-4 md:translate-x-0">
        <Link to="/contacts" className="mt-4 md:mt-0 button-hover-effect bg-slate-700 hover:text-white px-4 py-4 rounded-sm">
          <span>
            Let's Chat 
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' 
            />
          </span>
        </Link>
      </div>
    </div>

      
      {/* Testimonials */}
      <div className=' bg-slate-50 flex flex-col items-center justify-center text-center py-10 px-4'>
        <img 
          className='rounded-full md:w-64 w-64 md:h-64 h-64 mb-4' 
          src={image1} 
          alt='image1'
        />
        <h2 className='  font-semibold '>Promoting scholarly achievement.</h2>
        <p className=' text-center '>
          We are dedicated to nurturing the potential of students who face financial hardships yet demonstrate exceptional academic promise. We are committed to providing these deserving individuals with the resources they need to succeed, ensuring that financial barriers do not hinder their educational aspirations. Through our comprehensive support system, we offer scholarships, mentoring, and essential educational tools to help students thrive academically and personally. We believe in the transformative power of education and are committed to fostering a community where every student has the opportunity to achieve their dreams and contribute meaningfully to society. Join us in our mission to empower the next generation of leaders and innovators.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className='bg-gray-100 py-10'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8 px-4'>
          <div className='flex-1'>
            <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center mb-8'>
              <img className='w-52 mx-auto mb-4' src={image2} alt='Transformation'/>
              <h2 className='text-xl font-semibold mb-2'>Transformation</h2>
              <p className='text-gray-700 mb-4'>Osoro Care Club transforms the lives of bright, underprivileged students by removing financial barriers and fostering academic excellence. We are proud to support this vital initiative, empowering future leaders and ensuring every student has the opportunity to succeed.</p>
              <h3 className='text-gray-800 font-medium'>Cs. Ezekiel Machogu & Hon. Sylivanus Osoro</h3>
            </div>
            <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center'>
              <img className='w-52 mx-auto mb-4' src={image3} alt='Caring & Determination'/>
              <h2 className='text-xl font-semibold mb-2'>Caring & Determination</h2>
              <p className='text-gray-700 mb-4'>Osoro Care Club is a beacon of hope, providing vital support to talented students in need. Through scholarships and mentorship, we empower future leaders and innovators. Together, we build a brighter, more equitable future for all.</p>
              <h3 className='text-gray-800 font-medium'>CDF Manager Mr. Benson Barongo</h3>
            </div>
          </div>
          <div className='flex-1'>
            <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center pb-7'>
              <img className='w-52 h-40 mx-auto mb-4' src={image4} alt='Grateful Parent'/>
              <h2 className='text-xl font-semibold mb-2'>Grateful Parent</h2>
              <p className='text-gray-700 '>A heartfelt thank you to our MP for this generous donation. CareClub transforms lives, ensuring my child and many others have the support they need to excel academically and build a brighter future.</p>
              <h3 className='text-gray-800 font-medium mt-8'>Mp. Osoro, Parent & Son, and Fund Manager Mr. Onyango</h3>
            </div>
          </div>
        </div>
      </div>

 {/* our mission, vision, core values and our purpose */}
<div className='block md:flex justify-between items-center text-center pt-8 pb-8'>
  <div className='mission-section'>
    <div className='image-container shadow-bottom'>
      <img className='mx-auto w-32 h-36 ' src={image5} alt='' />
    </div>
    <h2>Mission</h2>
    <p>Empowering underprivileged students through education for a brighter future and equitable opportunities.</p>
  </div>

  <div className='vision-section mt-6'>
    <div className='image-container'>
      <img className='mx-auto w-32' src={image6} alt='' />
    </div>
    <h2>Vision</h2>
    <p>Fostering a community where every student thrives academically and contributes meaningfully to society.</p>
  </div>
</div>

<div className='block md:flex justify-between items-center text-center mb-10 mt-6'>
  <div className='core-values-section md:ml-52 mt-6'>
    <div className='image-container'>
      <img className='mx-auto w-32 h-32' src={image7} alt='' />
    </div>
    <h2>Core Values</h2>
    <ul className='text-start md:ml-10 ml-40'>
      <li>Equity</li>
      <li>Integrity</li>
      <li>Empowerment</li>
    </ul>
  </div>

  <div className='purpose-section mt-8 md:mt-0'>
    <div className='image-container'>
      <img className='mx-auto w-32 h-28' src={image8} alt='' />
    </div>
    <h2>Our Purpose</h2>
    <p>To break barriers, ignite potential, and empower every student to succeed.</p>
  </div>
</div>


    </div>
  );
}

export default AboutUs;
