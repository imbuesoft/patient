import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Card from './Card.js';
import { GoLocation } from 'react-icons/go';

import { GiCheckMark } from 'react-icons/gi';
import {BsPersonPlusFill} from 'react-icons/bs';


function App() {
  return (
  <div className="App">
      <div className="card" style={{width:'600px'}}>
        <div className="row g-0">
          <div className="col-4 p-3">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" className="img-fluid border border-4 border-info rounded-circle" alt="..." style={{height:'150px',width:'160px'}} />
          </div>

          <div className='col-md-5'>
            <div className='card-body'>
              <div className='drName'>Dr. Ramesh Sreenivasan</div>    
              <div className='text-secondary mb-3'>General Physician</div>    
              <div className='detail'><GoLocation className='me-2'/>STRA,Cla International Airport</div>    
              <div className='detail'><GiCheckMark className='me-2'/>16 Years Of Experience</div>    
              <div className='detail'><BsPersonPlusFill/>2000+ Patient Consulted this month</div>    
              <hr/>
              <div style={{display:'flex'}}>
              <div className='rating bg-success text-white fw-bold text-center'>95% </div>
              <span><b>1002</b> Patient Stories</span>
              </div>
              
            </div>
          </div>
          
          <div className='col-3'>
          <div className='card-body'>
          <div className='my-3'>
            <button type="button" className="btn py-1 text-white btn-info mb-3 ">Contact Now</button>
            <button type="button" className="btn abc py-1 ">View Details</button>
              <p className="text-success fw-bold status mt-3 ms-1"> Available Today</p>
          </div>
          </div>
        </div>
        <div>
       </div>
      </div>
  </div>
  </div>
  );
}

export default App;
