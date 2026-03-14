import React, { useEffect } from 'react';
import { Header, Container, Button } from '@/shared/ui';
import { audioPlayer } from '@/shared/lib';
import styles from './VictoryPage.module.css';
import confetti from 'canvas-confetti';

interface VictoryPageProps {
  onPlayAgain: () => void;
  onExit: () => void;
  score?: number;
}

export const VictoryPage: React.FC<VictoryPageProps> = ({ onPlayAgain, onExit, score }) => {
  
  useEffect(() => {
    if (audioPlayer && audioPlayer.victory) {
        audioPlayer.victory();
    }
    
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: [
        '#6366f1', 
        '#10b981', 
        '#f59e0b'
      ]
    });
  }, []);

  return (
    <div className={styles.page}>
      <Header
        center={
          <h1 className={styles.title}>¡FELICIDADES!</h1>
        }
      />

      <Container>
        <main className={styles.content}>
          <div className={styles.iconContainer}>
            <span role="img" aria-label="trofeo" className={styles.victoryIcon}>🏆</span>
          </div>
          
          <h2 className={styles.message}>¡Has completado todas las palabras!</h2>
          
          {score !== undefined && (
            <p className={styles.score}>Puntuación final: <strong>{score}</strong></p>
          )}

          <div className={styles.actions}>
            <Button onClick={onPlayAgain}>
              Jugar de Nuevo
            </Button>
            <Button variant="secondary" onClick={onExit}>
              Salir al Inicio
            </Button>
          </div>
        </main>
      </Container>
    </div>
  );
};