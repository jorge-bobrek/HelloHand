import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.background}>
        <div 
          className={styles.fill} 
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};