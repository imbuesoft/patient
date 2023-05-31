import { Select, Table, Button } from 'antd';
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
      value: 'Dhara Ramavat',
      label: 'Dhara Ramavat',
    },
    {
      value: 'Khushi menpara',
      label: 'Khushi menpara',
    },
    {
      value: 'Jinal taraviya',
      label: 'Jinal taraviya',
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

  const edit = (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRpYzCNgof4S7x1rryvTUu1vCEHYu6W-F9w&usqp=CAU" alt="Edit" height="20px" width="20px" />
  );

  const view = (
    <img src="https://thumbs.dreamstime.com/b/view-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134155788.jpg" alt="view" height="20px" width="20px" />
  );

  const handleAdd = () => {
    if (selectedReport && selectedPatient) {
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
      render: (text) => <a>{text}</a>,
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
      <Select
        defaultValue="Select Patient"
        style={{
          width: 150,
        }}
        onChange={handlePatientChange}
        options={patientList}
      />
      <Select
        defaultValue="Select Report"
        style={{
          width: 150,
          marginLeft: '10px',
        }}
        onChange={handleReportChange}
        options={reportList}
      />
      <Button type="primary" onClick={handleAdd}>
        <span>+</span>
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default App;