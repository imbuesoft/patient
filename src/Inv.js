import React, { useState } from 'react';
import './App.css';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Inv = () => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedTests, setSelectedTests] = useState([]);
  const [testOptions] = useState([
    { id: 1, name: 'Blood Test', price: 50 },
    { id: 2, name: 'Urine Test', price: 30 },
    { id: 3, name: 'X-ray', price: 100 },
  ]);

  const handlePatientSelect = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleTestSelect = (event) => {
    const selectedTestId = parseInt(event.target.value);
    const selectedTest = testOptions.find((test) => test.id === selectedTestId);

    setSelectedTests([...selectedTests, selectedTest]);
  };

  const handleTestRemove = (testId) => {
    const updatedTests = selectedTests.filter((test) => test.id !== testId);
    setSelectedTests(updatedTests);
  };

  const renderTestOptions = () => {
    return testOptions.map((test) => (
      <option key={test.id} value={test.id}>
        {test.name} (${test.price})
      </option>
    ));
  };

  const renderSelectedTests = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedTests.map((test) => (
            <tr key={test.id}>
              <td>{test.name}</td>
              <td>${test.price}</td>
              <td>
                <button onClick={() => handleTestRemove(test.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='container'>
    <div className='card'>
      <h2>Pathology Lab Report Invoice</h2>
    <section >
      <Space wrap >
    <Select placeholder="Select Patiant Name" className='space'
      onChange={handleChange}
      options={[{value: 'jack',label: 'Jack',},{value: 'lucy',label: 'Lucy',},{value: 'Yiminghe',label: 'yiminghe',},]}
    
    />
  </Space>
  </section>

      <section>
        <h3>Select Tests</h3>
        <select onChange={handleTestSelect}>
          <option value="">-- Select Test --</option>
          {renderTestOptions()}
        </select>
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

export default Inv;
