import React, { useState, useEffect } from 'react';
import { Button, Select } from 'antd';
const { Option } = Select;

const SpeechToText = ({ text, kbd, language, recognitionActive, requestMicrophonePermission, startRecognition, stopRecognition, handleLanguageChange }) => {


  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.code, kbd);
      if (event.code == kbd) {
        if (recognitionActive) {
          stopRecognition();
        } else {
          startRecognition();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [recognitionActive, startRecognition, stopRecognition]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-between", gap:"1em" }}>
      <Button onClick={startRecognition} disabled={recognitionActive}>
        Start
      </Button>
      <Button onClick={stopRecognition} disabled={!recognitionActive}>
        Stop
      </Button>
      <div style={{ margin: "0 auto" }}>
        <Button  onClick={requestMicrophonePermission}>Allow Microphone</Button>
      </div>
      <Select value={language} onChange={handleLanguageChange} >
        <Option value="en-IN">English (India)</Option>
        <Option value="hi-IN">Hindi (India)</Option>
        <Option value="gu-IN">Gujarati (India)</Option>
      </Select>
      <p>{text}</p>
    </div>
  );
};

export default SpeechToText;
