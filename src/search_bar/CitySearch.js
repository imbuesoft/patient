import React, { useState } from 'react'
import cityData from "./cityList.json";
import "./Searchbar.css";

const CitySearch = () => {

    const [click, setClick] = useState(false);
    const[input,setInput] = useState('');
    const searchItem = cityData
    .flatMap(item => item.city ) 
    .filter(city => city.toLowerCase().includes(input.toLowerCase()))
    const handleClick = () => {
      setClick(true);
    };

    const handleOptionClick =(city)=>{
        setInput(city)
        setClick(false);
    }

  return (
    <div className="ct input-group bg-white border-end w-75">
          <i className="bi bi-geo-alt fs-5 p-2 mx-2 my-auto"></i>
          <input
            className="ctSearch border-0 fs-5"
            value={input}
            placeholder="Search your Location ..."
            onChange={(e) => setInput(e.target.value)}
            onClick={handleClick}
          />
          <div className="mt-2 suggestionBox overflow-auto">
            {click
              ? 
                searchItem.map(city=>{
                  const matchingState = cityData.find(item => item.city.includes(city)).state;
                  return(
                    <div className="row">
                      <div className="iconSearch d-flex align-items-stretch">
                        <i className="bi bi-search fs-5 p-3 align-item-start"></i>
                      </div>
                      <div className="textSearch text-start">
                        <div className="fs-5" onClick={()=>handleOptionClick(city)}>{city}<br/>
                        <span className="f6-6 text-secondary">{matchingState}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
                
                : ""}
          </div>
        </div>
  )
}

export default CitySearch