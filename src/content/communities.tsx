import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { communities } from '@/data/resources/communities/communities';

export const Communities: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.communitiesHeading}>Communities</div>
      <CategoryList name="communities" data={communities} />
    </section>
  );
};
