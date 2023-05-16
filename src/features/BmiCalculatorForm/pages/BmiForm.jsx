import Input from '../components/Input';
import SelectFromList from '../components/SelectFromList';


const BmiForm = () => {

    const gender = ["Male", "Female", "Other"]

    return (
        <>
        <div className="d-grid h-100">
            <div className="m-auto container border border-2 rounded-4">
                <form id='bmi-form' method="post">
                    <h1 className="h1 text-center mt-3">BMI Calculator</h1>
                    <Input title="Enter your height" required={true} name="height" type="number" />
                    <Input title="Enter your weight" required={true} name="weight" type="number" right="kg" />
                    <Input title="Enter your age" name="age" type="number" />
                    <SelectFromList name="gender" options={gender} title="Select your gender" />
                    <button type="submit" className="btn btn-primary btn-lg mt-5 d-flex py-3 rounded-4" >
                        <div className="spinner-border me-3 d-none" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        Calculate BMI
                    </button>
                    <div className="space " style={{height:"1em"}}></div>
                </form>
            </div>
        </div>
        </>
    );
};

export default BmiForm;