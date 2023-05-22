import React from 'react'
import  './Table.css'
const Table = ({data}) => {
  console.log(data)
    return (
    <>
    <div className='report'></div>
      <table className='tb'> 

  <tr>
    <th>investigation</th>
    <th>Result</th>
    <th>ref value</th>
    <th>unit</th>
   
  </tr>
  
                  {
                          data.map((curele)=>{
                            return (

                            <tr>
                                <td>{curele.Investigation}</td>
                                <td>{curele.Result}</td>
                                <td>{curele.RefValue}</td>
                                <td>{curele.unit}</td>
                               
                            </tr>
                         
                            )
                          })
                  }        
    
      </table>
    </>
    
  )
}

export default Table
