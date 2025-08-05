import React from 'react'

const LocationSearchPanel = (props) => {
    // sample array of locations
    const locations = [
        "246761, Athain Sheikh, Dhampur, Bijnor, Uttar Pradesh",
        "246761, Athain Sheikh, Dhampur, Bijnor, Uttar Pradesh",
        "246761, Athain Sheikh, Dhampur, Bijnor, Uttar Pradesh",
        "246761, Athain Sheikh, Dhampur, Bijnor, Uttar Pradesh",
    ];


  return (
    <div>
        {/* this is just a sample location search panel */}
      {
        locations.map(function (elem, index) {
          return <div key={index} onClick={()=>{
            if(props.vehiclePanel) {
              props.setVehiclePanel(false)
            } else {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }
          }} className='flex items-center border-2 p-2 border-gray-50 active:border-black rounded-xl justify-between gap-2 mb-4'>
        <h2 className='bg-[#eeee] p-2 rounded-full flex items-center justify-center h-10 w-12'><i className="ri-map-pin-fill text-[17px]"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
