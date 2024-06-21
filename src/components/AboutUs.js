import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faVideo, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Rings } from 'react-loader-spinner';
import Modal from 'react-modal';

import about from './images/about.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';

Modal.setAppElement('#root');

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState({
    parents: 0,
    students: 0,
    support: 0
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.fade-in-up');
    if (section) {
      section.classList.add('fade-in-up-active');
    }

    const updateRatingOnScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const ratingSection = document.querySelector('.ratings-section');
      if (ratingSection && scrollPosition > ratingSection.offsetTop) {
        const interval = setInterval(() => {
          setRating(prevRating => {
            const newRating = {
              ...prevRating,
              parents: prevRating.parents < 4.6 ? prevRating.parents + 0.1 : 4.6,
              students: prevRating.students < 5 ? prevRating.students + 0.1 : 5,
              support: prevRating.support < 5 ? prevRating.support + 0.1 : 5
            };
            return newRating;
          });
        }, 2000);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener('scroll', updateRatingOnScroll);

    return () => window.removeEventListener('scroll', updateRatingOnScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
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
        <div className=''>
          <div className={`relative roboto-thin h-screen md:h-screen w-screen md:mt-6 fade-in ${!loading ? 'fade-in-active' : ''}`}>
            <img 
              src={about} 
              alt="" 
              className="absolute inset-0 object-cover md:pb-4 md:object-fill h-full w-full z-0 responsive-image" 
            />
            <h2 
              className="absolute text-5xl text-white roboto-thin p-3 rounded-sm z-10 rise-up"
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
          <div className='testimonial-card p-6 m-4 rounded-lg roboto-thin bg-white shadow-md flex flex-col items-center justify-center text-center px-4 fade-in fade-in-active'>
            <div className='relative'>
              <img 
                className='rounded-full md:w-64 w-64 md:h-64 h-64 mb-4' 
                src={image1} 
                alt=''
              />
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='relative w-64 h-64'>
                <a href='https://whatsapp.com' target='_blank' rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faFacebook} className='absolute bg-slate-700 hover:bg-red-700 rounded-full p-2 text-white text-3xl top-48 left-9 transform -translate-x-1/2' />
                 </a> 
                 <a href='https://whatsapp.com' target='_blank' rel="noopener noreferrer"> 
                     <FontAwesomeIcon icon={faInstagram} className='absolute bg-slate-700 hover:bg-red-700 rounded-full p-2 text-white text-3xl right-5 top-52  transform -translate-y-1/2' />
                 </a>
                 <button onClick={openModal}>
                     <FontAwesomeIcon icon={faVideo}className='absolute text-white bg-slate-700 hover:bg-red-700 hover:text-white rounded-full p-9 md:p-12 text-3xl bottom-1/2 left-60 top-24 transform -translate-x-1/2 -translate-y-1/2'   />
                     <h1 className='absolute bottom-1/2 left-60 text-white z-50 text-xs w-24 top-20 transform -translate-x-1/2 -translate-y-1/2'>Watch Video</h1>
                 </button>
                 <a href='https://whatsapp.com' target='_blank' rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faWhatsapp} className='absolute bg-slate-700 hover:bg-red-700 rounded-full p-2 text-white text-3xl -bottom-4 left-1/2 transform -translate-x-1/2' />
                </a>
                </div>
              </div>
            </div>
            <h2 className='font-semibold mt-4'>Promoting scholarly achievement.</h2>
            <p className='text-center'>
              Hon. Osoro care club through NGCDF South Mugirango Constituency we are dedicated to nurturing the potential of students who face financial hardships yet demonstrate exceptional academic promise. We are committed to providing these deserving individuals with the resources they need to succeed, ensuring that financial barriers do not hinder their educational aspirations. Through our comprehensive support system, we offer scholarships, mentoring, and essential educational tools to help students thrive academically and personally. We believe in the transformative power of education and are committed to fostering a community where every student has the opportunity to achieve their dreams and contribute meaningfully to society. Join us in our mission to empower the next generation of leaders and innovators.
            </p>
          </div>
          <div className='bg-gray-100 roboto-thin py-10 fade-in fade-in-active'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8 px-4'>
              <div className='flex-1'>
                <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center mb-8'>
                  <img className='w-52 mx-auto mb-4' src={image2} alt=''/>
                  <h2 className='text-xl font-semibold mb-2'>Transformation</h2>
                  <p className='text-gray-700 mb-4'>Osoro Care Club transforms the lives of bright, underprivileged students by removing financial barriers and fostering academic excellence. We are proud to support this vital initiative, empowering future leaders and ensuring every student has the opportunity to succeed.</p>
                  <h3 className='text-gray-800 font-medium'>Cs. Ezekiel Machogu & Hon. Silvanus Osoro</h3>
                </div>
                <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center'>
                  <img className='w-52 mx-auto mb-4' src={image3} alt=''/>
                  <h2 className='text-xl font-semibold mb-2'>Caring & Determination</h2>
                  <p className='text-gray-700 mb-4'>Osoro Care Club is a beacon of hope, providing vital support to talented students in need. Through scholarships and mentorship, we empower future leaders and innovators. Together, we build a brighter, more equitable future for all.</p>
                  <h3 className='text-gray-800 font-medium'>CDF Manager Mr. Benson Barongo</h3>
                </div>
              </div>
              <div className='flex-1'>
                <div className='testimonial-card bg-white p-6 rounded-lg shadow-md text-center pb-7'>
                  <img className='w-52 h-40 mx-auto mb-4' src={image4} alt=''/>
                  <h2 className='text-xl font-semibold mb-2'>Grateful Parent</h2>
                  <p className='text-gray-700'>A heartfelt thank you to our MP for this generous donation. CareClub transforms lives, ensuring my child and many others have the support they need to excel academically and build a brighter future.</p>
                  <h3 className='text-gray-800 font-medium mt-8'>Mp. Osoro, Parent & Son, and Fund Manager Mr. Onyango</h3>
                </div>
              </div>
            </div>
          </div>
          {/* New image section with ratings */}
          <div className=' block roboto-thin md:flex md:flex-col md:items-center  mt-4 mb-10 py-32 fade-in-up bg-slate-100 ratings-section'>
            <h2 className='text-4xl font-semibold mb-4'>Our Ratings</h2>
            <div className='flex flex-wrap justify-center items-center md:space-x-8'>
              <div className='text-center mb-4'>
                <div className='text-6xl font-bold text-red-500'>{rating.parents.toFixed(1)}</div>
                <div className='text-xl text-gray-600'>4000+ Parents Avg Rating</div>
                <div className='flex justify-center'>
                  {[...Array(Math.floor(rating.parents))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                  ))}
                </div>
              </div>
              <div className='text-center  mb-4'>
                <div className='text-6xl font-bold text-red-500'>{rating.students.toFixed(1)}</div>
                <div className='text-xl text-gray-600'>2000+ Student Reviews</div>
                <div className='flex justify-center'>
                  {[...Array(Math.floor(rating.students))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                  ))}
                </div>
              </div>
              <div className='text-center mb-4'>
                <div className='text-6xl font-bold text-red-500'>{rating.support.toFixed(1)}</div>
                <div className='text-xl text-gray-600'>24/7 100% Support Rating</div>
                <div className='flex justify-center'>
                  {[...Array(Math.floor(rating.support))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* mission, vision, core values and our purpose */}
          <div className='block roboto-thin md:flex justify-between items-center text-center pt-8 pb-8 fade-in fade-in-active'>
            <div className='mission-section mt-10'>
              <div className='image-container shadow-bottom'>
                <img className='mx-auto h-32 w-32' src={image5} alt='' />
              </div>
              <h2 className='text-2xl'>Mission</h2>
              <p>Empowering underprivileged students through education for a brighter future and equitable opportunities.</p>
            </div>
            <div className='vision-section mt-9'>
              <div className='image-container'>
                <img className='mx-auto' src={image6} alt='' />
              </div>
              <h2 className='text-2xl'>Vision</h2>
              <p>Fostering a community where every student thrives academically and contributes meaningfully to society.</p>
            </div>
          </div>
          <div className='block roboto-thin md:flex justify-between items-center text-center mb-16 mt-6 fade-in fade-in-active'>
            <div className='core-values-section md:ml-52 mt-6'>
              <div className='image-container'>
                <img className='mx-auto w-32 h-32' src={image7} alt='' />
              </div>
              <h2 className='text-2xl'>Core Values</h2>
              <ul className='text-center'>
                <li>Equity</li>
                <li>Integrity</li>
                <li>Empowerment</li>
              </ul>
            </div>
            <div className='purpose-section mt-8 md:mt-0'>
              <div className='image-container'>
                <img className='mx-auto w-32 h-32' src={image8} alt='' />
              </div>
              <h2 className='text-2xl'>Our Purpose</h2>
              <p className=''>To break barriers, ignite potential, and empower every student to succeed.</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-button">Close</button>
          <video width="100%" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
}

export default AboutUs;
