import React, { useEffect, useState } from 'react'
import { Select, Checkbox, Button, Table } from 'antd';
import useSpeechToText from '/src/Hooks/useSpeechToText'
import SpeechToText from '../components/SpeechToTextBtnPress'
// import SpeechToText from '../components/SpeechToTextBtnHold'
const { Option } = Select;

const medicines = ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Omeprazole', 'Ranitidine', 'Pantoprazole', 'Metformin', 'Insulin', 'Atorvastatin', 'Simvastatin', 'Amlodipine', 'Losartan', 'Metoprolol', 'Albuterol', 'Montelukast', 'Loratadine', 'Cetirizine',]

const App = () => {
  const STT = useSpeechToText()
  const { text, language } = STT

  const instructions = ["Take after dinner", "Take before dinner", "Take with food", "Take on an empty stomach", "Take once daily in the morning", "Take twice daily, morning and evening", "Take three times daily, after meals", "Take as needed for pain relief", "Take with a full glass of water", "Shake well before use", "Store in a cool, dry place", "Keep out of reach of children", "Avoid alcohol while taking this medication", "Do not crush or chew tablets", "Read the label carefully before use", "Consult your doctor or pharmacist if unsure"]
  const medicineName = {
    "en-IN": ["Paracetamol", 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Omeprazole', 'Ranitidine', 'Pantoprazole', 'Metformin', 'Insulin', 'Atorvastatin', 'Simvastatin', 'Amlodipine', 'Losartan', 'Metoprolol', 'Albuterol', 'Montelukast', 'Loratadine', 'Cetirizine'],
    "gu-IN": ["પેરાસીટામોલ", "ઇબુપ્રોફેન", "એસ્પિરિન", "એમોક્સિસિલ્લિન", "એઝિથ્રોમાઇસિન", "સિપ્રોફ્લોક્સાસિન", "ઓમેપ્રાઝોલ", "રેનિટિડિન", "પેન્ટોપ્રાઝોલ", "મેટફોર્મિન", "ઇન્સુલિન", "એટોર્વાસ્ટેટિન", "સિમવાસ્ટેટિન", "એમ્લોડિપિન", "લોસાર્ટન", "મેટોપ્રોલોલ", "અલ્બુટેરોલ", "મોન્ટેલુકાસ્ટ", "લોરાટાડિન", "સેટિરિઝિન"],
    "hi-IN": ["पैरासीटामोल", "इबुप्रोफेन", "एस्पिरिन", "एमोक्सिसिलिन", "एजिथ्रोमाइसिन", "सिप्रोफ्लोक्सासिन", "ओमेप्राजोल", "रेनिटिडिन", "पैंटोप्राजोल", "मेटफॉर्मिन", "इंसुलिन", "एटोरवास्टेटिन", "सिमवास्टेटिन", "अम्लोडिपिन", "लोसार्टन", "मेटोप्रोलोल", "अल्बुटेरोल", "मोंटेलुकास्ट", "लोराटाडिन", "सेटिरिज़िन"]
  }
  const morning = { "gu-IN": "સવાર", "hi-IN": "सुबह", "en-IN": "morning" }
  const afternoon = { "gu-IN": "બપોર", "hi-IN": "दोपहर", "en-IN": "afternoon" }
  const evening = { "gu-IN": "સાંજ", "hi-IN": "शाम", "en-IN": "evening" }

  const [medicinesList, setMedicinesList] = useState([])

  const [medicine, setMedicine] = useState({
    medicine: '',
    instruction: '',
    morning: false,
    afternoon: false,
    evening: false
  })

  useEffect(() => {

    let tempObj = {}

    medicineName[language].forEach((medicine) => {
      if (text.includes(medicine)) {
        tempObj = { ...tempObj, medicine: medicine }
      }
    })

    if (text.includes(morning[language])) {
      tempObj = { ...tempObj, morning: true }
    }

    if (text.includes(afternoon[language])) {
      tempObj = { ...tempObj, afternoon: true }
    }

    if (text.includes(evening[language])) {
      tempObj = { ...tempObj, evening: true }
    }

    setMedicine((prevFormData) => { return { ...prevFormData, ...tempObj } })

    if (text.includes('save')) {
      handleSubmit()
    }

    if (text.includes('reset')) {
      setMedicine({
        medicine: '',
        instruction: '',
        morning: false,
        afternoon: false,
        evening: false
      })
    }

  }, [text])

  // Function to handle form change
  const handleCheckboxChange = ({ target }) => {
    console.log(target);
    const { name, value, type, checked } = target

    setMedicine((prevFormData) => {
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

  const handleMedicineChange = (value) => {
    setMedicine((prevFormData) => {
      return {
        ...prevFormData,
        medicine: value
      }
    })
  }

  const handleInstructionChange = (value) => {
    setMedicine((prevFormData) => {
      return {
        ...prevFormData,
        instruction: value
      }
    })
  }

  // Function to console the data and reset the form
  const handleSubmit = () => {
    console.log('Form Data:', medicine)
    setMedicinesList((prevMedicinesList) => { return [...prevMedicinesList, medicine] })
    // reset the form
    setMedicine({
      medicine: '',
      instruction: '',
      morning: false,
      afternoon: false,
      evening: false
    })
  }

  // Array of options for the select 
  const medicineOptions = medicineName[language].map((medicine, i) => (
    <Option key={medicine} value={medicineName["en-IN"][i]}>
      {medicine}
    </Option>
  ))
  const instructionsOptions = instructions.map((val, i) => (
    <Option key={val} value={val}>
      {val}
    </Option>
  ))

  function handleKeyPress(event) {
    console.log(event.key);
    if (event.key === "Space") {
      event.preventDefault();
      console.log("Space key pressed, no action");
    } else if (event.key === "Tab") {
      console.log("Tab key pressed, normal behavior");
    } else if (event.key === "Enter") {
      event.preventDefault();
      event.target.click();
      console.log("Enter key pressed, triggered click");
    }
  }

  const handleReset = () => { setMedicine({ medicine: '', instruction: '', morning: false, afternoon: false, evening: false }) }

  const handleSearch = (value) => {
    console.log('search:', value);
  }


  return (
    <div style={{ padding: "1em", height: "100%", display: "flex", flexDirection: "column" }}>
      <SpeechToText {...STT} kbd="Shift" />

      <div style={{ height: "3em" }}></div>

      <div style={{ flexGrow: "0", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: "1em" }}>

        <div style={{}}>
          {/* <label htmlFor="medicine">Select Medicine:</label> */}
          <Select style={{ maxWidth: "16em", minWidth: "16em", width: "100%" }}
            showSearch tabIndex={1} id="medicine" name="medicine" value={medicine.medicine} onChange={handleMedicineChange} >
            <Option value="">-- Select Medicine --</Option>
            {medicineOptions}
          </Select>
        </div>

        <div style={{ display: "flex", gap: "1em 1em", flexWrap: "wrap" }}>
          <Checkbox tabIndex={2} style={{ textTransform: 'capitalize' }}
            onKeyDown={handleKeyPress} onChange={handleCheckboxChange}
            id="morning" name="morning" checked={medicine.morning} >
            {morning[language]}
          </Checkbox>

          <Checkbox tabIndex={3} style={{ textTransform: 'capitalize' }}
            onKeyDown={handleKeyPress} onChange={handleCheckboxChange}
            id="afternoon" name="afternoon" checked={medicine.afternoon} >
            {afternoon[language]}
          </Checkbox>

          <Checkbox tabIndex={4} style={{ textTransform: 'capitalize' }}
            onKeyDown={handleKeyPress} onChange={handleCheckboxChange}
            id="evening" name="evening" checked={medicine.evening} >
            {evening[language]}
          </Checkbox>
        </div>

        <div style={{}}>
          {/* <label htmlFor="medicine">Select Medicine:</label> */}
          <Select style={{ maxWidth: "16em", minWidth: "16em", width: "100%" }}
            showSearch tabIndex={5} id="medicine" name="medicine" value={medicine.instruction} onChange={handleInstructionChange} >
            <Option value="">-- Select Instruction --</Option>
            {instructionsOptions}
          </Select>
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: "1em" }}>
          <Button style={{ width: "100%", maxWidth: "23em" }} tabIndex={6} onClick={(handleSubmit)} type='primary' ghost>+ Add</Button>
        </div>

      </div>

      <div style={{ marginTop: "auto", display: "flex", gap: "1em", margin: "1em 0" }}>
        {/* <Button style={{ width: "100%", maxWidth: "23em" }} tabIndex={7} onClick={handleSubmit} type="primary">Save</Button> */}
        <Button type='text' style={{ width: "100%", maxWidth: "13em", border: "1px solid #00000022" }} tabIndex={8} onClick={(handleReset)} >Reset</Button>
      </div>
      <div>
        <Table style={{ flexGrow: "1" }} pagination={false}

          columns={[
            {
              title: 'Medicine',
              dataIndex: 'medicine',
              key: 'medicine',
              render: (_, obj) => {
                return <p>{obj.medicine}</p>
              }
            },
            {
              title: 'Timing',
              dataIndex: 'timing',
              key: 'timing',
              render: (_, obj) => {
                return <p>{(obj.morning ? morning[language] + ", " : "") + (obj.afternoon ? afternoon[language] + ", " : "") + (obj.evening ? evening[language] + " " : "")}</p>
              }
            },
            {
              title: 'Instruction',
              dataIndex: 'instruction',
              key: 'instruction',
              render: (_, obj) => {
                return <p>{obj.instruction}</p>
              }
            },
          ]} dataSource={medicinesList} />
      </div>
    </div>
  )
}

export default App
