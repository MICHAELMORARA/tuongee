import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import osoro from './images/osoro.png';
import '../App.css'; 

const Home = () => {
  return (
    <div className="relative h-screen md:h-screen w-screen md:mt-6">
      <img src={osoro} alt='Osoro' className="absolute inset-0 object-cover md:object-top h-full w-full" />
      <div className="absolute inset-0 flex flex-col mt-10 justify-center text-white p-4 md:p-8">
        <h1 className="text-1xl md:text-1xl font-bold mb-4 text-start fade-in-down">Building dreams</h1>
        <h1 className="text-2xl md:text-2xl font-bold mb-4 text-start fade-in-down">Empowering dreams</h1>
        <h1 className="text-3xl md:text-3xl font-bold mb-4 text-start fade-in-down">With Osoro Care Club</h1>
        <h1 className="text-4xl md:text-4xl font-bold mb-4 italic text-start text-black fade-in-down">Quote</h1>
        <p className="text-2xl md:text-2xl text-black italic hover:font-extrabold mb-4 text-start fade-in-down">Education is the most powerful weapon which you can use to change the world</p>
        <h1 className="text-2xl md:text-2xl font-bold mb-4 italic text-start fade-in-down">By Nelson Mandela</h1>

        <div className="flex space-x-8 mt-6 fade-in-down">
          <Link to="/aboutus" className="button-hover-effect bg-slate-700 hover:text-white px-4 py-4 mb-4  rounded-sm">
            <span>Learn More <FontAwesomeIcon icon={faArrowRight}  className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
          </Link>
          <Link to="/contacts" className="button-hover-effect bg-slate-700 hover:text-white px-4 py-4 mb-4  rounded-sm">
            <span>Let's Chat <FontAwesomeIcon icon={faArrowRight} className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
