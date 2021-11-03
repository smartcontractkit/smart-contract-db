import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BootstrapTooltip } from 'src/shared/tooltip';
import { Search } from 'src/search';
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
        <h1 className={styles.logo}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.webp" alt="Smart Contract DB logo" width="118" height="69" />
          </Link>
        </h1>
        {/* hide depending on screen size */}
        <h2 className={styles.categoryTitle}>
          <b>{resourceTitle}</b>
        </h2>
        <div className={styles.searchButton}>
          <Search />
        </div>
        {/* hide depending on screen size and show hamburger */}
        <div className={styles.contributeContainer}>
          <div className={styles.hamburgerMenu}>
            <HamburgerMenu />
          </div>
          <div className={styles.contribution}>
            <Link href="https://github.com/smartcontractkit/smart-contract-db" className={styles.contribute_logo}>
              {/* TODO: fix bootstrap now that it's not a button */}
              <BootstrapTooltip title="Contribute at GitHub">
                <>
                  <Icon aria-hidden="true" className={styles.github} name="github" size={20} />
                  <span className="sr-only">Contribute at GitHub</span>
                </>
              </BootstrapTooltip>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
