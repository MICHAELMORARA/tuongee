import React, { useState, useEffect } from 'react';
import '../App.css';
import image18 from "./images/image18.png";
import image20 from "./images/image20.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Rings } from 'react-loader-spinner';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [primarySchool, setPrimarySchool] = useState('');
  const [birthCertificateNumber, setBirthCertificateNumber] = useState('');
  const [parentsId, setParentsId] = useState('');
  const [secondarySchool, setSecondarySchool] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [ward, setWard] = useState('');
  const [location, setLocation] = useState('');
  const [subLocation, setSubLocation] = useState('');
  const [file, setFile] = useState(null);
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [popup, setPopup] = useState({ show: false, success: false });

  const wardOptions = [ 
    'TABAKA',
    'BOGETENGA',
    "BOIKANG'A",
    "MOTICHO",
    "GETENGA",
    "BORABU-CHITAGO",];
  const locationOptions = [ 
    'CHITAGO',
    'KABIERO',
    'S.M.BORABU',
    'GETENGA',
    'OTENDO',
    'NYANSAKIA',
    'GETONO',
    'S.M. CENTRAL',
    'NYAKEMBENE',
    'MARONGO',
    'S.M CHACHE',
    'BOSINANGE',
    'BOMONYARA'];
  const subLocationOptions = [ 
    "AMAKARA",
    "BOIGE",
    "KIAGWARE",
    "BOTABORI",
    "MONIANKU",
    "NYAMONDO",
    "NYARAMBA",
    "MUMA",
    "BOSAGA",
    "NYABERA",
    "NDONYO",
    "EBURI",
    "NYATARO",
    "NYANSORE",
    "BOGETENGA",
    "NDURU",
    "BOMONYAMA",
    "BOIKANG'A",
    "EMESA",
    "IKORO",
    "NYAKORERE",
    "BOKIMAI",
    "BOMWARE/BOTA",
    "BONYAGWANGA",
    "BOMBURE",
    "IRINGA",
    "NYATIKE"
   
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

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

    setSubmitting(true);

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('primarySchool', primarySchool);
    formData.append('birthCertificateNumber', birthCertificateNumber);
    formData.append('parentsId', parentsId);
    formData.append('secondarySchool', secondarySchool);
    formData.append('admissionNumber', admissionNumber);
    formData.append('ward', ward);
    formData.append('location', location);
    formData.append('subLocation', subLocation);
    if (file) {
      formData.append('file', file);
    }

    fetch('https://contact-form-backend-kappa.vercel.app/send', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setSubmitting(false);
        console.log('Response from server:', data);
        if (data.message) {
          openPopup(true);
        } else {
          openPopup(false);
        }
        resetForm();
      })
      .catch(error => {
        setSubmitting(false);
        console.error('Error:', error);
        openPopup(false);
      });
  };

  const openPopup = (success) => {
    setPopup({ show: true, success });
  };

  const closePopup = () => {
    setPopup({ show: false, success: false });
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setSubject('');
    setMessage('');
    setPrimarySchool('');
    setBirthCertificateNumber('');
    setParentsId('');
    setSecondarySchool('');
    setAdmissionNumber('');
    setWard('');
    setLocation('');
    setSubLocation('');
    setFile(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <div className="flex justify-center items-center flex-grow bg-black">
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
        <div className='bg-slate-50'>
          {submitting && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
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
          )}
          <div className="flex-grow md:-mt-28">
            {/* Modified image container with reduced height */}
            <div className="relative overflow-hidden" style={{ maxHeight: '1000px' }}>
              <img 
                src={image18} 
                alt="" 
                className="object-cover w-full mirror-overlay object-top" 
              />
            </div>
          </div>
  
          <div className='max-w-80  bg-white mt-8  px-2 pb-6  md:px-6 rounded-lg shadow-md text-start mb-8 md:max-w-2xl mx-auto hover:text-black'>
            <img className='md:w-auto md:mx-auto  mb-4' src={image20} alt='' />
            <h2 className='text-5xl mt-3 roboto-thin mb-6'>Contact <span className='font-bold text-5xl roboto-thin text-black'>Us</span></h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='full-name'>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='full-name'
                  name='full-name'
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
                {fullNameError && <p className="text-red-500">{fullNameError}</p>}
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='email'>Email</label>
                <input
                  className='text-black border rounded p-2'
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='phone-number'>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={'us'}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputClass='text-black border rounded'
                  containerClass='flex max-w-4'
                  required
                />
                {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='primary-school'>
                  Primary School <span className="text-red-500">*</span>
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='primary-school'
                  name='primary-school'
                  value={primarySchool}
                  onChange={(e) => setPrimarySchool(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='birth-certificate-number'>
                  Birth Certificate Number <span className="text-red-500">*</span>
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='birth-certificate-number'
                  name='birth-certificate-number'
                  value={birthCertificateNumber}
                  onChange={(e) => setBirthCertificateNumber(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='parents-id'>
                  Parents ID <span className="text-red-500">*</span>
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='parents-id'
                  name='parents-id'
                  value={parentsId}
                  onChange={(e) => setParentsId(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='secondary-school'>
                  Secondary School Admitted <span className="text-red-500">*</span>
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='secondary-school'
                  name='secondary-school'
                  value={secondarySchool}
                  onChange={(e) => setSecondarySchool(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='admission-number'>
                  Admission Number
                </label>
                <input
                  className='text-black border rounded p-2'
                  type='text'
                  id='admission-number'
                  name='admission-number'
                  value={admissionNumber}
                  onChange={(e) => setAdmissionNumber(e.target.value)}
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='ward'>
                  Ward <span className="text-red-500">*</span>
                </label>
                <select
                  className='text-black border rounded p-2'
                  id='ward'
                  name='ward'
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  required
                >
                  <option value="">Select Ward</option>
                  {wardOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='location'>
                  Location <span className="text-red-500">*</span>
                </label>
                <select
                  className='text-black border rounded p-2'
                  id='location'
                  name='location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option value="">Select Location</option>
                  {locationOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='sub-location'>
                  Sub-location <span className="text-red-500">*</span>
                </label>
                <select
                  className='text-black border rounded p-2'
                  id='sub-location'
                  name='sub-location'
                  value={subLocation}
                  onChange={(e) => setSubLocation(e.target.value)}
                  required
                >
                  <option value="">Select Sub-location</option>
                  {subLocationOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col space-y-2'>
                <label className='text-gray-500 font-semibold roboto-thin' htmlFor='attachment'>
                  Attach File
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.svg,.xls,.xlsx"
                />
              </div>
              <div className="button-hover-effect font-bold mt-6 w-40 bg-slate-700 hover:text-white hover:bg-slate-800 px-4 py-4 mb-4 rounded-sm">
                <button type='submit' disabled={submitting}>
                  {submitting ? (
                    <Rings
                      visible={true}
                      height={20}
                      width={20}
                      color="white"
                      ariaLabel="rings-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <span className='roboto-thin text-xs font-bold'>
                      SEND MESSAGE <FontAwesomeIcon icon={faArrowRight} className='p-1 text-black bg-white hover:bg-slate-800 rounded-full' />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {popup.show && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            {popup.success ? (
              <div>
                <h2 className="text-green-600 text-2xl font-bold mb-4">Success!</h2>
                <p className="text-gray-800">Your message has been submitted successfully.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-red-600 text-2xl font-bold mb-4">Submission Failed</h2>
                <p className="text-gray-800">There was an error submitting your message. Please try again later.</p>
              </div>
            )}
            <button onClick={closePopup} className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;