import React from 'react'
import './Tabs.css'

const Healthfeed = () => {
  return (
    <div className='row py-3'>
        <div className='col '>
            <i className="bi bi-pencil QAIcon" ></i>
            <p className='text-center mt-3 smallFont'>No articles written by this doctor.</p>
            <button className='QAButton mt-2'>Read all articles</button>
        </div>
    </div>
  )
}

export default Healthfeed