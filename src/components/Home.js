import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import osoro from './images/osoro.png';
import partner from "./images/partner.png";
import '../App.css';
import { Rings } from 'react-loader-spinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen w-full overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black z-50">
            <div className="spinner-container animate-pulse">
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
          <div className="relative mt-20 md:mt-14 h-full roboto-thin">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={osoro} 
                alt="Background" 
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Partner Logo */}
            <div className="absolute top-0 right-0 mt-8 mr-6 flex items-center z-10 transition-all duration-300 hover:scale-105">
              <img src={partner} className="w-12 h-12 md:w-16 md:h-16 mr-3 rounded-full shadow-lg" alt="Partner Logo" />
              <div className="text-start text-sm italic text-green-500 font-semibold">
                <h1 className="tracking-wider">MOTTO</h1>
                <h1 className="border-b border-green-500 pb-1">Education is the Equalizer</h1>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 z-10">
              <div className="max-w-3xl space-y-6">
                {/* Hero Text with Animations */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-start fade-in-down animation-delay-100 text-white drop-shadow-lg">
                    Building Dreams
                  </h1>
                  <h1 className="text-3xl md:text-4xl font-bold text-start fade-in-down animation-delay-200 text-white drop-shadow-lg">
                    Empowering Dreams
                  </h1>
                  <h1 className="text-xl md:text-2xl font-bold text-start fade-in-down animation-delay-300 text-white drop-shadow-lg">
                    With Hon Osoro Care Club Through NGCDF South Mugirango Constituency
                  </h1>
                </div>
                
                {/* Quote Section */}
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl my-8 transform rotate-1 hover:rotate-0 transition-all duration-500 fade-in-up">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2 italic text-black">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-400 mr-2 text-sm" />
                    Quote
                  </h1>
                  <p className="text-xl md:text-2xl text-black italic hover:font-bold mb-2 transition-all duration-300">
                    "Education is the most powerful weapon which you can use to change the world"
                  </p>
                  <div className="flex justify-end">
                    <h1 className="text-lg md:text-xl font-bold italic text-black">
                      By Nelson Mandela
                      <FontAwesomeIcon icon={faQuoteRight} className="text-gray-400 ml-2 text-sm" />
                    </h1>
                  </div>
                </div>
                
                {/* CTA Buttons - Left aligned on small screens with margin */}
                <div className="flex flex-col mb-3 md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-16 md:mt-8 fade-in-up animation-delay-500 ml-2 md:ml-0">
                  <Link 
                    to="/aboutus" 
                    className="w-48 md:w-auto bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-between group"
                  >
                    <span className="font-semibold">Learn More</span>
                    <span className="ml-2 w-7 h-7 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-slate-800">
                      <FontAwesomeIcon icon={faArrowRight} className="text-black group-hover:text-white" />
                    </span>
                  </Link>
                  
                  <Link 
                    to="/contacts" 
                    className="w-48 md:w-auto bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-between group"
                  >
                    <span className="font-semibold ">Let's Chat</span>
                    <span className="ml-2 w-7 h-7 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-green-800">
                      <FontAwesomeIcon icon={faArrowRight} className="text-black group-hover:text-white" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-down {
          animation: fadeInDown 0.8s ease forwards;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.7s;
        }
        
        .roboto-thin {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Home;