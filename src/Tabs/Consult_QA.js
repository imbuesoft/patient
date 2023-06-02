import React from 'react'
import './Tabs.css'

const Consult_QA = () => {
  return (
    <div className='row py-3'>
        <div className='col '>
            <i className="bi bi-patch-question-fill QAIcon" ></i>
            <p className='text-center mt-3 smallFont'>No query answered by this doctor. Get answers to your health queries now</p>
            <button className='QAButton mt-2'>Ask Free Question</button>
        </div>
    </div>
  )
}

export default Consult_QA