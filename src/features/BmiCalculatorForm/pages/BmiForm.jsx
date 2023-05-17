import { useState } from 'react';
import Input from '../components/Input';
import SelectFromList from '../components/SelectFromList';
import Radio from '../components/Radio';


const BmiForm = () => {

    const [data, setData] = useState({ height: "0", weight: "0", age: "0" });
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState();
    const [system, setSystem] = useState("metric");
    const [gender, setGender] = useState()

    const calculateBMI = () => {

        let { height, weight, age } = data

        if (system === 'metric') {

            setBmi((weight / (height * height)).toFixed(2))

        } else if (system === 'imperial') {

            setBmi(((weight / (height * height)) * 703).toFixed(2))

        }

        let genderValue = {
            male: [18.5, 25, 30],
            female: [18.5, 24, 30]
        }


        let x = 'Obese'
        if (bmi < genderValue[gender && gender || "male"][0]) {
            x = 'Underweight';
        } else if (bmi >= genderValue[gender && gender || "male"][0] && bmi < genderValue[gender && gender || "male"][1]) {
            x = 'Normal weight';
        } else if (bmi >= genderValue[gender && gender || "male"][1] && bmi < genderValue[gender && gender || "male"][2]) {
            x = 'Overweight';
        }

        setCategory(x)
    }

    const handleDataChange = (e) => {
        console.log(data)
        setData({ ...data, [e.target.name]: e.target.value }); bmi && setBmi(0); category && setCategory("")
    }

    // const handleHeightChange = (e) => {
    //     (system == "metric") ?
    //         setData({ ...data, [e.target.name]: e.target.value })
    //         :
    //         setData({ ...data, [e.target.name]: e.target.value })
    //     bmi && setBmi(0);
    //     category && setCategory("")
    // }
    const handleHeightChange = (e) => {
        console.log(data);
        if (system === "metric") {
            setData({ ...data, height: e.target.value / 100 });
        } else {
            setData({
                ...data,
                height: (parseInt(document.getElementById("heightFt").value) * 12) + parseInt(document.getElementById("heightIn").value)
            });
        }
    }


    const handleSystemChange = (e) => {
        setSystem(e.target.id)
    }

    const handleGenderChange = (e) => { setGender(e.target.id) }

    const handleSubmit = e => {
        e.preventDefault(); calculateBMI()
    }

    return (
        <>
            <div className="d-grid h-100">
                <div className="m-auto container px-3 px-sm-4 px-md-5 border border-2 rounded-4 shadow-lg">
                    <form id='bmi-form' method="post" onSubmit={handleSubmit}>
                        <h1 className="h1 text-center mt-3 ">BMI Calculator</h1>
                        <div className="d-flex flex-wrap mt-3">
                            <Radio className="flex-grow-1 d-inline-flex gap-3" data={["male", "female", "other"]} title="Gender : " name="gender" checkedData={gender} handleChange={handleGenderChange} />
                            <Radio className="d-inline-flex gap-3" data={["imperial", "metric"]} name="system" checkedData={system} handleChange={handleSystemChange} />
                        </div>
                        {
                            (system === "metric") ?
                                <Input placeholder="x.x cm" right="cm" onChange={handleHeightChange} title="Enter your height" required={true} name="heightCm" type="number" />
                                :
                                <div className='d-flex gap-3 flex-column'>
                                    <Input placeholder="x.x ft" right="ft" onChange={handleHeightChange} title="Enter your height" required={true} name="heightFt" type="number" />
                                    <Input placeholder="x.x in" right="in" onChange={handleHeightChange} required={true} name="heightIn" type="number" />
                                </div>
                        }
                        <Input placeholder={`x.x ${system === "metric" ? "kg" : "pounds"}`} onChange={handleDataChange} title="Enter your weight" required={true} name="weight" right={system === "metric" ? "kg" : "pounds"} type="number" />
                        <Input onChange={handleDataChange} title="Enter your age" name="age" type="number" />
                        {bmi && <h3 className="h3 mt-4">BMI : {bmi}</h3> || ""}
                        {category && <h3 className="h3 mt-4">Category : {category}</h3> || ""}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-outline-primary shadow btn-lg mt-4 d-flex py-3 rounded-4" >
                                Calculate BMI
                            </button>
                        </div>
                        <div className="space" style={{ height: "1em" }}></div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default BmiForm;