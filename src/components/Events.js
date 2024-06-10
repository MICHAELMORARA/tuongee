import React, { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import image11 from "./images/image11.png";
import image12 from "./images/image12.png";
import { Oval } from 'react-loader-spinner'; // Import the Oval spinner component

const Events = () => {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a timeout for loading
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only once after component mounting

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          {/* Display a red background and the Oval spinner */}
          <div className="spinner-container">
            <Oval
              visible={true}
              height={60}
              width={60}
              color="black"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      {!loading && (
        <>
          <div className="relative h-screen w-screen md:mt-6 roboto-thin">
            <img 
              src={image9} 
              alt="" 
              className="absolute inset-0 object-cover md:object-top h-full w-full z-0" 
            />
            <h2 
              className="absolute text-5xl text-white p-3 rounded-sm z-10 rise-up"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '3rem' }}
            >
              Showcase Events
            </h2>
            <div className="absolute flex  roboto-thin flex-col items-start space-x-8 z-10 bottom-28 left-20 transform -translate-x-1/2 md:bottom-20 md:left-10 md:flex-row md:space-x-4 md:translate-x-0">
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
          <div className='bg-gray-100 py-10 roboto-thin'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8 px-4'>
              <div className='flex-1'>
                <div className='testimonial-card bg-white p-6 rounded-lg text-center mb-8'>
                  <img className='w-52 mx-auto mb-4' src={image10} alt=''/>
                  <p className='text-gray-700 mb-4'>The Osoro Care Club exemplifies altruism by aiding needy students through extensive support, ensuring their academic and personal development flourishes. This compassionate initiative not only provides essential resources but also fosters a nurturing environment for holistic growth, underscoring the profound impact of community solidarity.</p>
                </div>
                <div className='testimonial-card bg-white p-6 rounded-lg  text-center'>
                  <img className='w-52 mx-auto mb-4' src={image11} alt=''/>
                  <p className='text-gray-700 mb-4'>In addition to supplying necessities, the club actively motivates students by recognizing and rewarding their academic and extracurricular achievements. These awards serve as powerful incentives, inspiring recipients to strive for excellence and fostering a culture of perseverance and dedication among their peers.</p>
                </div>
              </div>
              <div className='flex-1'>
                <div className='testimonial-card bg-white   p-5 rounded-lg  text-center'>
                  <img className='w-52 h-40 mx-auto mb-4' src={image12} alt=''/>
                  <p className='text-gray-700 '>Through unwavering commitment and benevolence, Osoro Care Club has become a beacon of hope, transforming lives and empowering students to transcend adversity. Their efforts underscore the transformative power of support and recognition, driving sustained success and societal contribution.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Events;
