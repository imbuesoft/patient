import { useState, useEffect, useRef } from 'react';

const useSpeechToText = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-IN');
  const [recognitionActive, setRecognitionActive] = useState(false);
  const recognitionRef = useRef(null);

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
    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.lang = language;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.continuous = true;

    recognitionRef.current.onstart = () => {
      setRecognitionActive(true);
    };

    recognitionRef.current.onresult = (event) => {
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

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognitionRef.current.start();
  };

  const stopRecognition = () => {
    if (recognitionActive && recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
      setRecognitionActive(false);
    }
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  useEffect(() => {
    if (recognitionActive) {
      startRecognition();
    }
    return () => {
      if (recognitionActive) {
        stopRecognition();
      }
      recognitionRef.current = null;
    };
  }, [recognitionActive, language]);

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
