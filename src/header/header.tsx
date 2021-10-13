import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './header.module.css';
import Link from '../link';
import { Icon } from '../shared/icon';

const HamburgerMenu = dynamic(() => import('./hamburgerMenu').then((module) => module.HamburgerMenu));

export const Header: React.FC = () => {
  const [resourceTitle, setResourceTitle] = useState('');

  const updatedCategoryTitle = (e) => {
    setResourceTitle(e.detail.text);
  };

  useEffect(() => {
    window.addEventListener('category-page-updated', (e) => updatedCategoryTitle(e));
    return () => {
      window.removeEventListener('category-page-updated', updatedCategoryTitle);
    };
  }, [resourceTitle]);

  return (
    <header className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.webp" alt="Smart Contract DB logo" width="118" height="69" />
          </Link>
        </div>
        {/* hide depending on screen size */}
        <div className={styles.categoryTitle}>
          <b>{resourceTitle}</b>
        </div>
        {/* hide depending on screen size and show hamburger */}
        <div className={styles.contributeContainer}>
          <div className={styles.hamburgerMenu}>
            <HamburgerMenu />
          </div>
          <div className={styles.contribution}>
            <Link href="https://github.com/thisdot/smart-contract-db" className={styles.links}>
              <div className={styles.contribute}>Contribute at </div>
              <div className={styles.contributeLogo}>
                <Icon className={styles.github} name="github" size={27.42} />
              </div>
              <div className={styles.github}>GitHub</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
