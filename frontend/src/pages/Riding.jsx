import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl ri-home-4-line"></i>
        </Link>
      <div className='h-1/2'>
         <img className='h-full w-full object-cover' src="/src/assets/map.png" />
      </div>
      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
              <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
              <div className='text-right'>
                <h2 className='text-lg font-medium'>Ishan</h2>
                <h1 className='text-xl font-bold -mt-2 -mb-1'>UP20 AT 4567</h1>
                <p className='text-sm text-gray-500'>Maruti Suzuki, 800</p>
              </div>
          </div>
          
          <div className='flex justify-between items-center flex-col'>
            <div className='w-full p-3'>
              
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
          </div>
      <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
      </div>
      
    </div>
  )
}

export default Riding
