import React from 'react'
import  { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'




function Signin() {
    const [UMC, setUMC] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSignin = () => {
      console.log('Logging in with:', UMC, phone);
    };
  return (
    <form onSubmit={handleSignin}>
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
         <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
           
         
         <div className='relative rounded-l-2xl bg-blue-100'>
            <img
            src="../src/assets/signin.png"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          </div>
          
            <div className='flex flex-col justify-center p-8  md:p-14'>
            
            <span className='mb-5 text-4xl font-bold'>Sign In</span>
            <span className='mb-3 font-light text-gray-500'>Please fill your details</span>
            <div className='py-4'>
             <span className='mb-3 text-md' >UMC Number</span>
              <input
              type="number"
              placeholder="UMC"
              className="w-full p-2 border mt-1 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              value={UMC}
              onChange={(e) => setUMC(e.target.value)}
             />
            </div>
            <div>
              <span className='mb-2 text-md' >Phone Number</span>
              <div className='py-2 mb-6'>
              <PhoneInput 
             country={'in'}
             className="  "
             value={phone}
             onChange={() => setPhone(phone)}
            />
              </div>
             
            </div>
            <div>
            <button
            className="w-full border text-xl font-semibold bg-black border-gray-300 text-white py-2 rounded-lg hover:bg-white hover:text-black"
            onClick={handleSignin} >
             Sign In
            </button>
            </div>
            
            <div className='p-1 pt-7 text-center text-gray-400'>
            Doesn't have an account?
            </div>  
            <Link to="/signup" className='text-center text-lg font-bold text-black ml-2 bg-transparent'>Sign Up</Link>
               
           </div>
          
        </div>
    </div>
    </form>  
);
};



export default Signin


