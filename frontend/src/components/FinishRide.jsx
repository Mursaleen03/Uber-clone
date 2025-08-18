import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const FinishRide = () => {
  return (
   <div>
      <h5 onClick={()=>{
          props.setConfirmRidePopupPanel(false)
          }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Complete this Ride</h3>
          <div className='flex items-center justify-between mb-5 bg-white p-3 rounded-lg shadow-md'>
            <div className='flex items-center gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <h4 className='text-lg font-medium'>Ishan Sheikh</h4>
          </div>
          <h4 className='text-lg font-medium'>2.5 KM</h4>
          </div>
          <div className='flex justify-between items-center flex-col bg-white p-3 rounded-lg shadow-md'>
            <div className='w-full p-3'>
              <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="text-lg ri-map-pin-range-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm text-gray-500'>Bhagat Singh Chowk, Dhampur</p>
                </div>
              </div>
              <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-range-line"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm text-gray-500'>Bhagat Singh Chowk, Dhampur</p>
                </div>
              </div>
             <div className='flex items-center gap-5 p-3'>
                <i className="ri-money-rupee-circle-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>₹193.36</h3>
                  <p className='text-sm text-gray-500'>Bhagat Singh Chowk, Dhampur</p>
                </div>
              </div>
            </div>
             <div className='w-full'>
               
                
                <div className='flex items-center justify-center w-full gap-2 mt-3'>
                  
               <Link to={'/captain-home'} className='w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'>Complete Ride</Link>
                </div>
                
             
             </div>
          </div>
          
    </div>
  )
}

export default FinishRide