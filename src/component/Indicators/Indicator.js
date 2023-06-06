import React from 'react'
import EmtTable from './1.png'
import RunOrder from './2.png';
import BillP from './3.png';
import HoldKot from './4.png';
import Liquor from './liquor.png'
import Coin from './priority.png';
import './Indicator.css';

const Indicator = () => {
    return (
        <div className="card maincard" >
            <div className=" d-flex gap-2 headercard">
                <span className='arrow'>
                    &#8592;
                </span>
                <span> Understand your Indicators</span>
            </div>
            <div className="card-body">
                <div className="d-flex gap-2 iconstext">
                    <img src={EmtTable} alt='Empty Table' className='indicatoricons' />
                    <p>Empty Table</p>
                </div>
                <div className="d-flex gap-2 iconstext">
                    <img src={RunOrder} alt='Running Order'className='indicatoricons' />
                    <p>Running Order</p>
                </div>
                <div className="d-flex gap-2 iconstext">
                    <img src={BillP}  alt='Bill Printed'className='indicatoricons'/>
                    <p>Bill Printed</p>
                </div>
                <div className="d-flex gap-2 iconstext">
                    <img src={HoldKot} alt='Hold Kot'className='indicatoricons' />
                    <p>Hold Kot</p>
                </div>
                <div className="d-flex gap-2 iconstext">
                    <img src={Liquor} alt='Serving Liquor' className='indicatoricons'/>
                    <p>Serving Liquor</p>
                </div>
                <div className="d-flex gap-2 iconstext">
                    <img src={Coin} alt='Priority Order' className='indicatoricons' />
                    <p>Priority Order</p>
                </div>
                    <button type="button" className="btn btn-lg btn-block    " style={{marginTop:'5%',backgroundColor: 'blue',color: 'white',borderRadius:'10px',width:'100%'}}>Okay</button>
                </div>
        </div>

    )
}

export default Indicator
