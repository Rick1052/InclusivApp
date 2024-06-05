import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextReader = ({ text }) => {
  const { speak, cancel } = useSpeechSynthesis();

  const handleMouseOver = () => {
    speak({ text });
  };

  const handleMouseOut = () => {
    cancel();
  };

  return (
    <div 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{ cursor: 'pointer' }}
    >
      {text}
    </div>
  );
};

export default TextReader;