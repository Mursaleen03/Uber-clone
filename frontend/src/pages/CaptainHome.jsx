import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)
  const ridePopUpPanelRef = useRef(null)

  useGSAP(() => {
    gsap.to(ridePopUpPanelRef.current, {
      translateY: ridePopUpPanel ? '0%' : '100%',
  })
}, [ridePopUpPanel])
  useGSAP(() => {
    gsap.to(confirmRidePopupPanelRef.current, {
      translateY: confirmRidePopupPanel ? '0%' : '100%',
  })
}, [confirmRidePopupPanel])


  return (
    <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
          <Link to={'/home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className='h-3/5'>
         <img className='h-full w-full object-cover' src="/src/assets/map.png" />
      </div>
      <div className='h-2/5 p-4'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10'>
          <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10'>
          <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
      
    </div>
  )
}

export default CaptainHome
