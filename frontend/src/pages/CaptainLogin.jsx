import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({})
    const submitHandler = (e) =>{
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
      
      setEmail('')
      setPassword('')
      
  
    }
  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
          <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
         type="email" 
         placeholder='email@example.com' 
         className='bg-[#eeee] px-4 py-2 rounded-md w-full text-lg placeholder:text-base mb-4' 
         />
        <h3 className='text-lg font-medium mb-2'>What's your password</h3>

        <input required 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        type="password" 
        placeholder='********' 
        className='bg-[#eeee] px-4 py-2 rounded-md w-full text-lg placeholder:text-base' 
        />
        <button className='flex items-center justify-center w-full bg-black text-white font-semibold py-3 rounded-md mt-6 mb-3'>Login</button>
      </form>
        <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Register as a captain</Link></p>
          </div>
          <div>
            <Link 
            to='/login'
            className='flex items-center justify-center w-full bg-orange-600 text-white font-semibold py-3 rounded-md mt-6'>Sign in as User</Link>
          </div>
    </div>
  )
}

export default CaptainLogin
