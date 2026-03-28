import { useState } from 'react';
import { LobbyPage } from '@/pages/lobby-page';
import { GamePage } from '@/pages/game-page';
import { VictoryPage } from '@/pages/victory-page';
import { wordDatabase } from '@/entities/word';
import type { GameConfig } from '@/entities/game';

type AppView = 'lobby' | 'game' | 'victory';

function App() {
  const [view, setView] = useState<AppView>('lobby');
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);

  const handleStartGame = (config: GameConfig) => {
    setGameConfig(config);
    setView('game');
  };

  return (
    <div className="app">
      {view === 'lobby' && (
        <LobbyPage onStartGame={handleStartGame} />
      )}
      
      {view === 'game' && gameConfig && (
        <GamePage 
          wordDatabase={wordDatabase} 
          selectedLangs={gameConfig.languages} 
          onExit={() => setView('lobby')}
          onFinish={() => setView('victory')}
        />
      )}

      {view === 'victory' && (
        <VictoryPage 
          onPlayAgain={() => setView('game')}
          onExit={() => setView('lobby')}
        />
      )}
    </div>
  );
}

export default App;