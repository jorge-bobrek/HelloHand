import React from 'react';
import { languages } from '../data/database';
import type { LanguageKey } from '../types';

interface SetupProps {
  selectedLangs: LanguageKey[];
  onToggleLang: (lang: LanguageKey) => void;
  onStart: () => void;
}

const SetupScreen: React.FC<SetupProps> = ({ selectedLangs, onToggleLang, onStart }) => {
  return (
    <div id="game-screen">
        <div id="setup-screen">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', marginTop: '20px' }}>Hello Hand</h1>
        <p>Elige los idiomas para la partida:</p>
        <div className="lang-grid">
            {(Object.keys(languages) as LanguageKey[]).map((key) => {
            const lang = languages[key];
            const isSelected = selectedLangs.includes(key);
            return (
                <button
                key={key}
                className={`lang-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => onToggleLang(key)}
                >
                <span className="flag-large">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
                </button>
            );
            })}
        </div>
        <button 
            id="start-btn" 
            className={selectedLangs.length > 0 ? 'ready' : ''} 
            onClick={onStart}
        >
            ¡Empezar Juego!
        </button>
        </div>
        
        <footer className="footer-copyright">
            &copy; 2026 Hello Hand. Todos los derechos reservados.
        </footer>
    </div>
  );
};

export default SetupScreen;