import React, { useState } from 'react'
import './style.css'
const Getlabdata1 = () => {
    const[inputarr,setinputarr] = useState([])
    const[getdata,setdata] = useState({
        name : " ",
        weight : " ",
        age : " ",
        gender : " "
    })
    
    function changhandle(e){
        setdata({...getdata,[e.target.name]:e.target.value})
    }
    let {name,weight,age,gender} = getdata;
    function chanable(){
        setinputarr([...inputarr,{name,weight,age,gender}])
        console.log(inputarr)
        // console.log(getdata)
        setdata({name:"",weight:" ",age:" ",gender:" "})
    }
  return (
    <>
        <div className='App'>
            <div className='infocontainer'>
            Name:  <input type='text' name='name' value={getdata.name} onChange={changhandle}/><br/><br/>
            Weight:<input type='number' name='weight' value={getdata.weight} onChange={changhandle}/><br/><br/>
            Age:   <input type='number' name='age' value={getdata.age} onChange={changhandle}/><br/><br/>
            Gender <input type='text' name='gender' value={getdata.gender} onChange={changhandle}/><br/><br/>
            <button onClick={chanable}>Add It</button>
            </div>
            
            <div className='tb'>
            <table border={1} width="30%" cellPadding={10}>
            <tbody>
            <tr >
                <td width={100}>Name</td>
                <td width={100}>weight</td>
                <td width={100}>Age</td>
                <td width={100}>Gender</td>
            </tr>
            {
                inputarr.map((curele,key)=>{
                        return(
                            <tr key={key}>
                                <td>{curele.name}</td>
                                <td>{curele.weight}</td>
                                <td>{curele.age}</td>
                                <td>{curele.gender}</td>
                            </tr>
                        )
                })
            }
            </tbody>
        </table>
        </div>
        </div>
        
    </>
  )
}

export default Getlabdata1
