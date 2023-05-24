import './Table.css';
import data from './investigations.json';
import PatientData from './patient_reading.json';
import { useState } from 'react';

const Report = (props) => {

    const [reportData, setReportData] = useState([]);

    const handleInput = (e) => {
        //     //setReportData({ ...reportData, [e.target.name]: e.target.value });
        //     setReportData([...reportData, { [e.target.name]: e.target.value }]);
        //     //console.log(e.target.name + " - " + e.target.value);
        //     //console.log(reportData);
    }

    const submitReport = (e) => {
        // const formData = new FormData(e.currentTarget);
        // e.preventDefault();
        // for (let [key, value] of formData.entries()) {
        //     //console.log(key + " - " + value);
        //     setReportData([...reportData, { [key]: value }]);
        // }
        // //console.log(reportData);
        // console.log(reportData);
        //
    }
    return (
        <>
            <form onSubmit={submitReport}>
                <table className='table-body'>

                    <thead>
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
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: '14px' }}>Primary Sample Test :</td>
                            <td style={{ fontSize: '14px' }}>Blood</td>
                            <td colSpan={3}></td>
                        </tr>
                        {data.map((i, key) => {
                            return (
                                <>
                                    <tr>
                                        <td className='table-head'>{i.Investigationtype}</td>
                                    </tr>
                                    <tr>
                                        <td>{i.Investigation}</td>
                                        <td>
                                            {props.editable ? (
                                                <input type='number' name={i.Investigation} onChange={handleInput} />
                                            ) : PatientData.investigations[i.Investigation] < i.MinValue || PatientData.investigations[i.Investigation] > i.MaxValue ? (
                                                <strong style={{ color: 'red' }}>{PatientData.investigations[i.Investigation]}</strong>
                                            ) : (
                                                <>{PatientData.investigations[i.Investigation]}</>
                                            )}
                                        </td>
                                        <td>
                                            {props.editable ? (
                                                <></>
                                            ) : PatientData.investigations[i.Investigation] < i.MinValue ? (
                                                <strong>Low</strong>
                                            ) : PatientData.investigations[i.Investigation] > i.MaxValue ? (
                                                <strong>High</strong>
                                            ) : (
                                                <></>
                                            )}
                                        </td>
                                        <td>{i.MinValue} - {i.MaxValue}</td>
                                        <td>{i.Unit}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5} align='right'>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tfoot>
                </table >
                <hr></hr>
            </form >
        </>
    );
}
export default Report;