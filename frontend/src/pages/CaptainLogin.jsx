import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/captainContext';
import {toast} from 'react-toastify';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { captain, setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();


    const submitHandler = async (e) =>{
      e.preventDefault();
      const captain = {
        email: email,
        password: password
      }
      
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        
        if (response.status === 200) {
          const data = response.data;
          setCaptain(data.captain);
          localStorage.setItem('token', data.token);
          navigate('/captain-home');
        }
        
      } catch (error) {
        toast.error('Invalid email or password');
        return;
        
      }

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
