import React, { useState, useEffect } from 'react';
import '../App.css';
import image18 from "./images/image18.png";
import image20 from "./images/image20.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';
import PhoneInput from 'react-phone-input-2'; // Import the react-phone-input-2 component
import 'react-phone-input-2/lib/style.css'; // Import the styles for the react-phone-input-2 component

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    setFullNameError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setPhoneNumberError('');
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= 25000000) {
      setFile(selectedFile);
    } else {
      setFile(null);
      alert('Please select a file smaller than 25MB.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (fullName.trim() === '') {
      setFullNameError('Please enter your full name.');
      return;
    }
    if (email.trim() === '') {
      setEmailError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Please enter your phone number.');
      return;
    }
  
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('subject', subject);
    formData.append('message', message);
    if (file) {
      formData.append('file', file);
    }
  
    fetch('http://localhost:5000/send', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data); // Log server response
        if (data.message) {
          window.alert('Submitted Successfully');
        } else {
          window.alert('Submission Failed. Please try again.');
        }
        // Reset form fields
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setSubject('');
        setMessage('');
        setFile(null);
      })
      .catch(error => {
        console.error('Error:', error); // Log error
        window.alert('Submission failed. Please try again.');
      });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="flex justify-center items-center flex-grow bg-white">
          <div className="spinner-container">
            <Oval
              visible={true}
              height={60}
              width={60}
              color="#ffffff"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      {!loading && (
        <div className='bg-slate-50'>
          <div className="flex-grow">
            <img 
              src={image18} 
              alt="" 
              className="object-cover w-full" 
            />
          </div>
  
          <div className='max-w-80 bg-white mt-6 px-2 pb-6 rounded-lg shadow-md text-start mb-8 md:max-w-2xl mx-auto hover:text-black'>
            <img className='md:w-auto md:mx-auto mb-4' src={image20} alt='' />
            <h2 className='text-5xl mt-3 roboto-thin mb-6'>Contact <span className='font-bold text-5xl roboto-thin text-black'>Us</span></h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='flex items-center'>
                <label className='w-20  text-gray-500 font-semibold roboto-thin' htmlFor='full-name'>Full Name</label>
                <input
                  className='flex-1 border text-black rounded p-2'
                  type='text'
                  id='full-name'
                  name='full-name'
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              {fullNameError && <p className="text-red-500">{fullNameError}</p>}
              <div className='flex items-center'>
                <label className='w-20  text-gray-500 font-semibold  roboto-thin' htmlFor='email'>Email</label>
                <input
                  className='flex-1 text-black border rounded p-2'
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              {emailError && <p className="text-red-500">{emailError}</p>}
              <div className='flex items-center'>
                <label className='w-20 text-gray-500 font-semibold  roboto-thin' htmlFor='phone-number'>Phone Number</label>
                <PhoneInput
                  country={'us'} // Default country
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputClass='text-black border rounded  '
                  containerClass='flex max-w-6 '
                  required
                />
              </div>
              {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
              <div className='flex items-center'>
                <label className='w-20  text-gray-500 font-semibold  roboto-thin ' htmlFor='subject'>Subject</label>
                <input
                  className='flex-1 text-black border rounded p-2'
                  type='text'
                  id='subject'
                  name='subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required/>
              </div>
              <div className='flex items-center'>
                <label className='w-20  text-gray-500 font-semibold roboto-thin' htmlFor='message'>Enter Your Message</label>
                <textarea
                  className='flex-1 text-black border rounded p-2'
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows='4'
                  required
                ></textarea>
              </div>
              <div className='flex items-center'>
                <label className='w-32 text-gray-500 font-semibold roboto-thin ' htmlFor='attachment'>Attach File</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.svg,.xls,.xlsx"/>
              </div>
              <div className="button-hover-effect  font-bold mt-6 w-40 bg-slate-700 hover:text-white hover:bg-slate-800 px-4 py-4 mb-4 rounded-sm">
                <button type='submit'>
                <span className='roboto-thin text-xs font-bold'>SEND MESSAGE <FontAwesomeIcon icon={faArrowRight} className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' /></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;
