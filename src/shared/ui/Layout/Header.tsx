import React from 'react';
import styles from './Layout.module.css';

type HeaderProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
   <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.left}>{left}</div>
      <div className={styles.center}>{center}</div>
      <div className={styles.right}>{right}</div>
    </div>
  </header>
  );
};