import React, { useState, useEffect } from 'react';
import { Header, Button, ProgressBar } from '@/shared/ui';
import { useMatchLogic } from '@/features/match-logic';
import { WordCard, languages, generateGameLayout } from '@/entities/word';
import type { Word, LanguageKey } from '@/entities/word';
import styles from './GamePage.module.css';

interface GamePageProps {
  wordDatabase: Word[];
  selectedLangs: LanguageKey[];
  onExit: () => void;
  onFinish: () => void;
}

export const GamePage: React.FC<GamePageProps> = ({ wordDatabase, selectedLangs, onExit, onFinish }) => {
  const [deck, setDeck] = useState<Word[]>(wordDatabase);
  const [currentTarget, setCurrentTarget] = useState<Word | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [columnLayout, setColumnLayout] = useState<Record<string, Word[]>>({});
  
  const { progress, wrongCard, checkMatch, resetProgress } = useMatchLogic(selectedLangs);

  useEffect(() => {
    const { initialDeck, columnLayout: newLayout } = generateGameLayout(wordDatabase, selectedLangs);
    
    setDeck(initialDeck);
    setCurrentTarget(initialDeck[0]);
    setColumnLayout(newLayout);
    resetProgress(selectedLangs);
  }, []);

  const handleCardClick = (id: number, lang: LanguageKey) => {
    if (!currentTarget) return;

    const { isCorrect, isWordComplete } = checkMatch(id, lang, currentTarget);

    if (isCorrect && isWordComplete) {
      setTimeout(() => {
        const newMatched = [...matchedIds, currentTarget.id];
        setMatchedIds(newMatched);
        
        const remainingDeck = deck.filter(w => w.id !== currentTarget.id);
        setDeck(remainingDeck);
        
        if (remainingDeck.length > 0) {
          setCurrentTarget(remainingDeck[0]);
          resetProgress(selectedLangs);
        } else {
          setCurrentTarget(null);
          onFinish();
        }
      }, 600);
    }
  };

  const totalWords = wordDatabase.length;
  const currentIdx = totalWords - deck.length + (currentTarget ? 1 : 0);
  const percentage = (currentTarget || deck.length < totalWords) ? (currentIdx / totalWords) * 100 : 0;

return (
    <div className={styles.page}>
      <Header
        left={
          <Button variant="secondary" onClick={onExit}>← SALIR</Button>
        }
        center={
          <ProgressBar 
            progress={percentage} 
            label={currentTarget ? `Palabra ${currentIdx} de ${totalWords}` : '¡Completado!'} 
          />
        }
      />

      <main className={styles.scrollableMain}>
        <div className={styles.board}>
          {selectedLangs.map(lang => (
            <div key={lang} className={styles.column}>
              <div className={styles.flagHeader}>{languages[lang].flag}</div>
              
              {(columnLayout[lang] || []).map(word => {
                const translation = word.translations[lang];
                if (!translation) return null;

                let status: 'normal' | 'correct' | 'wrong' | 'hidden' = 'normal';
                if (matchedIds.includes(word.id)) status = 'hidden';
                else if (progress[lang] && currentTarget?.id === word.id) status = 'correct';
                else if (wrongCard?.id === word.id && wrongCard.lang === lang) status = 'wrong';

                return (
                  <WordCard 
                    key={word.id}
                    word={translation}
                    status={status}
                    onClick={() => handleCardClick(word.id, lang)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </main>

      {currentTarget && (
        <section className={styles.deckArea}>
          <div className={styles.targetCard}>
             <span className={styles.targetLabel}>ESPAÑOL</span>
             <h3 className={styles.targetText}>{currentTarget.es}</h3>
          </div>
        </section>
      )}
    </div>
  );
};