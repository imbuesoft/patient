import React from 'react'

const Appoimenttime = () => {
  return (
    <>
     <div className='timecontainer'>
        <div className='Eveningtime'>
        <img src='img/evening.png' alt='img'/>   
            <div>Evening</div>
            <button type="button" class="btn btn-outline-info">07:00PM</button>
            <button type="button" class="btn btn-outline-info">08:00PM</button>
        </div>
        <div className='Nighttime'>
         <img src='img/moon.png' alt='img'/>   
        <div>Night</div>
            <button type="button" class="btn btn-outline-info">07:00PM</button>
            <button type="button" class="btn btn-outline-info">08:00PM</button>
        </div>
        
     </div> 
    </>
  )
}

export default Appoimenttime
