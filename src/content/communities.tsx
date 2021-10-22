import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { ventureCapitalFunds } from '@/data/resources/communities/venture-capital-funds';
import { grantPrograms } from '@/data/resources/communities/grant-programs';
import { incubatorsAccelerators } from '@/data/resources/communities/incubators-accelerators';
import { developer } from '@/data/resources/communities/developer';
import { enterprise } from '@/data/resources/communities/enterprise';

export const Communities: React.FC = () => {
  const communities = [
    ...ventureCapitalFunds,
    ...grantPrograms,
    ...incubatorsAccelerators,
    ...developer,
    ...enterprise,
  ];
  return (
    <section className={styles.section}>
      <div className={styles.communitiesHeading}>Communities</div>
      <CategoryList name="communities" data={communities} />
    </section>
  );
};