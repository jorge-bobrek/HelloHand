import React from 'react';

interface CardProps {
  word: string;
  phonetic: string;
  status: 'normal' | 'correct' | 'wrong' | 'hidden';
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ word, phonetic, status, onClick }) => {
  return (
    <div className={`card ${status}`} onClick={onClick}>
      <b className="word">{word}</b>
      <br />
      <small className="phonetic" style={{ opacity: 0.6 }}>{phonetic}</small>
    </div>
  );
};

export default Card;