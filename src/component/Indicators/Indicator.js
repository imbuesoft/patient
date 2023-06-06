import React from 'react'
import EmtTable from './1.png'
import RunOrder from './2.png';
import BillP from './3.png';
import HoldKot from './4.png';
import Liquor from './liquor.png'
import Coin from './priority.png';
import './Indicator.css';

const indicators = [
    {
        id: 1,
        image: EmtTable,
        indicatorname: 'Empty Table',
    },
    {
        id: 2,
        image: RunOrder ,
        indicatorname: 'Running Order',
    },
    {
        id: 3,
        image: BillP,
        indicatorname: 'Bill Printed',
    },
    {
        id: 4,
        image: HoldKot,
        indicatorname: 'Hold Kot',
    },
    {
        id: 5,
        image: Liquor,
        indicatorname: 'Serving Liquor',
    },
    {
        id: 6,
        image: Coin,
        indicatorname: 'Priority Order',
    },
]
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

                {indicators.map((indicate)=>(
                <div className="d-flex gap-2 iconstext">
                    <img src={indicate.image} alt='Empty Table' className='indicatoricons' />
                    <p>{indicate.indicatorname}</p>
                </div>
                ))}
                <button type="button" className="btn btn-lg btn-block    " style={{ marginTop: '5%', backgroundColor: 'blue', color: 'white', borderRadius: '10px', width: '100%' }}>Okay</button>
            </div>
        </div>

    )
}

export default Indicator;
