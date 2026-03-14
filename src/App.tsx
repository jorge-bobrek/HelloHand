import { useState } from 'react';
import { HomePage } from '@/pages/home-page';
import { GamePage } from '@/pages/game-page';
import { VictoryPage } from '@/pages/victory-page';
import { wordDatabase, type LanguageKey } from '@/entities/word';

type AppView = 'home' | 'game' | 'victory';

function App() {
  const [view, setView] = useState<AppView>('home');
  const [selectedLangs, setSelectedLangs] = useState<LanguageKey[]>([]);

  const handleStartGame = (langs: LanguageKey[]) => {
    setSelectedLangs(langs);
    setView('game');
  };

  const handleGameFinished = () => {
    setView('victory');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="app">
      {view === 'home' && (
        <HomePage onStart={handleStartGame} />
      )}
      
      {view === 'game' && (
        <GamePage 
          wordDatabase={wordDatabase} 
          selectedLangs={selectedLangs} 
          onExit={() => setView('home')}
          onFinish={handleGameFinished}
        />
      )}

      {view === 'victory' && (
        <VictoryPage 
          onPlayAgain={() => setView('game')}
          onExit={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;