import React, { useState } from "react";
import data  from "./cbcLabReport.json";
import './App.css';

const Labreport = () => {
  const [report] = useState(data);

  return (
    <div className="card">
      <div className="container">
      <h1>Complete Blood Count(CBC)</h1>
      <table>

          <tr>
            <th>Investigation</th> 
            <th>Result</th>
            <th></th>
            <th>Ref. Range</th>
            <th>Unit</th>
          </tr>


        <tr>
           <th> DIFFERENTIAL WBC COUNT</th>
        </tr>
          {report.data.map((test) => (
            <tr key={test.id}>  
              <td>{test.name}</td>
              <td>{test.result<test.referenceRange[0] || test.result>test.referenceRange[1]? <b>{test.result}</b>:test.result}</td>
              <td>{test.result<test.referenceRange[0]?<b>Low</b>:test.result>test.referenceRange[1]?<b>High</b>:""}</td>
              <td>{`${test.referenceRange[0]}-${test.referenceRange[1]}`}</td>
              <td>{test.unit}</td>  
              
            </tr>
          ))}


      </table>
      
    </div>
    </div>
  );
};

export default Labreport;