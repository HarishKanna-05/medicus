import React, { useState } from 'react';
import OtpInput from 'otp-input-react'

const OTP = () => {
  const [otp, setOTP] = useState('');

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle OTP verification logic
    console.log("OTP submitted: ", otp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-blue-300 p-8 rounded-lg shadow-2xl ">
        <span className="text-4xl font-bold mb-4">Welcome </span>
        <div>
        <span className="text-lg font-bold mb-4">Medicus Link</span>
        </div>
        
        
          <label  className="pt-3 pb-2 block text-sm font-medium text-gray-700">Please enter OTP:</label>
          <OtpInput OTPLength={6} className="p-3 text-black mb-1 "></OtpInput>
          
          <button type="submit" className="bg-black ml-3 text-white font-semiboldmt-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
          Verify OTP
        </button>
          
        
      </form>
    </div>
  );
};

export default OTP;
