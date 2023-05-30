import React, { useEffect, useState } from 'react'
import '../assets/patho.css'
import PathoData from '../../../api/PathoData.json'
import Low from '../components/Low'
import High from '../components/High'
import { MinusOutlined, EditOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons'
import { Button, Input, Typography } from 'antd'

const { Title, Text } = Typography
const defaultPathoData = { "Hemoglobin": [{ "id": "1", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "RBC count": [{ "id": "2", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Blood Indics": [{ "id": "3", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "WBC count": [{ "id": "4", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Differential WBC count": [{ "id": "5", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Platelet count": [{ "id": "6", "name": "", "value": "", "min": "", "max": "", "unit": "" }], "Instruments": "", "Technique": "", "Interpretation": "" }
const generateUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 7)


const PathologyForm = props => {

    const { data, setData, isEditable } = props;

    const a = parseFloat /* Just reference to parseFloat, So dont have to write parseFloat() every this, i can use a() */

    const [formEditable, setFormEditable] = useState(isEditable)

    const handleInputChange = (key, index, field, value) => {
        const updatedData = { ...data }
        updatedData[key][index][field] = value
        setData(updatedData)
    }

    const handlePush = (key) => {
        setData({ ...data, [key]: [...data[key], { id: generateUniqueId(), name: "", value: "", min: "", max: "", unit: "", editable: "true" }] })
    }

    const handlePop = (key) => {
        setData({ ...data, [key]: data[key].slice(0, -1) })
        console.log("pop", data[key])
    }

    const handleEdit = (key, index) => {
        const updatedData = JSON.parse(JSON.stringify(data))
        if (updatedData[key][index].editable === "true")
            delete updatedData[key][index].editable
        else
            updatedData[key][index].editable = "true"
        setData(updatedData)
    }

    const handleRemove = (key, index) => {
        setData({ ...data, [key]: data[key].filter((_, i) => i !== index) })
    }

    const resetData = () => {


        const updatedData = {}

        for (const [key, value] of Object.entries(PathoData))
            updatedData[key] = Array.isArray(value)
                ? value.map(item => ({ ...item, id: item.id + generateUniqueId() }))
                : { ...value, key: generateUniqueId() }

        console.log(updatedData.Interpretation);

        setData(updatedData)
        localStorage.removeItem('pathoData')
    }


    const resetForm = () => {
        const updatedData = {}

        for (const [key, value] of Object.entries(defaultPathoData))
            updatedData[key] = Array.isArray(value)
                ? value.map(item => ({ ...item, id: item.id + generateUniqueId() }))
                : value

        setData(updatedData)
        localStorage.removeItem('pathoData')
    }

    useEffect(() => {
        localStorage.setItem('pathoData', JSON.stringify(data))
    }, [data])

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button title='this is temporary buttons' onClick={() => { setFormEditable(x => !x) }}>{formEditable ? <><CheckOutlined /> View</> : <><EditOutlined /> Edit</>}</Button >
                <Button title='this is temporary buttons' onClick={resetData}>Reset Data</Button >
                <Button title='this is temporary buttons' onClick={resetForm}>Reset Form</Button >
            </div>
            <Title level={4} style={{ fontWeight: "700", textAlign: "center" }}>Complate Blood Count (CBC)</Title>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: " 0.4em 0em" }}>
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
                    {Object.keys(data).map((key) => {
                        if (Array.isArray(data[key]))
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
                                        data[key].map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true}
                                                        placeholder='name'
                                                        defaultValue={item.name}
                                                        style={{ width: "13rem" }}
                                                        onBlur={(e) =>
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
                                                        onBlur={(e) =>
                                                            handleInputChange(key, index, "value", e.target.value)
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
                                                        onBlur={(e) =>
                                                            handleInputChange(key, index, "min", e.target.value)
                                                        } />
                                                    -
                                                    <Input defaultValue={item.max}
                                                        className='input-border-style'
                                                        disabled={(item.editable && formEditable) ? false : true} placeholder='max' style={{ width: "4em", textAlign: "left" }} size='small'
                                                        onBlur={(e) =>
                                                            handleInputChange(key, index, "max", e.target.value)
                                                        } /></td>
                                                <td>
                                                    <div style={{ display: "inline-flex" }}>
                                                        <Input size='small' className='input-border-style'
                                                            disabled={(item.editable && formEditable) ? false : true}
                                                            placeholder='unit'
                                                            defaultValue={item.unit}
                                                            style={{ width: "6em" }}
                                                            onBlur={(e) =>
                                                                handleInputChange(key, index, "unit", e.target.value)
                                                            } />
                                                        {formEditable &&
                                                            <div style={{display:"inline-flex"}}>
                                                                <span onClick={() => { handleEdit(key, index) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}>
                                                                    {!item.editable ? <EditOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /> : <CheckOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} />}
                                                                </span>
                                                                <span onClick={() => { handleRemove(key, index) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                            </div>
                                                        }
                                                    </div>
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
                            <div style={{ display: "flex", margin: "0.3em 0 0 0" }}>
                                <span style={{ fontWeight: "700" }}>Instruments:</span>
                                <Input size='small' className='input-border-style'
                                    key={data.Instruments.key}
                                    disabled={!formEditable}
                                    placeholder='unit'
                                    defaultValue={data.Instruments.value}
                                    onBlur={(e) => setData({
                                        ...data,
                                        Instruments: { ...data.Instruments, value: e.target.value }
                                    })} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            <div style={{ display: "flex", margin: "0.3em 0 0 0" }}>
                                <span style={{ fontWeight: "700" }}>Interpretation:</span>
                                <Input size='small' className='input-border-style'
                                    key={data.Interpretation.key}
                                    disabled={!formEditable}
                                    placeholder='unit'
                                    defaultValue={data.Interpretation.value}
                                    onBlur={(e) => setData({
                                        ...data,
                                        Interpretation: { ...data.Interpretation, value: e.target.value }
                                    })} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PathologyForm