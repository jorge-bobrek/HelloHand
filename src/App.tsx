import { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import Card from './components/Card';
import { wordDatabase, languages } from './data/database';
import type { Word, LanguageKey } from './types';
import './App.css';
import './index.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLangs, setSelectedLangs] = useState<LanguageKey[]>([]);
  const [deck, setDeck] = useState<Word[]>([]);
  const [currentTarget, setCurrentTarget] = useState<Word | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [wrongCard, setWrongCard] = useState<{ id: number; lang: string } | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [columnLayout, setColumnLayout] = useState<Record<string, Word[]>>({});

  // Lógica de inicio
  const handleStart = () => {
    // Mezclar el mazo inicial
    const initialDeck = [...wordDatabase].sort(() => Math.random() - 0.5);
    setDeck(initialDeck);
    drawCard(initialDeck);

    const newLayout: Record<string, Word[]> = {}
    selectedLangs.forEach(lang => {
      newLayout[lang] = [...wordDatabase].sort(() => Math.random() - 0.5);
    })
    setColumnLayout(newLayout);

    setGameStarted(true);
  };

  // Sacar una carta nueva
  const drawCard = (currentDeck: Word[]) => {
    if (currentDeck.length === 0) {
      setCurrentTarget(null); // Fin del juego
      return;
    }
    const next = currentDeck[Math.floor(Math.random() * currentDeck.length)];
    setCurrentTarget(next);
    
    const newProgress: Record<string, boolean> = {};
    selectedLangs.forEach(l => newProgress[l] = false);
    setProgress(newProgress);
  };

  // Click en una carta
  const handleCardClick = (id: number, lang: LanguageKey) => {
    if (!currentTarget) return;

    if (id === currentTarget.id) {
      const newProgress = { ...progress, [lang]: true };
      setProgress(newProgress);

      if (selectedLangs.every(l => newProgress[l])) {
        setTimeout(() => {
          const newDeck = deck.filter(d => d.id !== currentTarget.id);
          setMatchedIds(prev => [...prev, currentTarget.id]);
          setDeck(newDeck);
          drawCard(newDeck);
        }, 600);
      }
    } else {
      setWrongCard({ id, lang });
      setTimeout(() => setWrongCard(null), 500);
    }
  };

  const handleToggleLang = (lang: LanguageKey) => {
    setSelectedLangs(prev => 
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  if (!gameStarted) {
    return (
      <SetupScreen 
        selectedLangs={selectedLangs} 
        onToggleLang={handleToggleLang} 
        onStart={handleStart} 
      />
    );
  }

  // --- UI DEL JUEGO ---
  const currentIdx = wordDatabase.length - deck.length + 1;
  const isFinished = deck.length === 0;

  return (
    <div id="game-screen">
      <div className="game-header">
        <button onClick={() => window.location.reload()} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#64748b', fontSize: '0.8rem' }}>← SALIR</button>
        <div className="progress-container">
          <div className="progress-text">
            {isFinished ? '¡Completado!' : `Palabra ${currentIdx} de ${wordDatabase.length}`}
          </div>
          <div className="progress-bar-bg">
            <div id="progress-fill" style={{ width: `${isFinished ? 100 : (currentIdx / wordDatabase.length) * 100}%` }} />
          </div>
        </div>
        <div style={{ width: '45px' }}></div>
      </div>

      <div className="game-board" id="board">
        {selectedLangs.map(lang => (
          <div key={lang} className="column-container">
            <div className="column-header">{languages[lang].flag}</div>
            <div className="column">
              {(columnLayout[lang] || []).map(word => {
                const data = word[lang];
                if (!data) return null;

                let status: 'normal' | 'correct' | 'wrong' | 'hidden' = 'normal';
                if (matchedIds.includes(word.id)) status = 'hidden';
                else if (progress[lang] && currentTarget?.id === word.id) status = 'correct';
                else if (wrongCard?.id === word.id && wrongCard.lang === lang) status = 'wrong';

                return (
                  <Card 
                    key={word.id} 
                    word={data.w} 
                    phonetic={data.p} 
                    status={status} 
                    onClick={() => handleCardClick(word.id, lang)} 
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="deck-area">
        <div className="target-card">
          <div id="deck-target">{isFinished ? '🏆 ¡LISTO!' : currentTarget?.es}</div>
        </div>
      </div>
      
      <div className="footer-copyright">
        &copy; 2026 Hello Hand. Todos los derechos reservados.
      </div>
    </div>
  );
}

export default App;