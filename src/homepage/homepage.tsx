import React from 'react';
import { Communities, Consultants, Events, Frameworks } from 'src/content';
import { HeroBanner } from 'src/hero-banner';
import { ContributeBanner } from '../contribute-banner';
import styles from './homepage.module.css';

export const Homepage: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <Communities />
      <Consultants />
      <ContributeBanner />
      <Events />
      <Frameworks />
    </div>
  );
};
