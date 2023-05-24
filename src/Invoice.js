import { Select, Table, Button, Row, Col } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

const App = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [selectedReport, setSelectedReport] = useState(null);
    const [data, setData] = useState([]);
    const handlePatientChange = (value) => {
        setSelectedPatient(value);
    };
    const handleReportChange = (value) => {
        setSelectedReport(value);
    };
    const patientList = [
        {
            value: 'Harshal Katakiya',
            label: 'Harshal Katakiya',
        },
        {
            value: 'Jay Parmar',
            label: 'Jay Parmar',
        },
        {
            value: 'Miraj',
            label: 'Miraj',
        },
    ];

    const reportList = [
        {
            value: 'HEMOGLOBIN',
            label: 'HEMOGLOBIN',
        },
        {
            value: 'RBC COUNT',
            label: 'RBC COUNT',
        },
        {
            value: 'BLOOD INDICES',
            label: 'BLOOD INDICES',
        },
        {
            value: 'WBC COUNT',
            label: 'WBC COUNT',
        },
        {
            value: 'DIFFERENT WBC COUNT',
            label: 'DIFFERENT WBC COUNT',
        },
        {
            value: 'PLATELET COUNT',
            label: 'PLATELET COUNT',
        },
    ];
    const editReport = () => { }
    const viewReport = () => { }
    const edit = (
        <EditOutlined onClick={editReport} style={{ cursor: "pointer" }} />
    );
    const view = (
        <EyeOutlined onClick={viewReport} style={{ cursor: "pointer" }} />
    );
    const handleAdd = () => {
        if (selectedReport) {
            const newReport = {
                key: data.length + 1,
                Report: selectedReport,
                Edit: edit,
                View: view,
            };
            setData((prevData) => [...prevData, newReport]);
            setSelectedReport(null);
        }
    };

    const columns = [
        {
            title: 'Report',
            dataIndex: 'Report',
            key: 'Report',
            render: (text) => <a href='/'>{text}</a>,
        },
        {
            title: 'Edit',
            dataIndex: 'Edit',
            key: 'Edit',
        },
        {
            title: 'View',
            dataIndex: 'View',
            key: 'View',
        },
    ];

    return (
        <>
            <Row gutter={8}>
                <Col xs={24} md={12}>
                    <Select
                        defaultValue="Select Patient"
                        style={{
                            width: 100 + '%'
                        }}
                        onChange={handlePatientChange}
                        options={patientList}
                    />
                </Col>
                <Col xs={22} md={11}>
                    <Select
                        defaultValue="Select Report"
                        style={{
                            width: 100 + '%'
                        }}
                        onChange={handleReportChange}
                        options={reportList}
                    />
                </Col>
                <Col xs={2} md={1}>
                    <Button type="primary" icon={<PlusOutlined />} size="medium" onClick={handleAdd} />
                </Col>
            </Row>
            <Table columns={columns} dataSource={data} style={{ border: "1px solid grey", marginTop: "10px" }} />


        </>
    );
};

export default App;
