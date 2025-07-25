import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({})
  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    
    setEmail('')
    setPassword('')
    

  }
  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
          <div>
            <img className='w-16 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
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
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
          </div>
          <div>
            <Link 
            to='/captain-login'
            className='flex items-center justify-center w-full bg-green-600 text-white font-semibold py-3 rounded-md mt-6'>Sign in as Captain</Link>
          </div>
    </div>
  )
}

export default UserLogin
