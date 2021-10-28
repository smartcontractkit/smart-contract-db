import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import * as consultants from '@/data/resources/consultants.json';

export const Consultants: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Consultants</div>
      <CategoryList data={consultants[0]} limit={5} />
    </section>
  );
};
