import type { Word, LanguageKey } from '../model/types';

export const shuffleArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const generateGameLayout = (database: Word[], langs: LanguageKey[]) => {
  const initialDeck = shuffleArray(database);
  
  const columnLayout: Record<string, Word[]> = {};
  langs.forEach(lang => {
    columnLayout[lang] = shuffleArray(database);
  });

  return { 
    initialDeck, 
    columnLayout 
  };
};