import type { LanguageKey } from "@/entities/word";

export type GameMode = 'classic' | 'timed' ;
export type PlayerType = 'solo' | 'multi-local' | 'multi-online';

export interface GameConfig {
  mode: GameMode;
  type: PlayerType;
  playersCount: number;
  languages: LanguageKey[];
}