import type { LanguageKey, LanguageInfo } from './types';

export const languages: Record<LanguageKey, LanguageInfo> = {
  zh: { name: "Chino", flag: "🇨🇳" },
  it: { name: "Italiano", flag: "🇮🇹" },
  de: { name: "Alemán", flag: "🇩🇪" },
  ja: { name: "Japonés", flag: "🇯🇵" },
  ar: { name: "Árabe", flag: "🇸🇦" },
  pt: { name: "Portugués", flag: "🇧🇷" },
  en: { name: "Inglés", flag: "🇺🇸" },
  fr: { name: "Francés", flag: "🇫🇷" }
};