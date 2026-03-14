export interface PlayerPower {
  id: string;
  name: string;
  type: 'shield' | 'double_points' | 'freeze';
  quantity: number;
}

export interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
  level: number;
  experience: number;
  stats: {
    wins: number;
    totalMatches: number;
    highestScore: number;
  };
}