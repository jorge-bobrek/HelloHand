import { useState, useCallback } from 'react';
import type { Word, LanguageKey } from '@/entities/word/';
import { audioPlayer } from '@/shared/lib';

interface MatchState {
  progress: Record<string, boolean>;
  wrongCard: { id: number; lang: string } | null;
}

export const useMatchLogic = (selectedLangs: LanguageKey[]) => {
  const [state, setState] = useState<MatchState>({
    progress: {},
    wrongCard: null,
  });

  const checkMatch = useCallback((
    clickedId: number, 
    clickedLang: string, 
    targetWord: Word
  ) => {
    if (clickedId === targetWord.id) {
      audioPlayer.success();

      const newProgress = { ...state.progress, [clickedLang]: true };
      
      setState(prev => ({ ...prev, progress: newProgress }));

      const isWordComplete = selectedLangs.every(lang => newProgress[lang]);
      
      return { isCorrect: true, isWordComplete };
    }
    audioPlayer.error();

    setState(prev => ({ ...prev, wrongCard: { id: clickedId, lang: clickedLang } }));
    setTimeout(() => setState(prev => ({ ...prev, wrongCard: null })), 500);
    
    return { isCorrect: false, isWordComplete: false };
  }, [state.progress, selectedLangs]);

  const resetProgress = (langs: LanguageKey[]) => {
    const initialProgress: Record<string, boolean> = {};
    langs.forEach(l => initialProgress[l] = false);
    setState({ progress: initialProgress, wrongCard: null });
  };

  return { ...state, checkMatch, resetProgress };
};