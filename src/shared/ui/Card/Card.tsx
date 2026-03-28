import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  status?: 'normal' | 'correct' | 'wrong' | 'hidden' | 'selected' | 'disabled';
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, status = 'normal', onClick, className }) => {
  const handleClick = () => {
    if (status !== 'disabled' && onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`${styles.card} ${styles[status]} ${className || ''}`} 
      onClick={handleClick}
    >
      {children}
    </div>
  );
};