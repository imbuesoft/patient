import React,{ useState } from "react";

export default function App() {

  const [data, setData] = useState({});
  const [bmi, setBmi] = useState('00.00');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = () => {
    const bmi = (data.weight) / ((data.height/100) * (data.height/100));
    setBmi(bmi.toFixed(2));
  }
  let bmiStatus = "";

  if (bmi<=18.5)
    bmiStatus = "Under Weight";
  else if (bmi>18.5 && bmi<=25)
    bmiStatus = "Normal";
  else if (bmi>25 && bmi<=35)
    bmiStatus = "Over Weight";
  else if (bmi>35)
    bmiStatus = "Obesity";

  return (
    <>
    <div class="card position-absolute top-50 start-50 translate-middle rounded" >
      <div class="card-header bg-success">
       <h3 className='m-3 text-white fw-bold'>Calculate Your Body Mass Index</h3>
      </div>
      
      <div class="card-body">
      <form>
        <table class="table">
        <tbody>
          <tr>
            <th scope="row">Height <span className="fs-6"> (cm)</span></th>
            <td>:</td>
            <td><input type="number"  onChange={handleChange} className="mx-1 form-control" id="height" name="height"/></td>
          </tr>
          <tr>
            <th scope="row">Weight <span className="fs-6"> (kg)</span></th>
            <td>:</td>
            <td><input type="number"  onChange={handleChange} className="mx-1 form-control" id="weight" name="weight"/></td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>:</td>
            <td><input type="number"  onChange={handleChange} className="mx-1 form-control" id="age" name="age"/></td>
          </tr>
          <tr>
            <th scope="row">Gender</th>
            <td>:</td>
            <td><input type="radio" onChange={handleChange} className="mx-2" id="gender" name="gender" value='male'/>Male
              <input type="radio" onChange={handleChange} className="ms-4 mx-2" id="gender" name="gender" value='female'/>Female</td>
          </tr>
        </tbody>
        </table>
      
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button onClick={submit} className="btn btn-success me-md-2" type="button" >Calculate</button>
          <button className="btn btn-light" type="reset">Clear</button>
        </div>
      </form>
      </div> 

      <p className="fs-5 fw-bold text-center mt-3">Your BMI is  </p>
      <div className="d-flex justify-content-center ">
        <p className="fs-3 fw-bold  text-center w-25 rounded-pill bg-secondary text-white p-1"> {bmi}</p>
      </div>    

      <div className="d-flex justify-content-center ">
        <p className="fs-5 fw-bold text-center"> You are <span className="fs-4" > {bmiStatus} </span></p>
      </div>

    </div>
  </>
  );
}