import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  isReady?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isReady, 
  className, 
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${isReady ? styles.ready : ''} ${className}`;
  
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};