import React from 'react';
import { Card } from '@/shared/ui';
import type { WordData } from '../model/types';

interface WordCardProps {
  word: WordData;
  status: 'normal' | 'correct' | 'wrong' | 'hidden';
  onClick: () => void;
}

export const WordCard: React.FC<WordCardProps> = ({ word, status, onClick }) => {
  return (
    <Card status={status} onClick={onClick}>
      <b className="word-text">{word.w}</b>
      <br />
      <small className="phonetic-text" style={{ opacity: 0.6 }}>{word.p}</small>
    </Card>
  );
};