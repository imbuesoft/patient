import React, { useEffect, useState } from 'react'
import useSpeechToText from './NewHook'
import SpeechToText from './SpeechToText'
// import SpeechToText from './SpeechToTextBtnPress'

const medicines = ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Omeprazole', 'Ranitidine', 'Pantoprazole', 'Metformin', 'Insulin', 'Atorvastatin', 'Simvastatin', 'Amlodipine', 'Losartan', 'Metoprolol', 'Albuterol', 'Montelukast', 'Loratadine', 'Cetirizine',]

const App = () => {
  const STT = useSpeechToText()

  const { text, language, recognitionActive, requestMicrophonePermission, startRecognition, stopRecognition, handleLanguageChange } = STT

  const medicineNameTest = { "gu-IN": "પેરાસીટામોલ", "hi-IN": "पैरासीटामोल", "en-IN": "Paracetamol" }
  const medicineName = {
    "en-IN": ["Paracetamol", 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Omeprazole', 'Ranitidine', 'Pantoprazole', 'Metformin', 'Insulin', 'Atorvastatin', 'Simvastatin', 'Amlodipine', 'Losartan', 'Metoprolol', 'Albuterol', 'Montelukast', 'Loratadine', 'Cetirizine'],
    "gu-IN": ["પેરાસીટામોલ", "ઇબુપ્રોફેન", "એસ્પિરિન", "એમોક્સિસિલ્લિન", "એઝિથ્રોમાઇસિન", "સિપ્રોફ્લોક્સાસિન", "ઓમેપ્રાઝોલ", "રેનિટિડિન", "પેન્ટોપ્રાઝોલ", "મેટફોર્મિન", "ઇન્સુલિન", "એટોર્વાસ્ટેટિન", "સિમવાસ્ટેટિન", "એમ્લોડિપિન", "લોસાર્ટન", "મેટોપ્રોલોલ", "અલ્બુટેરોલ", "મોન્ટેલુકાસ્ટ", "લોરાટાડિન", "સેટિરિઝિન"],
    "hi-IN": ["पैरासीटामोल", "इबुप्रोफेन", "एस्पिरिन", "एमोक्सिसिलिन", "एजिथ्रोमाइसिन", "सिप्रोफ्लोक्सासिन", "ओमेप्राजोल", "रेनिटिडिन", "पैंटोप्राजोल", "मेटफॉर्मिन", "इंसुलिन", "एटोरवास्टेटिन", "सिमवास्टेटिन", "अम्लोडिपिन", "लोसार्टन", "मेटोप्रोलोल", "अल्बुटेरोल", "मोंटेलुकास्ट", "लोराटाडिन", "सेटिरिज़िन"]
  }

  const morning = { "gu-IN": "સવાર", "hi-IN": "सुबह", "en-IN": "morning" }
  const afternoon = { "gu-IN": "બપોર", "hi-IN": "दोपहर", "en-IN": "afternoon" }
  const evening = { "gu-IN": "સાંજ", "hi-IN": "शाम", "en-IN": "evening" }

  // JSON data to use in the form
  const [formData, setFormData] = useState({
    medicine: '',
    morning: false,
    afternoon: false,
    evening: false
  })

  useEffect(() => {

    
    medicineName[language].forEach((medicine) => {
      if (text.includes(medicine)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          medicine: medicine
        }))
      }
    })

    if (text.includes(morning[language])) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        morning: true
      }))
    }

    if (text.includes(afternoon[language])) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        afternoon: true
      }))
    }

    if (text.includes(evening[language])) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        evening: true
      }))
    }

    if (text.includes('save')) {
      handleSubmit()
    }

    if (text.includes('reset')) {
      setFormData({
        medicine: '',
        morning: false,
        afternoon: false,
        evening: false
      })
    }

  }, [text])

  // Function to handle form change
  const handleFormChange = ({ target }) => {
    const { name, value, type, checked } = target

    setFormData((prevFormData) => {
      if (type === 'checkbox') {
        return {
          ...prevFormData,
          [name]: checked,
        }
      }

      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  // Function to console the data and reset the form
  const handleSubmit = () => {
    console.log('Form Data:', formData)
    // reset the form
    setFormData({
      medicine: '',
      morning: false,
      afternoon: false,
      evening: false
    })
  }

  // Array of options for the select 
  const medicineOptions = medicineName[language].map((medicine) => (
    <option key={medicine} value={medicine}>
      {medicine}
    </option>
  ))

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
  )
}

export default App
