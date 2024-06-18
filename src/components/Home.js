import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import osoro from './images/osoro.png';
import '../App.css'; 
import { Rings } from 'react-loader-spinner'; // Import the Oval spinner component

const Home = () => {
  const [loading, setLoading] = useState(true); // State to track loading
  useEffect(() => {
    // Simulate a timeout for loading
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 4000); // 2000 milliseconds = 2 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only once after component mounting

  return (
    <div className='bg-black'>
    <div className="relative h-screen md:h-screen w-screen md:mt-6">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center spinner-animation">
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
      {/* Render the content of the page */}
      {!loading && (
        <div className='roboto-thin'>
          <img src={osoro} alt='' className="absolute inset-0 object-cover md:object-top h-full w-full" />
          <div className="absolute inset-0 flex flex-col mt-10 justify-center text-white p-4 md:p-8">
            <h1 className="text-2xl md:text-xl font-bold mb-4 text-start fade-in-down">Building dreams</h1>
            <h1 className="text-2xl md:text-2xl font-bold mb-4 text-start fade-in-down">Empowering dreams</h1>
            <h1 className="text-2xl md:text-2xl font-bold mb-4 text-start fade-in-down">With Hon Osoro Care Club Through NGCDF South Mugirango Constituency</h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 italic text-start text-black fade-in-down">Quote</h1>
            <p className="text-3xl md:text-2xl text-black italic hover:font-extrabold mb-4 text-start fade-in-down">Education is the most powerful weapon which you can use to change the world</p>
            <h1 className="text-2xl md:text-2xl font-bold mb-4 italic text-start fade-in-down">By Nelson Mandela</h1>

            <div className="flex  space-x-8 mt-8 fade-in-down">
              <Link to="/aboutus" className="button-hover-effect bg-slate-700 hover:text-white px-4 py-4 mb-4  rounded-sm">
                <span>Learn More <FontAwesomeIcon icon={faArrowRight}  className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
              </Link>
              <Link to="/contacts" className="button-hover-effect bg-slate-700 hover:text-white px-4 py-4 mb-4  rounded-sm">
                <span>Let's Chat <FontAwesomeIcon icon={faArrowRight} className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
              </Link>
            </div>
          </div>
        </div>
         

      )}
    </div>
    </div>
  );
}

export default Home;
