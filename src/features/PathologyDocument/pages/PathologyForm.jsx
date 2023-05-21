import React from 'react';
import { Input, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import '../assets/patho.css'

const { Title } = Typography;

const bold = { fontWeight: "700" }

const Low = () => (<span style={{ color: "#e076c9", cursor: "default", textShadow: "0 0 1em  #e076c9" }}>LOW</span>)
const High = () => (<span style={{ color: "#009acc", cursor: "default", textShadow: "0 0 1em  #009accaa  " }}>HIGH</span>)

const PathologyForm = ({ pathoData, setPathoData }) => {

    const a = parseFloat;

    const handlePush = (key) => {
        setPathoData({ ...pathoData, [key]: [...pathoData[key], { name: "", value: "", min: "", max: "", unit: "" }] })
        console.log("push", key)
    }
    React.useEffect(() => {
        console.log(pathoData);
    }, [pathoData]);


    const handlePop = (key) => {
        setPathoData({ ...pathoData, [key]: pathoData[key].slice(0, -1) })
        console.log("pop", pathoData[key])
    }

    const handleRemove = (key, index) => {
        // write code that delete the item from the array at give index
        const temp = [...pathoData[key]];
        temp.splice(index, 1);
        setPathoData({ ...pathoData, [key]: temp });
        console.log(pathoData[key]);
    }
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
                                <td></td>
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
                                                <span onClick={() => { handlePush(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><PlusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>
                                                <span onClick={() => { handlePop(key) }} style={{ display: "inline-grid", height: "1.1rem", width: "1.1rem", margin: "0 0 0 0.5em ", cursor: "pointer", background: "#ddd", borderRadius: "0.3em" }}><MinusOutlined size={"small"} style={{ margin: "auto", fontSize: '0.7em' }} /></span>

                                            </h4>
                                        </td>
                                    </tr>
                                    {
                                        pathoData[key].map((item, index) => (
                                            <tr key={item.name}>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        placeholder='name'
                                                        defaultValue={item.name}
                                                        style={{ width: "13rem" }}
                                                    />
                                                </td>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        placeholder='value'
                                                        defaultValue={item.value}
                                                        style={{ width: "6em", textAlign: "center" }}
                                                    />
                                                </td>
                                                <td>
                                                    <div style={{ fontSize: "0.8em", textAlign: "center" }}>
                                                        {(a(item.value) < a(item.min) && <Low />) || (a(item.value) > a(item.max) && <High />) || ""}
                                                    </div>
                                                </td>
                                                <td style={{ display: "flex", }}>
                                                    <Input defaultValue={item.min} placeholder='min' style={{ width: "4em", textAlign: "right" }} size='small' className='input-border-style' />
                                                    -
                                                    <Input defaultValue={item.max} placeholder='max' style={{ width: "4em", textAlign: "left" }} size='small' className='input-border-style' /></td>
                                                <td>
                                                    <Input size='small' className='input-border-style'
                                                        placeholder='unit'
                                                        defaultValue={item.unit}
                                                        style={{ width: "7em" }} />
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