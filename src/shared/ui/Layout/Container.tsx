import React from 'react';
import styles from './Layout.module.css';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};