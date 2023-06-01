import React from 'react'
import "./Cart.css";
import CountItem from './CountItem';
const Listitem = () => {
  return (
    <div>
        <div className='list-item'>
        <div className='first-item'>
                <div className='container'>
            <div className='img-1'>
            <img src='./img/iitem1.jpg' height={100}></img>
            {/* <hr/> */}
            </div>
            <div className='discript1'>
            <h6>hansaplast washproof strip</h6>
            <p> Mkt: Beiersdorf India Pvt Ltd</p>
            <p>large</p>
            </div>
           </div>

            <div className='price-section'>
                 <p>₹150</p>
            <CountItem></CountItem>
            </div>

        </div>
        </div>
        <div className='list-item'>
        <div className='first-item'>
                <div className='container'>
            <div className='img-1'>
            <img src='./img/hansaplast.jpg' height={100}></img>
            {/* <hr/> */}
            </div>
            <div className='discript1'>
            <h6>hansaplast washproof strip</h6>
            <p> Mkt: Beiersdorf India Pvt Ltd</p>
            <p>large</p>
            </div>
           </div>

            <div className='price-section'>
                 <p>₹200</p>
            <CountItem></CountItem>
            </div>

        </div>
        </div>
        <div className='Add-more'>
        <button className='Addmorebutton'>Add more button</button></div>
    </div>
  )
}

export default Listitem
    