import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { frameworks } from '@/data/resources/tools/frameworks';

export const Frameworks: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Frameworks</div>
      <CategoryList data={frameworks} />
    </section>
  );
};
