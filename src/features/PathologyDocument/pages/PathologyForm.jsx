import React, { useEffect } from 'react'
import '../assets/patho.css'
import PathoData from '../../../api/PathoData.json'
import Low from '../components/Low'
import High from '../components/High'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, InputNumber, Typography } from 'antd'

const { Title } = Typography
const defaultPathoData = { "hemoglobin": [{ "id": "1", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "rbc count": [{ "id": "2", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "blood indics": [{ "id": "3", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "WBC count": [{ "id": "4", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Differential WBC count": [{ "id": "5", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Platelet count": [{ "id": "6", "name": "", "value": "", "min": "", "max": "", "unit": "" }] }
const generateUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 7)


const PathologyForm = ({ pathoData, setPathoData }) => {

    const a = parseFloat

    const handleInputChange = (key, index, field, value) => {
        const updatedData = { ...pathoData }
        updatedData[key][index][field] = value
        setPathoData(updatedData)
    }


    const handlePush = (key) => {
        setPathoData({ ...pathoData, [key]: [...pathoData[key], { id: generateUniqueId(), name: "", value: "", min: "", max: "", unit: "" }] })
    }

    const handlePop = (key) => {
        setPathoData({ ...pathoData, [key]: pathoData[key].slice(0, -1) })
        console.log("pop", pathoData[key])
    }

    const handleRemove = (key, index) => {
        setPathoData({ ...pathoData, [key]: pathoData[key].filter((x, i) => i !== index) })
    }

    const resetData = () => {
        const updatedData = {}

        for (const [key, value] of Object.entries(PathoData)) {
            updatedData[key] = value.map((item) => ({
                ...item,
                id: item.id + generateUniqueId(),
            }))
        }

        setPathoData(updatedData)
        localStorage.removeItem('pathoData')
    }


    const resetForm = () => {
        setPathoData(defaultPathoData)
        localStorage.removeItem('pathoData')
    }

    useEffect(() => {
        localStorage.setItem('pathoData', JSON.stringify(pathoData))
    }, [pathoData])

    return (
        <>
            <div style={{ display: 'grid' }}>
                <div style={{ margin: "1em auto 0 ", border: "2px solid #ddd", boxShadow: "0 1em 5em #00000022", borderRadius: "12px", padding: "1em", maxWidth: "96em", width: "", background: "#fff" }} >

                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button title='this is temporary buttons' onClick={resetData}>Reset Data</Button >
                        <Button title='this is temporary buttons' onClick={resetForm}>Reset Form</Button >
                    </div>
                    <table style={{ width: "", borderCollapse: "separate", borderSpacing: " 0.4em 0em" }}>
                        <thead>
                            <tr>
                                <td><Title level={5} style={{ fontWeight: "700" }}>Investigation</Title> </td>
                                <td><Title level={5} style={{ fontWeight: "700", textAlign: "center" }}>Result</Title> </td>
                                <td></td>
                                <td><Title level={5} style={{ fontWeight: "700", textAlign: "center" }}>Ref. value</Title> </td>
                                <td><Title level={5} style={{ fontWeight: "700" }}>Unit</Title> </td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(pathoData).map((key) => (
                                <React.Fragment key={key}>
                                    <tr>
                                        {/* <td colSpan={5}><Title level={5} style={{  fontWeight: "700" , margin: " 0.7em 0 0 0", textTransform: "uppercase" }}>{key}</Title></td> */}
                                        <td colSpan={5}>
                                            <h4 style={{  fontWeight: "700" , margin: " 0.7em 0 0 0", padding: " 0 0.3em", textTransform: "uppercase" }}>
                                                {key}
                                                <span onClick={() => { handlePush(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><PlusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                <span onClick={() => { handlePop(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                            </h4>
                                        </td>
                                    </tr>
                                    {
                                        pathoData[key].map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        placeholder='name'
                                                        defaultValue={item.name}
                                                        style={{ width: "13rem" }}
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "name", e.target.value)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <InputNumber size='small' className='input-border-style'
                                                        placeholder='value'
                                                        defaultValue={item.value}
                                                        style={{ width: "6em", textAlign: "center" }}
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "value", e)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <div style={{ fontSize: "0.8em", textAlign: "center" }}>
                                                        {(a(item.value) < a(item.min) && <Low />) || (a(item.value) > a(item.max) && <High />) || ""}
                                                    </div>
                                                </td>
                                                <td style={{ display: "flex", }}>
                                                    <InputNumber defaultValue={item.min} placeholder='min' style={{ width: "4em", textAlign: "right" }} size='small' className='input-border-style'
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "min", e)
                                                        } />
                                                    -
                                                    <InputNumber defaultValue={item.max} placeholder='max' style={{ width: "4em", textAlign: "left" }} size='small' className='input-border-style'
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "max", e)
                                                        } /></td>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        placeholder='unit'
                                                        defaultValue={item.unit}
                                                        style={{ width: "7em" }}
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "unit", e.target.value)
                                                        } />
                                                    <span onClick={() => { handleRemove(key, index) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                </td>
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