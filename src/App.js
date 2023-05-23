import React from 'react';
import PatientForm from './PatientForm';

const App = () => {
  return (
    <div className="App">
      <b><center><h1 style={{ fontFamily: 'Arial', color: 'blue', fontSize: '40px' }}>Patient Form</h1></center></b>
      <PatientForm />
    </div>
  );
};

export default App;
