import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { resourceParams } from '@/data/resources';

export const Events: React.FC = () => {
  const { data } = resourceParams.find((item) => item.id === 'events');

  return (
    <section className={styles.section}>
      <div className={styles.heading}>Events</div>
      <CategoryList name="events" data={data} limit={5} />
    </section>
  );
};
