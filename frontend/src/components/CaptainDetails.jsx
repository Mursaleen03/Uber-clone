import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between bg-white p-4 rounded-lg shadow-md'>
          <div>
            <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <h4 className='text-lg font-medium'>Ishan Sheikh</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹195.26</h4>
            <p className='text-sm text-gray-500'>Earned</p>
          </div>

        </div>
        <div className='flex items-center justify-between bg-white p-4 rounded-lg shadow-md mt-4'>
          <div className='text-center'>
            <i className="text-2xl font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
          <div className='text-center'>
            <i className="text-2xl font-extralight ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
          <div className='text-center'>
            <i className="text-2xl font-extralight ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails
