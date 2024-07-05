import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import '../App.css';
import image13 from "./images/image13.png";
import image14 from "./images/image14.png"; 
import image15 from "./images/image15.png"; 
import image16 from "./images/image16.png"; 
import image17 from "./images/image17.png"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rings } from 'react-loader-spinner'; // Import the Oval spinner component

const Reviews = () => {
  const [loading, setLoading] = useState(true); // State to track loading
  useEffect(() => {
    // Simulate a timeout for loading
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 4000); // 2000 milliseconds = 2 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only once after component mounting

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure arrows are enabled if you want navigation
    autoplay: true, // Enable autoplay if needed
    autoplaySpeed: 2000 // Set autoplay speed
  };

  return (
    <div className="relative h-screen w-screen md:mt-6">
    <div className="slider-container pt-40 pb-36 ">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black" style={{ height: '100vh' }}>
          {/* Display a red background and the Oval spinner */}
          <div className="spinner-container">
            <Rings
              visible={true}
              height={100}
              width={100}
              color="white"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      {!loading && (
        <Slider {...settings}>
          <div className=' roboto-thin md:p-2 p-6 md:-mt-3 '>
            <h2 className='text-black text-3xl  font-bold text-center'>What Beneficiaries Say</h2>
            <p className='italic md:-ml-3 mt-3'>With Osoro Care Club through NG-CDF South Mugirango, I feel reassured and supported every step of the way. Their dedication to providing top-notch care is unmatched. I highly appreciate their commitment to our well-being.</p>
            <img className='rounded-full w-44 h-44 mx-auto mt-7 md:mt-4' src={image13} alt=''/>
            <h3 className='text-black font-semibold italic mt-8 md:mt-4'>Mrs. Zipporah & Daughter</h3>
          </div>
          <div className=' roboto-thin md:p-2 p-6 md:-mt-7'>
            <h2 className='text-black text-2xl md:mt-6 font-bold text-center'>What Beneficiaries Say</h2>
            <p className='italic mt-3'>Thanks to our able Hon. Silvanus Osoro, we feel more secure and well-cared for every day for inventing Osoro-Care-Club through NG-CDF South Mugirango Constituency to assist vulnerable students with full scholarship from form one to form four.</p>
            <img className='rounded-full w-44 h-44 mx-auto mt-7 md:mt-4' src={image14} alt=''/>
            <h3 className='text-black font-semibold italic mt-8 md:mt-4'>Mr. Onyango (Fund Account Manager) </h3>
          </div>
          <div className=' roboto-thin md:p-2 p-6 md:-mt-7'>
            <h2 className='text-black text-2xl md:mt-6 font-bold text-center'>What Beneficiaries Say</h2>
            <p className='italic mt-3'>Osoro Care Club through NG-CDF South Mugirango Constituency has profoundly impacted our family's well-being, offering unparalleled support and care. Their dedication and professionalism are truly exceptional. We couldn't be happy without their service.</p>
            <img className='rounded-full w-44 h-44 mx-auto mt-7 md:mt-4' src={image15} alt=''/>
            <h3 className='text-black font-semibold mt-8 md:mt-4'>Top Achievers</h3>
          </div>
          <div className=' roboto-thin md:p-6 p-6 md:-mt-7'>
            <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
            <p className='italic mt-3'>The level of care and support we receive from Osoro Care Club through NG-CDF South Mugirango Constituency is extraordinary. Their professional and compassionate approach has truly enhanced our lives. We couldn't ask for better service.</p>
            <img className='rounded-full w-44 h-44 mx-auto mt-7 md:mt-4' src={image16} alt=''/>
            <h3 className='text-black font-semibold italic mt-8 md:mt-4'>OCPD Thomas</h3>
          </div>
          <div className=' roboto-thin md:p-6 p-7 md:-mt-7'>
            <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
            <p className='italic mt-2'>Dear Beneficiaries, Your trust and satisfaction inspire our relentless commitment to excellence. We are profoundly grateful for your continued support and look forward to serving you with unwavering dedication and care. Warm regards,</p>
            <img className='rounded-full w-44 h-44 mx-auto mt-7 md:mt-4' src={image17} alt=''/>
            <h3 className='text-black font-semibold italic mt-8 md:mt-4'>Hon. Silvanus Onyiego Osoro</h3>
          </div>
        </Slider>
      )}
    </div>
    </div>
  );
}

export default Reviews;
