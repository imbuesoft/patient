import React, { useState } from 'react';
import { Select, Table, Button } from 'antd';
import './App.css';

const Invoice = () => {
  const { Option } = Select;
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedTests, setSelectedTests] = useState([]);
  const [testOptions] = useState([
    { id: 1, name: 'Blood Test' },
    { id: 2, name: 'Urine Test'},
    { id: 3, name: 'X-ray'},
  ]);

  const handlePatientSelect = (value) => {
    setSelectedPatient(value);
  };

  const handleTestSelect = (value) => {
    const selectedTestId = parseInt(value);
    const selectedTest = testOptions.find((test) => test.id === selectedTestId);

    setSelectedTests([...selectedTests, selectedTest]);
  };

  const handleTestEdit = () => {
  };

  const handleTestView = () => {
  };

  const renderTestOptions = () => {
    return testOptions.map((test) => (
      <Option key={test.id} value={test.id}>
        {test.name}
      </Option>
    ));
  };

  const renderSelectedTests = () => {
    const columns = [
      {
        title: 'Test',
        dataIndex: 'name',
        key: 'name',
      },
      {},
      {
        render: (id) => (
          <>
            <Button onClick={() => handleTestEdit(id)}>Edit</Button>
            <Button onClick={() => handleTestView(id)}>View</Button>
          </>
        ),
      },
    ];

    return <Table dataSource={selectedTests} columns={columns} />;
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Pathology Lab Report Invoice</h2>

        <section>
          <h3>Select Patient</h3>
          <Select
            className="select"
            placeholder="Select Patient"
            onChange={handlePatientSelect}
          >
            <Option value="John">John</Option>
            <Option value="Jane">Jane</Option>
            <Option value="David">David</Option>
          </Select>
        </section>

        <section>
          <h3>Select Tests</h3>
          <Select
            className="select"
            onChange={handleTestSelect}
            placeholder="-- Select Test --"
          >
            {renderTestOptions()}
          </Select>
        </section>

        <section>
          <h3>Selected Tests</h3>
          {selectedTests.length > 0 ? (
            renderSelectedTests()
          ) : (
            <p>No tests selected.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Invoice;
