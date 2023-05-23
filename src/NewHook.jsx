import { useState, useEffect } from 'react';

const useSpeechToText = () => {
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
  
    return {
      text,
      language,
      recognitionActive,
      requestMicrophonePermission,
      startRecognition,
      stopRecognition,
      handleLanguageChange,
    };
  };
  
  export default useSpeechToText;
  