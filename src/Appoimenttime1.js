import React from 'react'

const Appoimenttime1 = () => {
  return (
    <div>
         <div className='timecontainer'>
        <div className='Eveningtime'>
        <img src='img/evening.png' alt='img'/>   
            <div>Evening</div>
            <button type="button" class="btn btn-outline-info">07:30PM</button>
            <button type="button" class="btn btn-outline-info">09:00PM</button>
        </div>
        <div className='Nighttime'>
         <img src='img/moon.png' alt='img'/>   
        <div>Night</div>
            <button type="button" class="btn btn-outline-info">06:300PM</button>
            <button type="button" class="btn btn-outline-info">07:40PM</button>
        </div>
        
     </div> 
    </div>
  )
}

export default Appoimenttime1
