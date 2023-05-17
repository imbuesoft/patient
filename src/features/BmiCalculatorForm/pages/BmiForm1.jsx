import { useState } from "react";


function App() {

  const [data, setData] = useState({ "height": 200 });
  const [bmi, setBmi] = useState(0);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = () => {
    //console.log(data);
    const bmi = (data.weight) / ((data.height) * (data.height));
    setBmi(bmi);
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Height
            </label>
            <input onChange={handleChange}
              type="number"
              className="form-control"
              id="height"
              placeholder="Enter height"
              name="height"
              value={data.height}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Weight
            </label>
            <input onChange={handleChange}
              type="number"
              className="form-control"
              id="weight"
              placeholder="Enter weight"
              name="weight"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Age
            </label>
            <input onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              name="age"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Male : <input onChange={handleChange} type="radio" id="gender" value="male" name="gender" /></label>
            <label htmlFor="email" className="form-label">Female : <input onChange={handleChange} type="radio" id="gender" value="female" name="gender" /></label>
          </div>
          <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
        </form>
        <div className="mt-3">
          <h1>BMI : {bmi}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
