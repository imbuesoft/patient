import { useState } from 'react';
import { Typography } from 'antd';

// DO NOT REMOVE THESE IMPORTS 

import BmiCalculator from './features/BmiCalculator/';
import BmiCalculatorBootstrap from './features/BmiCalculatorBootstrap';

import fruitsAndVegetables from './api/tempData.json'
import Search from './features/Search/';

import PathologyDocument from './features/PathologyDocument';
import PathoData from './api/PathoData.json';

import Invoice from './features/Invoice/';

const header_data = { name: "Jay Parmar", age: "25", sex: "gender", pid: "123456789", address: "Ahmedabad", refName: "Dr. ABC", regDate: "01/01/2021", collectedDate: "01/01/2021", reportedDate: "01/01/2021" }
const footer_data = { generateDate: "02 Dec, 2021 05:00 PM", doctors: [{ name: "Kavya Sharma", qualification: "MD (Pathology)", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }, { name: "Dr.Sachin Patil", qualification: "Pathologist", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }, { name: "Priynka Patel", qualification: "Lab Technician", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }] }

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
      <PathologyDocument
        header={{ data: header_data }}
        main={{ data: pathoData, setData: setPathoData, isEditable: false }}
        footer={{ data: footer_data }}
      />

      {/* ****** WORK NOT DONE YET ***** */}
      {/* <Invoice /> */}

    </>
  );
}

export default App;
