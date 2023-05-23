import React, { useState } from 'react'
import './Patient.css'

const CreatePatient = () => {
   
    const [data,setData] = useState({patientname:"",gender:"",age:"",weight:"",phone:""});

    const handleData = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const [patient,setPatient] = useState([]);

    const submit = (e) =>{
        e.preventDefault();    
        const newPatient = {...data,key:new Date().getTime().toString()};
        console.log(newPatient.key);
        setPatient([...patient, newPatient]);
        setData({patientname:"",gender:"",age:"",weight:"",phone:""})
    }
  return (
    <>
    <div className="main">
    <div className="form">
        <h2>Patient Registration</h2>
        <form>
            <div className="input-container ic1">
                <input className="input" onChange={handleData} value={data.patientname} type="text" name="patientname" placeholder=" " />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">Patient Name</label>
            </div>
            <div className="input-container ic2">
                <input className="input" onChange={handleData} value={data.age} type="number" name='age' placeholder=" " />
                <div className="cut"></div>
                <label for="lastname" className="placeholder">Age</label>
            </div>
            <div className="input-container ic2">
                <input className="input" onChange={handleData} value={data.weight} type="text" name="weight" placeholder=" " />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">Weight</label>
            </div>
            <div className="input-container ic2">
                <input className="input" onChange={handleData} value={data.phone} type="text" name="phone" placeholder=" " />
                <div className="cut"></div>
                <label for="lastname" className="placeholder">Phone Number</label>
            </div>
            <div className="input-container ic2">
                <input onChange={handleData} type='radio' name="gender" value="male" />Male
                <input onChange={handleData} type='radio' name="gender" value="female"/>Female
            </div>
            <button className="sub-btn" type="submit" onClick={submit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Add</button>
        </form>
    </div>
    
    <div className='showPatient'>
        <table>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Phone Number</th>
                </tr>
            </thead>

            <tbody>
            {
                patient.map((i)=>{
                    return(
                    <tr key={i.key}>
                        <td className='tableBody'>{i.patientname}</td>
                        <td className='tableBody'>{i.gender}</td>
                        <td className='tableBody'>{i.age}</td>
                        <td className='tableBody'>{i.weight}</td>
                        <td className='tableBody'>{i.phone}</td>
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

export default CreatePatient