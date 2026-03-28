import React from 'react';
import styles from './Layout.module.css';

export const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <p className={styles.copyright}>
        &copy; Desarrollado por Jorge Bobrek.
      </p>
      <footer className={styles.footer}>
        {children}
      </footer>
    </div>
  );
};