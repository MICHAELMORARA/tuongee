import React from 'react';
import Slider from "react-slick";
import '../App.css';
import image13 from "./images/image13.png";
import image14 from "./images/image14.png"; 
import image15 from "./images/image15.png"; 
import image16 from "./images/image16.png"; 
import image17 from "./images/image17.png"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
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
    <div className="slider-container pt-40 pb-36 ">
      <Slider {...settings} className='pb-4'>
        <div>
          <h2 className='text-black text-3xl font-bold text-center'>What Beneficiaries Say</h2>
          <p className='italic mt-3'>With Osoro Care Club, I feel reassured and supported every step of the way. Their dedication to providing top-notch care is unmatched. I highly appreciate their commitment to our well-being.</p>
          <img className='rounded-full w-44 h-44 mx-auto mt-7' src={image13} alt='images'/>
          <h3 className='text-black font-semibold italic mt-8'>Mrs. Zipporah & Daughter</h3>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
          <p className='italic mt-3'>Thanks to our able Hon. Sylivanus Osoro, we feel more secure and well-cared for every day for inventing Osoro-Care-Club.</p>
          <img className='rounded-full w-44 h-44 mx-auto mt-7' src={image14} alt='images'/>
          <h3 className='text-black font-semibold italic mt-8'>Eliud</h3>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
          <p className='italic mt-3'>Osoro Care Club has profoundly impacted our family's well-being, offering unparalleled support and care. Their dedication and professionalism are truly exceptional. We couldn't be happy without their service.</p>
          <img className='rounded-full w-44 h-44 mx-auto mt-7' src={image15} alt='images'/>
          <h3 className='text-black font-semibold mt-8'>Top Achievers</h3>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
          <p className='italic mt-3'>The level of care and support we receive from Osoro Care Club is extraordinary. Their professional and compassionate approach has truly enhanced our lives. We couldn't ask for better service.</p>
          <img className='rounded-full w-44 h-44 mx-auto mt-7' src={image16} alt='images'/>
          <h3 className='text-black font-semibold italic mt-8'>Warren</h3>
        </div>
        <div>
          <h2 className='text-black text-2xl font-bold text-center'>What Beneficiaries Say</h2>
          <p className='italic mt-3'>Dear Beneficiaries, Your trust and satisfaction inspire our relentless commitment to excellence. We are profoundly grateful for your continued support and look forward to serving you with unwavering dedication and care.Warm regards,</p>
          <img className='rounded-full w-44 h-44 mx-auto mt-7' src={image17} alt='images'/>
          <h3 className='text-black font-semibold italic mt-8'>Hon. Sylivanus Onyiego Osoro</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;
