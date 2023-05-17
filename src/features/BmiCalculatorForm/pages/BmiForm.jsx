import { useState } from 'react';
import Input from '../components/Input';
import SelectFromList from '../components/SelectFromList';


const BmiForm = () => {

    const gender = ["Male", "Female", "Other"]

    const [data, setData] = useState({ height: 0, weight: 0, age: 0, gender: "" });
    const [bmi, setBmi] = useState(0);

    const handleChange = (e) => {
        setBmi(0)
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const bmi = (data.weight) / (data.height ** 2);
        setBmi(bmi.toFixed(2));
    }

    return (
        <>
            <div className="d-grid h-100">
                <div className="m-auto container border border-2 rounded-4 shadow-lg">
                    <form id='bmi-form' method="post" onSubmit={handleSubmit}>
                        <h1 className="h1 text-center mt-3 ">BMI Calculator</h1>
                        <Input onChange={handleChange} title="Enter your height" required={true} name="height" />
                        <Input onChange={handleChange} title="Enter your weight" required={true} name="weight" right="kg" />
                        <Input onChange={handleChange} title="Enter your age" name="age" type="number" />
                        <SelectFromList onChange={handleChange} name="gender" options={gender} title="Select your gender" />
                        {bmi && <h3 className="h3 mt-4">BMI : {bmi}</h3> || ""}
                        <button type="submit" className="btn btn-primary btn-lg mt-4 d-flex py-3 rounded-4" >
                            Calculate BMI
                        </button>
                        <div className="space" style={{ height: "1em" }}></div>
                    </form>
                </div>
                
            </div>
        </>
    );
};

export default BmiForm;