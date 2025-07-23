import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CaptainSignup = () => {
  const navigate = useNavigate();
  

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { setCaptain } = React.useContext(CaptainDataContext);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          plate: vehiclePlate,
          color: vehicleColor,
          capacity: vehicleCapacity,
          type: vehicleType
        }
      }
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        if (response.status === 201) {
         const data = response.data;
          setCaptain(data);
          localStorage.setItem('token', data.token);
          navigate('/captain-home');
        }
        
      } catch (error) {
        toast.error("Something went wrong")
        
      }
      
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setVehiclePlate('');
      setVehicleColor('');
      setVehicleCapacity('');
      setVehicleType('');
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
            <h3 className='text-base font-medium mb-2 mt-2'>Vehicle Details</h3>
      <div className='flex gap-4 mb-4'>
        <input 
          type='text'
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          required
          placeholder='Vehicle Plate Number'
          className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm'
        />
        <input 
          type='text'
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          required
          placeholder='Vehicle Color'
          className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm'
        />
      </div>
      <div className='flex gap-4 mb-4'>
        <input 
          type='number'
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          required
          placeholder='Vehicle Capacity'
          className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm'
        />
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
          className='bg-[#eeee] px-4 py-2 rounded-md w-1/2 text-lg placeholder:text-sm'
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
          <option value="van">Van</option>
        </select>
      </div>
        <button className='flex items-center justify-center w-full bg-black text-white font-semibold py-3 rounded-md mt-6 mb-3'>Create Captain Account</button>
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
