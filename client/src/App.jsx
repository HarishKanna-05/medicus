import { useState } from 'react'
import './App.css'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import OTP from './Components/OTP'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'



function App() {
 
  return (
    
    <div>
      <BrowserRouter>
       <Routes>
        <Route index element={<Signin/>}></Route>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/otp' element={<OTP/>}></Route>
       </Routes>
      </BrowserRouter> 
    </div>
    

    
  )
}

export default App


