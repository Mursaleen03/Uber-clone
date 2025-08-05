import React from 'react'

const WaitingForDriver = () => {
  return (
   <div>
      <h5 onClick={(props)=>{
            props.waitingForDriver(false)
          }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>

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
          </div>
    </div>
  )
}

export default WaitingForDriver
