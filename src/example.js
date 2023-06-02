import React, { useState } from 'react';
import {  NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Appoimenttime from './Appoimenttime';
import './style.css'
import Appoimenttime1 from './Appoimenttime1';
import Appoimenttime2 from './Appoimenttime2';

const Navbar = () => {
  
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
    <Router>
      <nav>
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
          <NavLink className="a" to="/">Today</NavLink>
        </li>
        
        <li
          className={activeMenuItem === 'tommorow' ? 'active' : ''}
          onClick={() => handleMenuItemClick('tommorow')}
        >
          <NavLink className="a" to="/Appoimenttime">Tommorow</NavLink>
        </li>
       
        <li
          className={activeMenuItem === 'Sat 3 Jun' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Sat 3 Jun')}
        >
          <NavLink className="a" to="/Appoimenttime1">Sat 3 Jun</NavLink>
        </li> 

        <li
          className={activeMenuItem === 'Mon 5 Jun' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Mon 5 Jun')}
        >
          <NavLink className="a" to="/Appoimenttime2">Mon 5 Jun</NavLink>
        </li> 
              
              
            </ul>
           
      </div>
      <div className='right-arrow'>
                <img src='img/arrow-right.png' onClick={slideRight} alt='img'/>
            </div>
      </div>
    
        {/* <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Appoimenttime" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Appoimenttime" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul> */}
      </nav>

      <Routes>
        <Route exact path="/" component={Appoimenttime} />
        <Route path="/Appoimenttime" element={<Appoimenttime/>} />
        <Route path="/Appoimenttime1" element={<Appoimenttime1/>} />
        <Route path="/Appoimenttime2" element={<Appoimenttime2/>} />

      </Routes>
    </Router>
  );
};

export default Navbar;
