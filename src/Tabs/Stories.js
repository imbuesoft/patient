import React from 'react'

const Stories = () => {
  return (
    <div className='row py-3'>
        <div className='col'>
            <span className='fs-5 fw-bolder text-secondary'>Clients Stories for Dr. Jay Patel</span>
            <p className='smallFont'>These are patient’s opinions and do not necessarily reflect the doctor’s medical capabilities.</p>
            <textarea className='storyBox'></textarea><br/>
            <button className='subButton mt-2 px-3 py-1'>Submit</button>
        </div>
    </div>
  )
}

export default Stories