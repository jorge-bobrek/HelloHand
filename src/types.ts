export interface WordData {
  w: string;
  p: string;
}

export interface Word {
  id: number;
  es: string;
  zh?: WordData;
  it?: WordData;
  de?: WordData;
  ja?: WordData;
  ar?: WordData;
  pt?: WordData;
  en?: WordData;
  fr?: WordData;
}

export type LanguageKey = 'zh' | 'it' | 'de' | 'ja' | 'ar' | 'pt' | 'en' | 'fr';

export interface LanguageInfo {
  name: string;
  flag: string;
}