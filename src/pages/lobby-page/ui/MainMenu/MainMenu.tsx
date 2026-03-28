import React from 'react';
import { Button } from '@/shared/ui';
import styles from './MainMenu.module.css';
import logo from '@/shared/assets/hellohand.png';

export const MainMenu: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        <img src={logo} alt="Hello Hand Logo" className={styles.logo} />
        <h1 className={styles.gameTitle}>HELLO HAND</h1>
      </div>

      <div className={styles.actions}>
        <Button variant="disabled" isReady>
          INSTRUCCIONES
        </Button>
      </div>
    </div>
  );
};