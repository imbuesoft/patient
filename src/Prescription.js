import React, { useState } from 'react';
import { Row, Col, AutoComplete, Button, Radio, Input, Checkbox, Table } from 'antd';

const Prescription = () => {
    const [currentValue, setCurrentValue] = useState('')
    const [currentInstructionValue, setCurrentInstructionValue] = useState('')
    const [currentPresetValue, setCurrentPresetValue] = useState('')
    const [options, setOptions] = useState([]);


    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no'
        },
        {
            title: 'Medicine',
            dataIndex: 'medicine',
            key: 'medicine'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: 'days',
            dataIndex: 'days',
            key: 'days'
        },
        {
            title: 'duration',
            dataIndex: 'duration',
            key: 'duration'
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'instruction',
            dataIndex: 'instruction',
            key: 'instruction'
        },
        {
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            render: (text) => <><Button type="primary">{text[0]}</Button> <Button type="primary">{text[1]}</Button></>,
        }
    ];

    const prescribedata = [{
        no: '1',
        medicine: 'Paracicamol',
        time: '1-0-1',
        days: 'Daily',
        duration: '-',
        type: 'Tablet',
        instruction: 'After Meal',
        action: ['Edit', 'Delete']
    }, {
        no: '1',
        medicine: 'Dolo',
        time: '1-0-1',
        days: 'Daily',
        duration: '-',
        type: 'Tablet',
        instruction: 'After Meal',
        action: ['Edit', 'Delete']
    }]

    const dozes = ['1/4', '1/3', '1/2', '1', '1(1/2)', '2', '2(1/2)', '3', '3(1/2)', '4'];
    const days = ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '14d', '21d', '28d', '56d', '84d', '168d'];

    const medicines = [
        { label: 'Paracitamol', value: 'Paracitamol' },
        { label: 'Dolo', value: 'Dolo' },
        { label: 'Dayamanic DCA', value: 'Dayamanic DCA' }
    ]

    const medicine_types = ['Tablet', 'Syrup', 'Cream']

    const medicineInstruction = [
        { label: 'Before Meal', value: 'Before Meal' },
        { label: 'After Meal', value: 'After Meal' },
        { label: 'With milk', value: 'With milk' }
    ]

    const presets = [
        { label: 'Fever', value: 'Fever' },
        { label: 'Cold', value: 'Cold' },
        { label: 'Acne', value: 'Acne' }
    ]

    const handleSearch = (value) => {
        let newOptions = []
        if (value) {
            newOptions = medicines.filter((option) => {
                return option.label.toLowerCase().includes(value.toLowerCase())
            })
        } else {
            newOptions = medicines
        }
        setOptions(newOptions)
    }

    const handleInstructionSearch = (value) => {
        let newOptions = []
        if (value) {
            newOptions = medicineInstruction.filter((option) => {
                return option.label.toLowerCase().includes(value.toLowerCase())
            })
        } else {
            newOptions = medicineInstruction
        }
        setOptions(newOptions)
    }

    const handlePresets = (value) => {
        let newOptions = []
        if (value) {
            newOptions = presets.filter((option) => {
                return option.label.toLowerCase().includes(value.toLowerCase())
            })
        } else {
            newOptions = presets
        }
        setOptions(newOptions)
    }

    const onDozeChange = (e) => {
        console.log(`radio checked:${e.target.name} - ${e.target.value}`);
    };

    const onSoSChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };


    return (
        <>
            <Row gutter={12}>
                <Col span={12}>

                    <Row gutter={6} style={{ marginBottom: '10px' }}>
                        <Col span={4}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#376dd0', width: 100 + '%' }}>CT_ALL</Button>
                        </Col>
                        <Col span={5}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#ed5855', width: 100 + '%' }}>Skip</Button>
                        </Col>
                        <Col span={5}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#33d9d1', width: 100 + '%' }}>Webcam</Button>
                        </Col>
                        <Col span={5}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#376dd0', width: 100 + '%' }}>Upload</Button>
                        </Col>
                        <Col span={5}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#fbb839', width: 100 + '%' }}>View</Button>
                        </Col>
                    </Row>
                    <Row gutter={6} style={{ marginBottom: '10px' }}>
                        <Col span={5}></Col>
                        <Col span={1}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#376dd0', width: 100 + '%' }}>&lt;</Button>
                        </Col>
                        <Col span={12}>
                            <Input style={{}} placeholder='---Previous Prescription Date---' type='text' />
                        </Col>
                        <Col span={1}>
                            <Button type='button' style={{ color: 'white', backgroundColor: '#376dd0', width: 100 + '%' }}>	&gt;</Button>
                        </Col>
                        <Col span={5}></Col>
                    </Row>


                    <AutoComplete
                        style={{
                            width: 100 + '%',
                            marginBottom: 10
                        }}
                        onSearch={handleSearch}
                        placeholder="Medicine Name"
                        options={options}
                        onSelect={(value) => {
                            setCurrentValue(value)
                        }}
                    />

                    <AutoComplete
                        style={{
                            width: 100 + '%',
                        }}
                        onSearch={handleInstructionSearch}
                        placeholder="Medicine Instructions"
                        options={options}
                        onSelect={(value) => {
                            setCurrentInstructionValue(value)
                        }}
                    />

                    <h3 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: 5 + 'px' }}>{currentValue}</h3>


                    <h4 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: 5 + 'px' }}>{medicine_types[0]}</h4>

                    <div style={{ textAlign: 'center' }}>
                        {
                            dozes.map((doze, index) => {
                                return <Button key={index} type='primary' shape='circle' size='large' style={{ marginRight: 10 + 'px' }}>{doze}</Button>
                            })
                        }
                    </div>

                    <Row style={{ marginTop: 10 + 'px' }}>
                        <Col span={8}>
                            <h2 style={{ textAlign: 'center', backgroundColor: 'gray', margin: 5 + 'px', color: 'white' }}>Breakfast</h2>
                            <Radio.Group style={{ textAlign: 'center', width: '100%', padding: 5 + 'px', color: 'white' }} onChange={onDozeChange} name='breakfast'>
                                <Radio.Button style={{ width: '50%' }} value="before">Before</Radio.Button>
                                <Radio.Button style={{ width: '50%' }} value="after">After</Radio.Button>
                            </Radio.Group>
                        </Col>
                        <Col span={8}>
                            <h2 style={{ textAlign: 'center', backgroundColor: 'gray', margin: 5 + 'px', color: 'white' }}>Lunch</h2>
                            <Radio.Group style={{ textAlign: 'center', width: '100%', padding: 5 + 'px', color: 'white' }} onChange={onDozeChange} name='lunch'>
                                <Radio.Button style={{ width: '50%' }} value="before">Before</Radio.Button>
                                <Radio.Button style={{ width: '50%' }} value="after">After</Radio.Button>
                            </Radio.Group>
                        </Col>
                        <Col span={8}>
                            <h2 style={{ textAlign: 'center', backgroundColor: 'gray', margin: 5 + 'px', color: 'white' }}>Dinner</h2>
                            <Radio.Group style={{ textAlign: 'center', width: '100%', padding: 5 + 'px', color: 'white' }} onChange={onDozeChange} name='dinner'>
                                <Radio.Button style={{ width: '50%' }} value="before">Before</Radio.Button>
                                <Radio.Button style={{ width: '50%' }} value="after">After</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>

                    <div style={{ textAlign: 'center', marginTop: 10 + 'px' }}>
                        {
                            days.map((day, index) => {
                                return <Button key={index} type='primary' shape='squre' size='large' style={{ marginRight: 10 + 'px' }}>{day}</Button>
                            })
                        }
                        <Button type='button' shape='circle' style={{ width: '40px', height: '40px', marginTop: '10px', backgroundColor: 'green', color: 'white' }}>Add</Button>
                    </div>



                    <AutoComplete
                        style={{
                            width: 100 + '%',
                            marginBottom: 10,
                            marginTop: 10 + 'px'
                        }}
                        onSearch={handlePresets}
                        placeholder="Preset Name"
                        options={options}
                        onSelect={(value) => {
                            setCurrentPresetValue(value)
                        }}
                    />

                    <Row>
                        <Col span={18}>
                            <Input placeholder='Next Follow up Days' type='number' />
                        </Col>
                        <Col span={3}>
                            <Checkbox style={{ paddingTop: '5px', paddingLeft: '25px' }} name="sos" onChange={onSoSChange}>SoS</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Button type='button' style={{ backgroundColor: 'red', color: 'white' }}>Submit</Button>
                        </Col>
                    </Row>
                </Col >
                <Col span={12}>
                    <Table columns={columns} dataSource={prescribedata} pagination={false} style={{ border: "1px solid grey", marginTop: "10px" }} />
                </Col>
            </Row >
        </>
    )
}
export default Prescription;