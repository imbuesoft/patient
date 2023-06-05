import React from 'react'
import { useState } from 'react';
const Bmicalculater = () => {
    const [data, setData] = useState({ height:'',weight:'',age:'' });
    const [bmi, setBmi] = useState(0);
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  
    const submit = () => {
      console.log(data);
      const bmi = (data.weight) / ((data.height) * (data.height));
      setBmi(bmi);
    }
  return (
   <>
    <div className="container-fluid" style={{backgroundColor:'gray',fontSize:'30px',marginTop:'20px',height:'70px'}}>
        <label style={{color:'white'}}><h1>FORM</h1></label>
    </div>
    <form>
        <div className="container" style={{marginTop:'50px',backgroundColor:''}}>
          <div className="inputdata" >
            <div className="form-floating"  >
                <input type="number" style={{borderRadius:'30px'}} className="form-control" onChange={handleChange} id="height" name="height"
              value={data.height}  />
                 <label htmlFor="email" className="form-label" ><b style={{color:'green'}}>Height</b></label>
             </div>

             <div className="form-floating mt-3">
                <input type="number" style={{borderRadius:'30px'}} className="form-control" onChange={handleChange} id="weight" name="weight"  value={data.weight} />
                 <label htmlFor="email" className="form-label"><b style={{color:'green'}}>Weight:</b></label>
             </div>

             <div className="form-floating mt-3">
                <input type="number" style={{borderRadius:'30px'}} className="form-control" onChange={handleChange} id="age" name="age" value={data.age} />
                 <label htmlFor="email" className="form-label"><b style={{color:'green'}}>Age:</b></label>
             </div>

             <div className="form-check" style={{marginTop: '20px',marginBottom:'30px',marginLeft:'10px'}}>
                <input type="radio" className="form-check-input" onChange={handleChange} id="gender" value="male" name="gender"/><b style={{color:'green'}}>Male</b> <br />
                <input type="radio" className="form-check-input" onChange={handleChange} id="gender" value="fmale" name="gender"/><b style={{color:'green'}}>Fmale</b>
            </div>

            <div className="form-group">
             <button type="button" onClick={submit} className="btn btn-outline-primary" style={{borderRadius:'50px',height:'50px',width:'150px'}} ><b >Submit</b></button>
            </div>

            <div className="form-floating mt-3">
              <p className="form-control" style={{width:'50%',border:'double',borderRadius:'20px',fontSize:'20px'}}>BMI : {bmi}</p>
            </div>
            </div>
        </div>
     </form>
   </>
  )
}

export default Bmicalculater
