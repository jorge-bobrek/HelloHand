import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  status?: 'normal' | 'correct' | 'wrong' | 'hidden' | 'selected'; 
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, status = 'normal', onClick, className }) => {
  return (
    <div 
      className={`${styles.card} ${styles[status]} ${className || ''}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};