import React from 'react';
import { languages, type LanguageKey } from '@/entities/word';
import { CardGrid, type GridItem } from '@/shared/ui/CardGrid/CardGrid';
import styles from './LanguageSelector.module.css';

interface LanguageSelectorProps {
  selectedLangs: LanguageKey[];
  onToggleLang: (key: LanguageKey) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  selectedLangs, 
  onToggleLang 
}) => {
  const languageItems: GridItem[] = (Object.keys(languages) as LanguageKey[]).map((key) => ({
    id: key,
    icon: languages[key].flag,
    title: languages[key].name,
  }));

  return (
      <section className={styles.content}>
        <CardGrid 
          items={languageItems}
          selectedIds={selectedLangs}
          onSelect={(id) => onToggleLang(id as LanguageKey)}
        />
      </section>
  );
};