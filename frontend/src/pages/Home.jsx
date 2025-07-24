import React, { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  useGSAP(() => {
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen])

  return (
    <div className='relative h-screen'>
        <img className='w-16 absolute left-4 top-4' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />

        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src="/src/assets/map.png" alt="" srcset="" />
        </div>
        <div className='flex flex-col justify-end h-screen absolute top-0 left-0 right-0'>
          <div className='h-[30%] p-6 bg-white relative'>
            <h5 ref={panelCloseRef} onClick={()=>{
              setPanelOpen(false)
            }}
             className='absolute top-4 right-4 opacity-0 text-gray-500 cursor-pointer text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[42%] left-10 bg-gray-800 rounded-full"></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
          type="text" 
          placeholder='Add a pick-up location'
          />
          <input
           onClick={()=>{
            setPanelOpen(true)
          }}
           value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination'
          />
        </form>
          </div>
          <div ref={panelRef} className='h-0 bg-white'>
            <LocationSearchPanel />
          </div>
        </div>
    </div>
  )
}

export default Home
