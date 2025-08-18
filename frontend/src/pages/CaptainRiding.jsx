import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(finishRidePanelRef.current, {
      translateY: finishRidePanel ? '0%' : '100%',
  })
}, [finishRidePanel])
  return (
    <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
          <Link to={'/captain-home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className='h-4/5'> 
         <img className='h-full w-full object-cover' src="/src/assets/map.png" />
      </div>
      <div className='h-1/5 flex items-center justify-between p-6 bg-yellow-400 relative'
      onClick={()=>{
        setFinishRidePanel(true);
      }}
      >
      <h5 onClick={()=>{
          }} className='p-1 text-center w-[90%] absolute top-0'><i className="text-3xl text-black ri-arrow-up-wide-fill"></i></h5>
      <h4 className='text-xl font-semibold'>3 KM Away</h4>
      <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg' >Complete Ride</button>
        
      </div>
      
      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10'>
          <FinishRide />
      </div>
    </div>
  )
}

export default CaptainRiding