import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState('');
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
      })
      
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    }
    
  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
          <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>

        <h3 className='text-base font-medium mb-2'>What's our Captain's Name</h3>
        <div className='flex gap-4 mb-4'>
          <input 
          type='text'
          required
          className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm' 
          placeholder='First Name' 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
         />
         <input 
         type='text'
         required
         className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm' 
         placeholder='Last Name'
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         />
        </div>

        <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
        <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
         
         placeholder='email@example.com' 
         className='bg-[#eeee] px-4 py-2 rounded-md w-full text-lg placeholder:text-sm mb-4' 
         />
        <h3 className='text-base font-medium mb-2'>What's your password</h3>

        <input 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
         
        placeholder='********' 
        className='bg-[#eeee] px-4 py-2 rounded-md w-full text-lg placeholder:text-sm' 
        />
        <button className='flex items-center justify-center w-full bg-black text-white font-semibold py-3 rounded-md mt-6 mb-3'>Login</button>
      </form>
        <p className='text-center'>Already have an Account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
          </div>
          <div>
            <p className='text-[10px] leading-tight'>By registering an account, you acknowledge that you have read, understood, and agreed to be bound by these <span className='underline'>Terms and Conditions.</span></p>
          </div>
    </div>
  )
}

export default CaptainSignup
