import BmiCalculator from './features/BmiCalculator/';
import BmiCalculatorBootstrap from './features/BmiCalculatorBootstrap';
import Search from './features/Search/';
import fruitsAndVegetables from './api/tempData.json'
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <>
      {/***** BMI calculator bootstrap *****/}
      {/* <BmiCalculatorBootstrap /> */}
      
      {/***** BMI calculator ant-design *****/}
      {/* <BmiCalculator /> */}

      {/***** Search box *****/}
      <div className="container " style={{ height: "100vh" }}>
        <Title className='mt-4'>Search fruits and vegetables by name, color or category</Title>
        <div className="d-flex justify-content-center mt-5 h-100">
          <Search data={fruitsAndVegetables} />
        </div>
      </div>
    </>
  );
}

export default App;
