import React, { useState } from 'react';
import { Header, Container, Button, Footer } from '@/shared/ui';
import { MainMenu } from './MainMenu/MainMenu';
import { ModeSelector } from './ModeSelector/ModeSelector';
import { PlayerSelector } from './PlayerSelector/PlayerSelector';
import { LanguageSelector } from './LanguageSelector/LanguageSelector';
import type { GameConfig } from '@/entities/game';
import styles from './LobbyPage.module.css';
import type { LanguageKey } from '@/entities/word';

type LobbyStep = 'menu' | 'mode' | 'players' | 'languages';

interface LobbyPageProps {
  onStartGame: (config: GameConfig) => void;
}

export const LobbyPage: React.FC<LobbyPageProps> = ({ onStartGame }) => {
  const [step, setStep] = useState<LobbyStep>('menu');
  const [config, setConfig] = useState<Partial<GameConfig>>({
    mode: 'classic',
    type: 'solo',
    playersCount: 1,
    languages: []
  });

  const handleBack = () => {
    const steps: LobbyStep[] = ['menu', 'mode', 'players', 'languages'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) setStep(steps[currentIndex - 1]);
  };

  const handleModeChange = (mode: 'classic' | 'timed') => {
    setConfig(prev => ({ ...prev, mode }));
  };

  const handlePlayersChange = (type: 'solo' | 'multi-local', count: number) => {
  setConfig(prev => {
    const finalCount = (type === 'multi-local' && count < 2) ? 2 : count;
    
    return { 
      ...prev, 
      type, 
      playersCount: finalCount 
    };
  });
};

  const handleToggleLang = (key: LanguageKey) => {
    setConfig(prev => {
      const currentLangs = prev.languages || [];
      const newLangs = currentLangs.includes(key)
        ? currentLangs.filter(l => l !== key)
        : [...currentLangs, key];
      return { ...prev, languages: newLangs };
    });
  };
  
  const handleStart = () => {
    onStartGame(config as GameConfig);
  };

  return (
    <div className={styles.page}>
      <Header 
        left={step !== 'menu' && (
          <Button variant="secondary" onClick={handleBack}>← VOLVER</Button>
        )}
        center={<span className={styles.headerTitle}>
          {step === 'menu' ? 'HELLO HAND' : 'CONFIGURACIÓN'}
        </span>}
      />

      <main className={styles.scrollableMain}>
        <Container>
          <div key={step} className={styles.stepContainer}>
            
            {step === 'menu' && (
              <MainMenu/>
            )}

            {step === 'mode' && (
              <>
                <h2 className={styles.stepTitle}>¿Cómo quieres jugar?</h2>
                <ModeSelector 
                  onSelect={handleModeChange} 
                  selectedMode={config.mode} 
                />
              </>
            )}

            {step === 'players' && (
              <>
                <h2 className={styles.stepTitle}>¿Con quién juegas?</h2>
                <PlayerSelector 
                  onSelect={handlePlayersChange} 
                  selectedType={config.type} 
                  playersCount={config.playersCount} 
                />
              </>
            )}

            {step === 'languages' && (
              <>
                <h2 className={styles.stepTitle}>¿Qué idiomas practicarás?</h2>
                <LanguageSelector 
                  selectedLangs={config.languages || []}
                  onToggleLang={handleToggleLang}
                />
              </>
            )}
          </div>
        </Container>
      </main>
      
      {/* 2. Lógica dinámica del Footer */}
      <Footer>
        {step === 'menu' && (
          <Button variant="primary" isReady onClick={() => setStep('mode')}>
            Jugar
          </Button>
        )}

        {step === 'mode' && (
          <Button variant="primary" isReady onClick={() => setStep('players')}>
            Continuar
          </Button>
        )}

        {step === 'players' && (
          <Button variant="primary" isReady onClick={() => setStep('languages')}>
            Continuar
          </Button>
        )}

        {step === 'languages' && (
          <Button 
            variant="primary" 
            isReady={(config.languages?.length || 0) > 0}
            onClick={handleStart}
          >
            ¡INICIAR!
          </Button>
        )}
      </Footer>
    </div>
  );
};