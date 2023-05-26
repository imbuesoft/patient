import React, { useEffect, useState } from 'react'
import '../assets/patho.css'
import PathoData from '../../../api/PathoData.json'
import Low from '../components/Low'
import High from '../components/High'
import { MinusOutlined, EditOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons'
import { Button, Input, Typography } from 'antd'

const { Title, Text } = Typography
const defaultPathoData = { "hemoglobin": [{ "id": "1", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "rbc count": [{ "id": "2", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "blood indics": [{ "id": "3", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "WBC count": [{ "id": "4", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Differential WBC count": [{ "id": "5", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Platelet count": [{ "id": "6", "name": "", "value": "", "min": "", "max": "", "unit": "" }] }
const generateUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 7)


const PathologyForm = ({ pathoData, setPathoData, formEditableProps }) => {

    const a = parseFloat

    const [formEditable, setFormEditable] = useState(formEditableProps)

    const handleInputChange = (key, index, field, value) => {
        const updatedData = { ...pathoData }
        updatedData[key][index][field] = value
        setPathoData(updatedData)
    }

    const handlePush = (key) => {
        setPathoData({ ...pathoData, [key]: [...pathoData[key], { id: generateUniqueId(), name: "", value: "", min: "", max: "", unit: "", editable: "true" }] })
    }

    const handlePop = (key) => {
        setPathoData({ ...pathoData, [key]: pathoData[key].slice(0, -1) })
        console.log("pop", pathoData[key])
    }

    const handleEdit = (key, index) => {
        const updatedData = JSON.parse(JSON.stringify(pathoData))
        if (updatedData[key][index].editable === "true")
            delete updatedData[key][index].editable
        else
            updatedData[key][index].editable = "true"
        setPathoData(updatedData)
    }

    const handleRemove = (key, index) => {
        setPathoData({ ...pathoData, [key]: pathoData[key].filter((_, i) => i !== index) })
    }

    const resetData = () => {
        const updatedData = {}

        for (const [key, value] of Object.entries(PathoData)) {
            console.log(value)
            if (!Array.isArray(value))
                updatedData[key] = value
            else
                updatedData[key] = value.map((item) => {
                    return {
                        ...item,
                        id: item.id + generateUniqueId(),
                    }
                })
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button title='this is temporary buttons' onClick={() => { setFormEditable(x => !x) }}>{formEditable ? <><CheckOutlined/> View</> : <><EditOutlined/> Edit</> }</Button >
                <Button title='this is temporary buttons' onClick={resetData}>Reset Data</Button >
                <Button title='this is temporary buttons' onClick={resetForm}>Reset Form</Button >
            </div>
            <Title level={4} style={{ fontWeight: "700", textAlign: "center" }}>Complate Blood Count (CBC)</Title>
            <table style={{ width: "", borderCollapse: "separate", borderSpacing: " 0.4em 0em" }}>
                <thead>
                    <tr>
                        <td><Title level={5} style={{ fontWeight: "700", paddingLeft: "0.3em" }}>Investigation</Title> </td>
                        <td><Title level={5} style={{ fontWeight: "700", textAlign: "center" }}>Result</Title> </td>
                        <td></td>
                        <td><Title level={5} style={{ fontWeight: "700", textAlign: "center" }}>Ref. value</Title> </td>
                        <td><Title level={5} style={{ fontWeight: "700" }}>Unit</Title> </td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Text style={{ paddingLeft: "0.3em" }}>Primary Sample Type: </Text>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <Text style={{ paddingLeft: "0.3em" }} colSpan={4}>Blood</Text>
                        </td>
                    </tr>
                    {Object.keys(pathoData).map((key) => {
                        if (Array.isArray(pathoData[key]))
                            return (
                                <React.Fragment key={key}>
                                    <tr>
                                        {/* <td colSpan={5}><Title level={5} style={{  fontWeight: "700" , margin: " 0.7em 0 0 0", textTransform: "uppercase" }}>{key}</Title></td> */}
                                        <td colSpan={5}>
                                            <div style={{ fontWeight: "700", margin: "0.7em 0 0 0", padding: " 0 0.3em", textTransform: "uppercase" }}>
                                                <Text>{key}</Text>
                                                {formEditable &&
                                                    <>
                                                        <span onClick={() => { handlePush(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><PlusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                        <span onClick={() => { handlePop(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                    </>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                    {
                                        pathoData[key].map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true}
                                                        placeholder='name'
                                                        defaultValue={item.name}
                                                        style={{ width: "13rem" }}
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "name", e.target.value)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        disabled={!formEditable}
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
                                                    <Input defaultValue={item.min} placeholder='min'
                                                        className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true}
                                                        style={{ width: "4em", textAlign: "right" }} size='small'
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "min", e)
                                                        } />
                                                    -
                                                    <Input defaultValue={item.max}
                                                        className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true} placeholder='max' style={{ width: "4em", textAlign: "left" }} size='small'
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "max", e)
                                                        } /></td>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true}
                                                        placeholder='unit'
                                                        defaultValue={item.unit}
                                                        style={{ width: "7em" }}
                                                        onChange={(e) =>
                                                            handleInputChange(key, index, "unit", e.target.value)
                                                        } />
                                                    {formEditable &&
                                                        <>
                                                            <span onClick={() => { handleEdit(key, index) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}>
                                                                {!item.editable ? <EditOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /> : <CheckOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} />}
                                                            </span>
                                                            <span onClick={() => { handleRemove(key, index) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                        </>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </React.Fragment>
                            )
                    })}
                    {/* TODO update below data */}
                    <tr>
                        <td colSpan={5}>
                            <Text> <span style={{ fontWeight: "700" }}>Instruments:</span> {pathoData.Instruments}</Text>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            <Text><span style={{ fontWeight: "700" }}>Interpretation:</span> {pathoData.Interpretation}</Text>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PathologyForm