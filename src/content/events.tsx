import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { events } from '@/data/resources/events';

export const Events: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Events</div>
      <CategoryList data={events} />
    </section>
  );
};
