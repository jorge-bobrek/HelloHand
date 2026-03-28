import { CardGrid, type GridItem } from '@/shared/ui';

const MODES: GridItem[] = [
  { id: 'classic', icon: '📚', title: 'Clásico', description: 'A tu ritmo.' },
  { id: 'timed', icon: '⚡', title: 'Contrarreloj', description: '¡Corre!', disabled: true }
];

export const ModeSelector = ({ onSelect, selectedMode }: any) => (
  <CardGrid 
    items={MODES} 
    selectedIds={selectedMode ? [selectedMode] : []} 
    onSelect={onSelect}
    cardWidth = '240px'
  />
);