import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, getAuth,signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";


   

function Signup  () {
  const [formData, setFormData] = useState({
    username: '',
    aadhar: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };
  
  const [phone,setPhone]= useState("")
  const [user, setUser] =useState(null)
  const [otp, setOtp] = useState("")

  const sendOtp= async()=>{
    try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
      setUser(confirmation)
    }catch(err){
      console.error(err)
    }
  }

  const verifyOtp= async()=>{
    try{
      const data =await user.confirm(otp)
      console.log(data)
    }catch(err){
      console.error(err)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="min-h-screen flex items-center justify-center h-screen bg-gray-200">
        <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
            <div className='flex flex-col justify-center p-8  md:p-14 '>
            <span className="text-4xl font-bold mb-5">Sign up</span>
            <span className='text-gray-500 font-light mb-2'>Please fill your details</span>
            <div className='mt-2 py-1'>
            <span className="mb-2 ">Username</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="my-1 p-1 px-2 border w-full rounded-md border-gray-300 placeholder:font-light placeholder:text-gray-500 "
                placeholder="Username"
             />
            </div>
            <div className='py-1'>
            <span className="mb-2">Aadhar Number</span>
            <input
            type="number"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            className="my-1 p-1 px-2 border w-full rounded-md border-gray-300 placeholder:font-light placeholder:text-gray-500"
            placeholder="Aadhar"
            />
            </div>
            <div className='py-1' >
            <span className="mb-2">Phone Number</span>
            <div className='py-2'>
            <PhoneInput 
             country={'in'}
             className="  "
             value={phone}
             onChange={(phone) => setPhone("+" +phone)}
            />
            </div>
            </div>
            <div className=' rounded-lg p-1 flex flex-col justify-center'>

            <input onClick={(e)=> setOtp(e.target.value)} className='border p-1  w-full rounded-md border-gray-300 placeholder:font-light placeholder:text-gray-500 ' placeholder='Enter Otp' onChange={(e)=> sendOtp(e.target.value)} />

            <div className='pt-3'>
            <button onClick={sendOtp}  className='bg-black ml-6 text-white font-semiboldmt-2 px-4 py-2 rounded-md hover:bg-white hover:text-black '>Send OTP</button>
            <button onClick={verifyOtp}  className="bg-black ml-16 text-white font-semiboldmt-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
              Verify OTP
             </button>
             
            </div>
            
            </div>
            <div id="recaptcha" className=''></div>
            
            
            <div>
             <button type="submit" className="my-2  w-full border text-xl font-semibold bg-black border-gray-300 text-white py-2 rounded-lg hover:bg-white hover:text-black">
             Sign Up
             </button>
             </div>
             <div className='p-1 pt-2 text-center text-gray-400'>
            Already have an account?
            <Link to="/signin" className='text-center text-lg font-bold text-black ml-2 bg-transparent'>Sign In</Link>
            </div>  
            
            </div>
            <div className='relative rounded-r-2xl bg-blue-100'>
             <img
             src="../src/assets/signin.png"
             alt="img"
             class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"/>    
            </div>
            </div>  
       </div>
    </form>
  
  );
};

export default Signup