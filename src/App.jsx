import React, { useState, useEffect } from 'react';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-IN');
  const [recognitionActive, setRecognitionActive] = useState(false);
  let recognition = null;

  const requestMicrophonePermission = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        console.log('Microphone permission granted.');
      })
      .catch((error) => {
        console.error('Error requesting microphone permission:', error);
      });
  };

  const startRecognition = () => {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = language;
    recognition.interimResults = true;
    recognition.continuous = true; // Set continuous to true

    recognition.onstart = () => {
      setRecognitionActive(true);
    };
    
    recognition.onresult = (event) => {
      const lastResultIndex = event.results.length - 1;
      const interimTranscript = event.results[lastResultIndex][0].transcript;
      const isFinal = event.results[lastResultIndex].isFinal;

      setText((prevText) => {
        let newText = prevText;

        if (isFinal) {
          newText += interimTranscript + ' ';
        }

        return newText;
      });
    };


    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  const stopRecognition = () => {
    if (recognitionActive) {
      setRecognitionActive(false);
      recognition.stop();
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    if (recognitionActive) {
      startRecognition();
    }
    return () => {
      if (recognitionActive) {
        stopRecognition();
      }
    };
  }, [recognitionActive]);

  return (
    <div>
      <button onClick={requestMicrophonePermission}>Allow Microphone</button>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en-IN">English (India)</option>
        <option value="hi-IN">Hindi (India)</option>
        <option value="gu-IN">Gujarati (India)</option>
      </select>
      <button onClick={() => setRecognitionActive(true)} disabled={recognitionActive}>
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
