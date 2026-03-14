import React from 'react';
import { Card } from '@/shared/ui';
import type { LanguageInfo } from '../model/types';

interface LanguageCardProps {
  language: LanguageInfo;
  isSelected: boolean;
  onClick: () => void;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ language, isSelected, onClick }) => {
  return (
    <Card 
      status={isSelected ? 'selected' : 'normal'} 
      onClick={onClick}
    >
      <span style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{language.flag}</span>
      <span style={{ fontWeight: 'bold', color: '#475569' }}>{language.name}</span>
    </Card>
  );
};