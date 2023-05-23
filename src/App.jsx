import React, { useEffect, useState } from 'react';
import useSpeechToText from './NewHook';
import SpeechToText from './SpeechToText';

const medicines = ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Omeprazole', 'Ranitidine', 'Pantoprazole', 'Metformin', 'Insulin', 'Atorvastatin', 'Simvastatin', 'Amlodipine', 'Losartan', 'Metoprolol', 'Albuterol', 'Montelukast', 'Loratadine', 'Cetirizine',]

const App = () => {
  const STT = useSpeechToText();

  const { text, language, recognitionActive, requestMicrophonePermission, startRecognition, stopRecognition, handleLanguageChange } = STT;

  // JSON data to use in the form
  const [formData, setFormData] = useState({
    medicine: '',
    morning: false,
    afternoon: false,
    evening: false
  });

  useEffect(() => {

    medicines.forEach((medicine) => {
      if (text.includes(medicine)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          medicine: medicine
        }));
      }
    });



    if (text.includes('morning')) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        morning: true
      }));
    }

    if (text.includes('afternoon')) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        afternoon: true
      }));
    }

    if (text.includes('evening')) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        evening: true
      }));
    }

    if (text.includes('save')) {
      handleSubmit();
    }

    if (text.includes('reset')) {
      setFormData({
        medicine: '',
        morning: false,
        afternoon: false,
        evening: false
      });
    }

  }, [text]);

  // Function to handle form change
  const handleFormChange = ({ target }) => {
    const { name, value, type, checked } = target;

    setFormData((prevFormData) => {
      if (type === 'checkbox') {
        return {
          ...prevFormData,
          [name]: checked,
        };
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // Function to console the data and reset the form
  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // reset the form
    setFormData({
      medicine: '',
      morning: false,
      afternoon: false,
      evening: false
    });
  };

  // Array of options for the select 
  const medicineOptions = medicines.map((medicine) => (
    <option key={medicine} value={medicine}>
      {medicine}
    </option>
  ));

  return (
    <div>
      <SpeechToText {...STT} />

      <label htmlFor="medicine">Select Medicine:</label>
      <select id="medicine" name="medicine" value={formData.medicine} onChange={handleFormChange}>
        <option value="">-- Select Medicine --</option>
        {medicineOptions}
      </select>

      <div>
        <label htmlFor="morning">Morning:</label>
        <input id="morning" name="morning" type="checkbox" checked={formData.morning} onChange={handleFormChange} />
      </div>

      <div>
        <label htmlFor="afternoon">Afternoon:</label>
        <input id="afternoon" name="afternoon" type="checkbox" checked={formData.afternoon} onChange={handleFormChange} />
      </div>

      <div>
        <label htmlFor="evening">Evening:</label>
        <input id="evening" name="evening" type="checkbox" checked={formData.evening} onChange={handleFormChange} />
      </div>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default App;
