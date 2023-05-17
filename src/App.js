import React, { useState } from 'react'
import './style.css'
const App = () => {
    const [data,setdata] = useState({})
    const [bmidata,setbmi] = useState(0)
    const [message,setmessage] = useState('')
    const getdata = (e) =>{
        setdata({...data,[e.target.name]: e.target.value});
    }
    const cal = () =>{
        const weight = data.weight 
        console.log(weight)
        const bmi = (weight ) / ((data.height/100) * (data.height/100) );
        setbmi(bmi)
        if(bmi<18.5)
        {
            setmessage('you are underweighted')
        }
        else if(bmi>= 18.5 && bmi<24.9)
        {
                setmessage('Healthy Weight')
        }
        else if(bmi>= 24.9 && bmi<30.0)
        {
                setmessage('Overweight')
        }
        else if(bmi>=30.0)
        {
                setmessage('Obesity')
        }
    }
  return (
    <>
        <div className='wraper'>
            <div className='container'>
                
                <div className='subcon1'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Height
                        </label>
                        <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={getdata}
                        name='height'
                        />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            weight
                        </label>
                        <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={getdata}
                        name='weight'
                        />
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-primary btn-lg" onClick={cal}>Submit</button>
                    </div>
                    
                    <div className="mt-3">
                        <h1>BMI : {bmidata}</h1>
                    </div>
                    <div className="mt-3">
                        <h1>{message} </h1>
                    </div>
                </form>

                </div>
            </div>
        </div>
    </>
  )
}

export default App
