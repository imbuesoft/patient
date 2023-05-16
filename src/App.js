import { useState } from "react";

const App = () => {
  const border = { border: "0.5px solid black" };
  const [data, setData] = useState({
    height: "", weight: "", age: "", gender: ""
  });
  const [bmi, setBmi] = useState(0);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submit = () => {
    console.log(data);
    const bmi = (data.weight) / ((data.height) * (data.height));
    setBmi(bmi.toFixed(2));
  }
  return (  
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card mt-5 border-0">
            <div className="card-body shadow-lg rounded">
              <form>
                <h1 className="text-center">BMI Calculator</h1>
                <div className="mb-3">
                  <label htmlFor="Height" className="form-label">Height :</label>
                  <input type="number" className="form-control" id="Height" placeholder="meters" name="height" onChange={handleChange} value={data.height} style={border} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Weight" className="form-label">Weight :</label>
                  <input type="number" className="form-control" id="Weight" placeholder="kilograms" name="weight" onChange={handleChange} value={data.weight} style={border} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Age" className="form-label">Age :</label>
                  <input type="number" className="form-control" id="Age" placeholder="years" name="age" onChange={handleChange} value={data.age} style={border} />
                </div>

                <div className="row row-cols-auto">
                  <label className="col">Gender : </label>
                  <div className="form-check mb-3 ms-0 col">
                    <input className="form-check-input" type="radio" name="gender" id="Male" onChange={handleChange} value="Male" style={border} />
                    <label className="form-check-label" htmlFor="Male">
                      Male
                    </label>
                  </div>
                  <div className="form-check mb-3 col">
                    <input className="form-check-input" type="radio" name="gender" id="Female" onChange={handleChange} value="Female" style={border} />
                    <label className="form-check-label" htmlFor="Female">
                      Female
                    </label>
                  </div>
                </div>
                <button type="button" onClick={submit} className="btn btn-primary w-100">Submit</button>
              </form>
              <div className="result mt-3 text-center">
                {
                  bmi !== 0 ? (<h2>Result : {bmi}</h2>) : null
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;