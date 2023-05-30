import React, { useState, useEffect } from 'react';
import cityData from './cityList.json';
// import './Searchbar.css'

const Searchbar = () => {
    
  const[input,setInput] = useState('');

  const searchItem = cityData.filter((i) => {
    if(input ==""){
      return i
    }
    else if (i.state.toLowerCase().includes(input.toLowerCase())){
      return i
    }
  })

  console.log(searchItem)
  
  return (
    <div style={{ width: '400px', height: '300px', overflow: 'auto', margin:'100px 0px 0px 200px' }}>
      <div className="input-group flex-nowrap border">
        <i className="bi bi-geo-alt fs-4 p-2 mx-2"></i>
        <input value={input} placeholder='Search your Location ...' onChange={e=>setInput(e.target.value)}/>
      </div>
      
      {
        searchItem.map(i=>{
          return(
            <div className='border'>
              <div className='fs-4 text-start'>{i.city}</div>
              <div className='fs-6 text-end'>{i.state}</div>
            </div>
          )
        })
      }
      
      
      {/* {
          <div >
          {
            filteredData.map((i) => (
              <div >
                {i.city.map((c, index) => (
                  <div className='main-div border' key={index}>
                    <div className='cityName fs-4'>{c}</div>
                    <div className='stateName fs-6'>{i}</div>
                  </div>
                  ))}
                  </div>
            ))
          }
          </div>
        
      } */}
    </div>
    
  );
};

                  
                    // const handleInput =(e) =>{
                    //   setInput(e.target.value);
                    //   console.log(e.target.value);
                    //   (data["city"]===input)?console.log(data["city"]) :console.log("NO")
                    // }
                  
                    // const data = cityData.map(i => i)
export default Searchbar;