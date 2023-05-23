import React, { useState, useEffect } from 'react';

const SpeechToText = ({ text, language, recognitionActive, requestMicrophonePermission, startRecognition, stopRecognition, handleLanguageChange}) => {

  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !isKeyPressed) {
        setIsKeyPressed(true);
        startRecognition();
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === 'Space') {
        setIsKeyPressed(false);
        stopRecognition();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isKeyPressed, startRecognition, stopRecognition]);

  return (
    <div>
      <button onClick={requestMicrophonePermission}>Allow Microphone</button>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en-IN">English (India)</option>
        <option value="hi-IN">Hindi (India)</option>
        <option value="gu-IN">Gujarati (India)</option>
      </select>
      <button onClick={startRecognition} disabled={recognitionActive}>
        Start
      </button>
      <button onClick={stopRecognition} disabled={!recognitionActive}>
        Stop
      </button>
      <p>{text}</p>
    </div>
  );
};

export default SpeechToText;
