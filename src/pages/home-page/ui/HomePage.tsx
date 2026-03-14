import React, { useState } from 'react';
import { Header, Container, Button } from '@/shared/ui';
import { languages, LanguageCard } from '@/entities/word';
import type { LanguageKey } from '@/entities/word';
import styles from './HomePage.module.css';

interface HomePageProps {
  onStart: (langs: LanguageKey[]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [selected, setSelected] = useState<LanguageKey[]>([]);

  const toggleLang = (key: LanguageKey) => {
    setSelected(prev => 
      prev.includes(key) ? prev.filter(l => l !== key) : [...prev, key]
    );
  };

  return (
    <div className={styles.page}>
      <Header
        center={
          <h1 className={styles.title}>Hello Hand</h1>
        }
      />

      <main className={styles.scrollableMain}>
        <Container>
          <section className={styles.content}>
            <p className={styles.subtitle}>Selecciona los idiomas para practicar:</p>
            
            <div className={styles.grid}>
              {(Object.keys(languages) as LanguageKey[]).map((key) => {
                const lang = languages[key];
                const isSelected = selected.includes(key);
                
                return (
                  <LanguageCard
                    key={key} language={lang} isSelected={isSelected}
                    onClick={() => toggleLang(key)}
                  />
                );
              })}
            </div>
          </section>
        </Container>
      </main>

      <section className={styles.footerArea}>
        <Button 
          disabled={selected.length === 0}
          isReady={selected.length > 0}
          onClick={() => onStart(selected)}
          style={{ width: '100%', maxWidth: '400px' }}
        >
          ¡Empezar Juego!
        </Button>
      </section>
    </div>
  );
};