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
import { Rings } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    className: "testimonial-slider"
  };

  const testimonials = [
    {
      quote: "With Osoro Care Club through NG-CDF South Mugirango, I feel reassured and supported every step of the way. Their dedication to providing top-notch care is unmatched. I highly appreciate their commitment to our well-being.",
      image: image13,
      name: "Mrs. Zipporah & Daughter",
      rating: 5
    },
    {
      quote: "Thanks to our able Hon. Silvanus Osoro, we feel more secure and well-cared for every day for inventing Osoro-Care-Club through NG-CDF South Mugirango Constituency to assist vulnerable students with full scholarship from form one to form four.",
      image: image14,
      name: "Mr. Onyango (Fund Account Manager)",
      rating: 5
    },
    {
      quote: "Osoro Care Club through NG-CDF South Mugirango Constituency has profoundly impacted our family's well-being, offering unparalleled support and care. Their dedication and professionalism are truly exceptional. We couldn't be happy without their service.",
      image: image15,
      name: "Top Achievers",
      rating: 5
    },
    {
      quote: "The level of care and support we receive from Osoro Care Club through NG-CDF South Mugirango Constituency is extraordinary. Their professional and compassionate approach has truly enhanced our lives. We couldn't ask for better service.",
      image: image16,
      name: "OCPD Thomas",
      rating: 5
    },
    {
      quote: "Dear Beneficiaries, Your trust and satisfaction inspire our relentless commitment to excellence. We are profoundly grateful for your continued support and look forward to serving you with unwavering dedication and care. Warm regards,",
      image: image17,
      name: "Hon. Silvanus Onyiego Osoro",
      rating: 5
    }
  ];

  return (
    <div className="relative mt-12 min-h-screen bg-gradient-to-b from-white to-slate-100">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black" style={{ height: '100vh' }}>
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
        <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block">
              <span className="relative z-10">Testimonials</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-slate-800 opacity-70 rounded-full swing-animation"></span>
            </h1>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Hear what our beneficiaries have to say about the impact of our initiatives and support.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="outline-none">
                  <div className="p-6 md:p-12 flex flex-col items-center">
                    <div className="mb-6 relative">
                      <img 
                        className="rounded-full h-32 w-32 md:h-40 md:w-40 object-cover border-4 border-slate-100 shadow-md" 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-300 mr-1" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">{testimonial.name}</h3>
                      <div className="h-1 w-16 bg-slate-800 mx-auto mt-2 rounded-full swing-animation"></div>
                    </div>
                    
                    <div className="relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-4 -left-2 text-slate-300 text-3xl opacity-50" />
                      <p className="text-slate-700 text-lg italic leading-relaxed max-w-2xl mx-auto text-center px-6">
                        {testimonial.quote}
                      </p>
                      <FontAwesomeIcon icon={faQuoteRight} className="absolute -bottom-4 -right-2 text-slate-300 text-3xl opacity-50" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Join Our Community of Supporters
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Experience the impact of our work firsthand. Your support helps us continue 
              making a difference in the lives of many across South Mugirango.
            </p>
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes swing {
          0% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          100% { transform: translateX(-5px); }
        }
        
        .swing-animation {
          animation: swing 3s ease-in-out infinite;
        }
        
        .custom-dots {
          bottom: -40px;
        }
        .custom-dots li button:before {
          font-size: 12px;
          color: #1e293b; /* Updated to slate-800 */
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          color: #1e293b; /* Updated to slate-800 */
          opacity: 1;
        }
        .testimonial-slider .slick-prev:before, 
        .testimonial-slider .slick-next:before {
          color: #1e293b; /* Updated to slate-800 */
          font-size: 26px;
        }
        .testimonial-slider .slick-prev {
          left: -40px;
        }
        .testimonial-slider .slick-next {
          right: -40px;
        }
        @media (max-width: 768px) {
          .testimonial-slider .slick-prev {
            left: -10px;
            z-index: 1;
          }
          .testimonial-slider .slick-next {
            right: -10px;
            z-index: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Reviews;