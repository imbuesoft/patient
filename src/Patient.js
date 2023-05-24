import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AutoComplete, Table, Button, Select, Col, Divider, Row, Input } from 'antd';

const Patient = () => {
    const [currentValue, setCurrentValue] = useState('')
    const [options, setOptions] = useState([]);
    const [data, setData] = useState([]);

    const patients = [
        { label: 'Prakash Gujarati', value: 'Prakash Gujarati' },
        { label: 'Harshal Katakiya', value: 'Harshal Katakiya' },
        { label: 'Jay Parmar', value: 'Jay Parmar' }
    ]

    const columns = [
        {
            title: 'Patient Name',
            dataIndex: 'patientname',
            key: 'patientname'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile'
        }
    ];

    const patientdata = [{
        key: '1',
        patientname: 'Harshal Katakiya',
        age: '25',
        gender: 'Male',
        mobile: '1234567890'
    }, {
        key: '2',
        patientname: 'Prakash Gujarati',
        age: '33',
        gender: 'Male',
        mobile: '1234567891'
    }, {
        key: '3',
        patientname: 'Jay Parmar',
        age: '23',
        gender: 'Male',
        mobile: '1234567892'
    }]


    const handleSearch = (value) => {
        let newOptions = []
        if (value) {
            newOptions = patients.filter((option) => {
                return option.label.toLowerCase().includes(value.toLowerCase())
            })
        } else {
            newOptions = patients
        }
        setOptions(newOptions)
    }
    return (
        <>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col className='gutter-row' xs={24} md={12} lg={6}>
                    <AutoComplete
                        style={{
                            width: 98 + '%',
                        }}
                        onSearch={handleSearch}
                        placeholder="Enter Patient Name"
                        options={options}
                        onSelect={(value) => {
                            setCurrentValue(value)
                        }}
                    />
                </Col>
                <Col className='gutter-row' xs={24} md={12} lg={6}>
                    <Input type='number' placeholder='Age' />
                </Col>
                <Col className='gutter-row' xs={24} md={12} lg={6}>
                    <Select style={{
                        width: 98 + '%',
                    }} options={[{ "value": "male", "label": "male" }, { "value": "female", "label": "female" }]} defaultValue={"male"} />
                </Col>
                <Col className='gutter-row' xs={24} md={12} lg={6}>
                    <Input type='number' placeholder='Mobile' />
                </Col>
            </Row>



            <br />
            <Table columns={columns} dataSource={patientdata} pagination={false} style={{ border: "1px solid grey", marginTop: "10px" }} />
        </>
    );
};

export default Patient;
