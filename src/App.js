import { useState } from 'react';
import { Typography } from 'antd';

// DO NOT REMOVE THESE IMPORTS 

import BmiCalculator from './features/BmiCalculator/';
import BmiCalculatorBootstrap from './features/BmiCalculatorBootstrap';
import Search from './features/Search/';
import PathologyDocument from './features/PathologyDocument';

import fruitsAndVegetables from './api/tempData.json'
import PathoData from './api/PathoData.json';
import Invoice from './features/Invoice/';

const { Title } = Typography;

function App() {

  const [pathoData, setPathoData] = useState(
    JSON.parse(localStorage.getItem('pathoData')) || PathoData
  );


  return (
    <>
      {/***** 🧮 BMI calculator bootstrap *****/}
      {/* <BmiCalculatorBootstrap /> */}

      {/***** 🧮 BMI calculator ant-design *****/}
      {/* <BmiCalculator /> */}

      {/***** 🔍 Search box *****/}
      {/* <div style={{ height: "100vh", width: "100vw", display: "grid" }}><div style={{ height: "100vh", maxWidth: "60em", margin:"auto" }}><Title style={{margin:"1em 0"}}>Search fruits and vegetables by name, color or category</Title><div className="d-flex flex-column justify-content-center mt-5"><Search data={fruitsAndVegetables} /></div></div></div> */}

      {/***** 🧬 Pathology Document *****/}
      <PathologyDocument pathoData={pathoData} setPathoData={setPathoData} />

      {/* ****** WORK NOT DONE YET ***** */}
      {/* <Invoice /> */}

    </>
  );
}

export default App;
