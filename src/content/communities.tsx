import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { communities } from '@/data/resources/communities';

export const Communities: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Communities</div>
      <CategoryList data={communities} />
    </section>
  );
};
