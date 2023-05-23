import React, { useState, useEffect } from 'react';
import useSpeechToText from './NewHook';

const SpeechToText = () => {
  const {
    text,
    language,
    recognitionActive,
    requestMicrophonePermission,
    startRecognition,
    stopRecognition,
    handleLanguageChange,
  } = useSpeechToText();

  const [isSpaceBarPressed, setIsSpaceBarPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !isSpaceBarPressed) {
        setIsSpaceBarPressed(true);
        startRecognition();
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === 'Space') {
        setIsSpaceBarPressed(false);
        stopRecognition();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpaceBarPressed, startRecognition, stopRecognition]);

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
