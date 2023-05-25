import { Select, Table, Button, AutoComplete, Typography } from 'antd'
import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title } = Typography;

const patients = ['Harshal Katakiya', 'Jay Parmar', 'Miraj',]
const reports = ['HEMOGLOBIN', 'RBC COUNT', 'BLOOD INDICES', 'WBC COUNT', 'DIFFERENT WBC COUNT', 'PLATELET COUNT',]

const editBtn = <EditOutlined onClick={() => { }} style={{ cursor: "pointer" }} />
const viewBtn = <EyeOutlined onClick={() => { }} style={{ cursor: "pointer" }} />

const Invoice = () => {
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [selectedReport, setSelectedReport] = useState(null)

    const [patientList, setPatientList] = useState(patients)
    const [reportList, setReportList] = useState(reports)

    const [data, setData] = useState([])

    const handleAddReport = () => {
        const newReport = {
            key: data.length + 1,
            report: selectedReport,
            edit: editBtn,
            view: viewBtn,
        }
        setData((prevData) => [...prevData, newReport])
        console.log(data)
    }

    const columns = [
        {
            title: 'Report',
            dataIndex: 'report',
            key: 'report',
            render: (text) => <a href='/'>{text}</a>,
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
        },
        {
            title: 'View',
            dataIndex: 'view',
            key: 'view',
        },
    ]


    const handlePatientSearch = (value) => {
        setSelectedPatient(value)
        const filtered = patients.filter((patient) =>
            patient.toLowerCase().includes(value.toLowerCase())
        )
        setPatientList(filtered)
    }

    const handleReportSearch = (value) => {
        const filtered = reports.filter((patient) =>
            patient.toLowerCase().includes(value.toLowerCase())
        )
        setReportList(filtered)
    }

    return (
        <>
            <div style={{ width: "700px", marginTop: "3em", marginLeft: "450px" }}>
                <div style={{ width: "100%", margin: "1em 0 0.2em 0" }}>Select Patient:</div>
                <div style={{ width: "100%", display: "flex", gap: "1em", }}>
                    <AutoComplete
                        style={{ width: "100%" }}
                        dataSource={patientList}
                        onSearch={handlePatientSearch}
                        onSelect={(value) => setSelectedPatient(value)}
                        defaultValue={selectedPatient}
                    />
                    {
                        patientList.length === 0 &&
                        <Button type="primary" icon={<PlusOutlined />} size="medium" onClick={handleAddReport}> Patient </Button>
                    }
                </div>
                <div style={{ width: "100%", margin: "1em 0 0.2em 0" }}>Select Report:</div>
                <div style={{ width: "100%", display: "flex", gap: "1em" }}>
                    <AutoComplete
                        style={{ width: "100%" }}
                        disabled={!selectedPatient}
                        dataSource={reportList}
                        onSearch={handleReportSearch}
                        onSelect={(value) => { setSelectedReport(value) }}
                        defaultValue={selectedReport}
                    />
                    <Button disabled={!selectedPatient} type="primary" icon={<PlusOutlined />} size="medium" onClick={handleAddReport}> Report </Button>
                </div>

                <div style={{ height: "1em" }}></div>
                {selectedPatient &&
                    <Title level={3} >Selected patient : {selectedPatient}</Title>}
                <Table columns={columns} dataSource={data} style={{ border: "1px solid grey" }} />
            </div>
        </>
    )
}

export default Invoice
