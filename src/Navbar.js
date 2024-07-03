import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "./components/images/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gradient-to-r from-slate-700 to bg-black p-4 roboto-thin  text-lg fixed top-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center md:-ml-8'>
          <img className='w-12 h-11 rounded-full ' src={logo} alt=''/>
          <h1 className='ml-2  text-white'>Hon Osoro-Care-Club</h1>
        </div>
        <div className='hidden md:flex space-x-4 -mr-8 bg-slate-800 rounded-full p-4'>
          <Link className='text-white hover:text-gray-400' to="/home">Home</Link>
          <Link className='text-white hover:text-gray-400' to="/aboutus">About Us</Link>
          <Link className='text-white hover:text-gray-400' to="/events">Events</Link>
          <Link className='text-white hover:text-gray-400' to="/reviews">Reviews</Link>
          <button className='bg-green-600 rounded-full p-1 w-40 md:-mt-1'>
          <Link className='text-white hover:text-gray-400' to="/contacts">Get in Touch</Link>
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              size="lg" 
              className={`transition-all duration-1000 ease-in-out ${isOpen ? 'bg-slate-700 p-2 hover:bg-black rotate-360' : 'hover:rotate-0'}`} 
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-start pl-6 space-y-2 mt-4'>
            <li><Link className='text-white hover:text-gray-400' to="/home" onClick={toggleMenu}>Home</Link></li>
            <li><Link className='text-white hover:text-gray-400' to="/aboutus" onClick={toggleMenu}>About Us</Link></li>
            <li><Link className='text-white hover:text-gray-400' to="/events" onClick={toggleMenu}>Events</Link></li>
            <li><Link className='text-white hover:text-gray-400' to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
            <button className='bg-green-600 rounded-lg p-1 -ml-2 w-40'>
            <li><Link className='text-white hover:text-gray-400' to="/contacts" onClick={toggleMenu}>Get In Touch</Link></li>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
