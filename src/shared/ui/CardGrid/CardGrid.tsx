import React from 'react';
import { Card } from '../Card/Card';
import styles from './CardGrid.module.css';

export interface GridItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  disabled?: boolean;
}

interface CardGridProps {
  items: GridItem[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  maxWidth?: string;
  cardWidth?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({ 
  items, 
  selectedIds, 
  onSelect,
  maxWidth = '800px',
  cardWidth = '180px'
}) => {
  return (
    <section className={styles.content}>
      <div 
        className={styles.grid}
        style={{ 
          '--max-w': maxWidth,
          '--card-w': cardWidth
        } as React.CSSProperties}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            status={
              item.disabled 
                ? 'disabled' 
                : selectedIds.includes(item.id) ? 'selected' : 'normal'
            }
            onClick={() => !item.disabled && onSelect(item.id)}
          >
            <div className={styles.verticalContent}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.text}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.description && <p className={styles.desc}>{item.description}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};