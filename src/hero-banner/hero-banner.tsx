import React from 'react';
import styles from './hero-banner.module.css';

export const HeroBanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerBackground}>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <span className={styles.titlePart1}>Learn about</span> <span>Smart Contracts.</span>
          </div>
          <div className={styles.description}>
            Everything you’ve ever wanted to know about smart contracts, crypto and more. Created by the community, for
            the community.
          </div>
        </div>
      </div>
    </div>
  );
};
