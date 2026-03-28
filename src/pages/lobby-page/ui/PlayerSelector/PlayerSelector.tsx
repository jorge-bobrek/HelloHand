import { CardGrid, type GridItem } from '@/shared/ui';
import styles from './PlayerSelector.module.css';

export const PlayerSelector = ({ selectedType, playersCount, onSelect }: any) => {
  const PLAYER_OPTIONS: GridItem[] = [
    { id: 'solo', icon: '👤', title: 'Solo', description: 'Práctica individual' },
    { id: 'multi-local', icon: '👥', title: 'Local', description: 'Comparte dispositivo', disabled: true },
    { id: 'multi-online', icon: '🌐', title: 'Online', description: 'Dispositivos individuales', disabled: true }
  ];
  return (
    <div className={styles.container}>
      <CardGrid 
        items={PLAYER_OPTIONS} 
        selectedIds={selectedType ? [selectedType] : []} 
        onSelect={(id) => {
          if (id === 'solo') {
            onSelect('solo', 1);
          } else if (id === 'multi-local') {
            const newCount = playersCount < 2 ? 2 : playersCount;
            onSelect('multi-local', newCount);
          }
        }}
        cardWidth = '240px'
      />
        
      {selectedType === 'multi-local' && (
        <div className={styles.counterArea}>
        <p className={styles.counterLabel}>¿Cuántos jugadores son?</p>
        <div className={styles.counterControls}>
          <button 
              onClick={() => onSelect('multi-local', Math.max(2, playersCount - 1))}
              className={styles.counterBtn}
          >−</button>
          <span className={styles.countNumber}>{playersCount}</span>
          <button 
              onClick={() => onSelect('multi-local', Math.min(5, playersCount + 1))}
              className={styles.counterBtn}
          >+</button>
        </div>
      </div>
      )}
    </div>
  );
};