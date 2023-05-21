import React from 'react';
import { Input, Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import '../assets/patho.css'

const { Title } = Typography;

// const LowHigh = x => (
//     <span
//         style={{ color: "#FFA07A", textShadow: "0 0 1em  #ff000099" }}
//     >{x.children}</span>)
// const Low = () => (<LowHigh>LOW</LowHigh>)
// const High = () => (<LowHigh>HIGH</LowHigh>)
const Low = () => (<span style={{ color: "#e076c9", textShadow: "0 0 1em  #e076c9" }}>LOW</span>)
const High = () => (<span style={{ color: "#009acc  ", textShadow: "0 0 1em  #009accaa  " }}>HIGH</span>)

const PathologyForm = ({ pathoData, setPathoData }) => {
    const bold = { fontWeight: "700" }
    return (
        <>
            <div style={{ display: 'grid' }}>
                <div style={{ margin: "1em auto 0 ", border: "2px solid #ddd", boxShadow: "0 1em 5em #00000022", borderRadius: "12px", padding: "1em", maxWidth: "96em", width: "", background: "#fff" }} >
                    <table style={{ width: "", borderCollapse: "separate", borderSpacing: " 0.4em 0em" }}>
                        <thead>
                            <tr>
                                <td><Title level={5} style={{ ...bold }}>Investigation</Title> </td>
                                <td><Title level={5} style={{ ...bold, textAlign: "center" }}>Result</Title> </td>
                                <td></td>
                                <td><Title level={5} style={{ ...bold, textAlign: "center" }}>Ref. value</Title> </td>
                                <td><Title level={5} style={{ ...bold }}>Unit</Title> </td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(pathoData).map((key) => (
                                <React.Fragment key={key}>
                                    <tr>
                                        {/* <td colSpan={5}><Title level={5} style={{ ...bold, margin: " 0.7em 0 0 0", textTransform: "uppercase" }}>{key}</Title></td> */}
                                        <td colSpan={5}>
                                            <h4 style={{ ...bold, margin: " 0.7em 0 0 0", padding: " 0 0.3em", textTransform: "uppercase" }}>
                                                {key}
                                                {/* <Button type="primary" icon={<DownloadOutlined />} /> */}
                                            </h4>
                                        </td>
                                    </tr>
                                    {
                                        pathoData[key].map((item, index) => (
                                            <tr key={index}>
                                                <td><Input size='small' className='input-border-style'
                                                    placeholder='name'
                                                    defaultValue={item.name}
                                                    style={{ width: "13rem" }}
                                                /></td>
                                                <td><Input size='small' className='input-border-style'
                                                    placeholder='value'
                                                    defaultValue={item.value}
                                                    style={{ width: "6em", textAlign: "center" }} /></td>
                                                <td><div style={{ fontSize: "0.8em", textAlign: "center" }}>{(parseFloat(item.value) < parseFloat(item.min) && <Low />) || (parseFloat(item.value) > parseFloat(item.max) && <High />) || ""}</div></td>
                                                <td style={{ display: "flex", }}>
                                                    <Input size='small' className='input-border-style' defaultValue={item.min} placeholder='min' style={{ width: "4em", textAlign: "right" }} />-
                                                    <Input size='small' className='input-border-style' defaultValue={item.max} placeholder='max' style={{ width: "4em", textAlign: "left" }} /></td>
                                                <td><Input size='small' className='input-border-style'
                                                    placeholder='unit'
                                                    defaultValue={item.unit}
                                                    style={{ width: "7em" }} /></td>
                                            </tr>
                                        ))
                                    }
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PathologyForm