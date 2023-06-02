import React,{useState} from 'react'
import './style.css';
// import Appoimenttime from './Appoimenttime';
import { Link } from 'react-router-dom';
// import data from './Dataapi';
// import {Link} from 'react-router-dom'
const Tab = () => {

  const tabs = document.querySelectorAll(".scrollable-tabs-container a")
  
    const [activeMenuItem, setActiveMenuItem] = useState('tommorow');

    const handleMenuItemClick = (menuItem) => {
      
      setActiveMenuItem(menuItem);
    };
   
    

const slideRight = () =>{
  const tablist = document.querySelector(".scrollable-tabs-container ul")
  tablist.scrollLeft += 200
}

const slideLeft = () =>{
  const tablist = document.querySelector(".scrollable-tabs-container ul")

  tablist.scrollleft -= 200
  
}
 

  return (
    <>
    <div className='mainscroller'>
    <div className='left-arrow'>
                <img src='img/left-arrow.png' onClick={slideLeft} alt='img'/>
            </div>
      <div className='scrollable-tabs-container'>
       
            
            <ul>
              {/* {
                data.map((curele,id)=>{
                  
                  return (<li>
                       <a key={id} to='/' >{curele.Date}</a>
                  </li>)
                })
              } */}
               
        <li
          className={activeMenuItem === 'today' ? 'active' : ''}
          onClick={() => handleMenuItemClick('today')}
        >
          <a href="today">Today</a>
        </li>
        
        <li
          className={activeMenuItem === 'tommorow' ? 'active' : ''}
          onClick={() => handleMenuItemClick('tommorow')}
        >
          <a href='tommorow'>Tommorow</a>
        </li>
        <li
          className={activeMenuItem === 'Sat 3 Jun' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Sat 3 Jun')}
        >
          <a href="Sat 3 Jun">Sat 3 Jun</a>
        </li>
        <li
          className={activeMenuItem === 'Mon 5 Jun' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Mon 5 Jun')}
        >
          <a href="Mon 5 Jun">Mon 5 Jun</a>
        </li>
        <li
          className={activeMenuItem === 'Tue 6 Jun' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Tue 6 Jun')}
        >
          <a href="Tue 6 Jun">Tue 6 Jun</a>
        </li>
        
              
              
              
            </ul>
           
      </div>
      <div className='right-arrow'>
                <img src='img/arrow-right.png' onClick={slideRight} alt='img'/>
            </div>
      </div>
    </>
  )
}

export default Tab
