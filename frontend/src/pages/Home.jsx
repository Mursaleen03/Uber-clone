import React from 'react'

const Home = () => {
  return (
    <div className='relative h-screen'>
        <img className='w-16 absolute left-4 top-4' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />

        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src="/src/assets/map.png" alt="" srcset="" />
        </div>
        <div className='bg-white absolute top-0 left-0 right-0 p-4'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form>
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>
    </div>
  )
}

export default Home
