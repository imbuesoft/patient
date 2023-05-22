import './Table.css';
import data from './reportdata.json';
import Instruction from './Instruction';
import { useState } from 'react';

const Body = (props) => {

  const [reportData, setReportData] = useState([{}])

  const handleInput = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  }

  const submitReport = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    for (let [key, value] of formData.entries()) {
      // //let a = {}
      console.log(key + " - " + value);
      // let x;
      // if(key=="Investigationtype")
      // {

      //  x = {          
      //   [key]:value
      //   }
      //   //console.log(x);
      //   setReportData((reportData,x)=>[...reportData,x])
      // }
      //console.log(x);
      //
    }
    //console.log(reportData);
  }
  return (
    <>
      <form onSubmit={submitReport}>
        <table className='table-body'>
          <tr>
            <td colSpan={5}><div style={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', paddingBottom: '8px' }}>Complete Blood Count (CBC)</div></td>
          </tr>

          <tr>
            <th className='table-head-main' style={{ width: '230px' }}>Investigation</th>
            <th className='table-head-main' style={{ width: '70px' }}>Result</th>
            <th style={{ width: '50px' }}></th>
            <th className='table-head-main' style={{ width: '120px' }}>Ref. Value</th>
            <th className='table-head-main'>Units</th>
          </tr>

          <tr>
            <td style={{ fontSize: '14px' }}>Primary Sample Test : </td>
            <td style={{ fontSize: '14px' }}>Blood</td>
          </tr>

          {
            data.map((i) => {
              return (
                <>
                  <tr>
                    <td className='table-head'>{i.Investigationtype}</td>
                    <input type='hidden' name="Investigationtype" value={i.Investigationtype} />
                  </tr>
                  {
                    i.Rows.map((a) => {
                      return (
                        <tr>
                          <td>{a.Investigation} </td>
                          <td>
                            {
                              props.editable ? (<input type='number' name={a.Investigation} />)
                                : a.Result < a.MinValue || a.Result > a.MaxValue ? (<strong style={{ color: 'red' }}>{a.Result}</strong>) : (<>{a.Result}</>)
                            }
                          </td>
                          <td>
                            {props.editable ? (<></>) : a.Result < a.MinValue ? (<strong>Low</strong>) : a.Result > a.MaxValue ? (<strong>High</strong>) : (<></>)}
                          </td>
                          <td>{a.MinValue} - {a.MaxValue}</td>
                          <td>{a.Unit}</td>
                        </tr>
                      );
                    })
                  }
                </>
              );
            })
          }
          <tr>
            <td colSpan={5} align='right'>
              <button type="submit">Submit</button></td>
          </tr>
        </table>

        {props.editable ? (<></>) : <Instruction />}
        <hr></hr>
      </form>
    </>
  );
}
export default Body;