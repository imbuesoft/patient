import React, { useState } from 'react'
import './Filter.css'
import data from './BrandsData.json'


const Filter = () => {
    return (
    <>
    <div className="filter">
        <div className="card" style={{border:'none'}} >
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{borderBottom:' 0.5px solid  #f1f1f1',fontSize:'20px'}}>Filters</li>
                <li className="list-group-item" style={{border:'none',fontSize:'15px'}}><b>Brands</b></li>
                <li className="list-group-item"style={{border:'none'}}>
                <div className="input-group input-group-sm mb-3">
                    <input type="search"  className="form-control" id="floatingInput" placeholder='Search...' style={{ backgroundColor: '#e9e9e9' }}/>
                </div>
                </li>
                <div className="scrollable-list">
                {data.map((val)=>{
                    return(
                        <li className="list-group-item" key={val.id} style={{borderBottom:' 0.5px solid  #f1f1f1 ',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                        <input type="checkbox" className="ais-RefinementList-checkbox"/>
                            <span className="ais-RefinementList-labelText">{" "}{val.name}</span>
                    </li>
                    )
                }) 
                }   
                </div>
             </ul>
        </div>
    </div>
    </>
  )
}

export default Filter
