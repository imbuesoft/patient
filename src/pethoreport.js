import React from 'react'
import './style.css'
// import Reportdata from './reportdata'
const pethoreport = ({data}) => {
    console.log(data)
  return (
   
    <div>
      <table>
            <tr >
                <th>
                    Investigation
                </th>
                <th>
                    Result
                </th>
                <th>
                    Ref. Value
                </th>
                <th>
                    Unit
                </th>
            </tr>
            
           
            
                        {
                         data.map((curele) => {
                            return(
                            <tr >
                                
                            <td >{curele.Investigation}</td>
                            <td>{curele.Result }</td>
                            <td>{curele.RefValue}</td>
                            <td>{curele.unit }</td>
                            <br/>
                            </tr>)
                            
                        })
                        }
                 
                
                
            

      </table>
    </div>
  )
}

export default pethoreport
