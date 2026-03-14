import { useState } from 'react';
import { GamePage } from '@/pages/game-page';
import { HomePage } from '@/pages/home-page';
import { wordDatabase } from '@/entities/word';
import type { LanguageKey } from '@/entities/word';
import './index.css';

function App() {
  const [view, setView] = useState<'home' | 'game'>('home');
  const [selectedLangs, setSelectedLangs] = useState<LanguageKey[]>([]);

  const handleStart = (langs: LanguageKey[]) => {
    setSelectedLangs(langs);
    setView('game');
  };

  return (
    <div className="app">
      {view === 'home' ? (
        <HomePage onStart={handleStart} />
      ) : (
        <GamePage 
          wordDatabase={wordDatabase} 
          selectedLangs={selectedLangs} 
          onExit={() => setView('home')} 
        />
      )}
    </div>
  );
}

export default App;