import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { communities } from '@/data/resources/communities';

export const Communities: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.communitiesHeading}>Communities</h2>
      <CategoryList name="communities" data={communities} limit={3} />
    </section>
  );
};
