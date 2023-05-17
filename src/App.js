import React,{useState} from 'react'
import "./style.css"
const App = () => {
  const [data, setData] = useState({ "height": 200 });
  const [bmi, setBmi] = useState(0);
  const [message,setmessage] = useState('');
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = () => {
    //console.log(data);
    const bmi = (data.weight) / ((data.height/100) * (data.height/100));
    setBmi(bmi);
    if (bmi < 10)
    {
      setmessage("Your BMI category is Underweight.\n ");
    }
    else if (bmi >= 19 && bmi <= 25)
    {
      setmessage("Your BMI category is Ideal.\n");
    }
    else if (bmi > 25)
    {
      setmessage("Your BMI category is Overweight.\n");

    }
  }
  return (
    <>
      <div className='wraper'>
      <div className='hading'><h1>BMI PROJECT</h1></div>
            <div className='container'>
              <div className='subcont1'>
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
                  </div>

                  <div className='subcont2'>
                  <div className="mt-3">
                   <h1>BMI : {bmi}</h1>
                  </div>
                  <div className="mt-3">
                   <h1>BMI : {message}</h1>
                  </div>
                  </div>
            </div>
      </div>
    </>
  )
}

export default App
