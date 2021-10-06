import React from 'react';
import styles from './contribute.module.css';

export const ContributeBanner: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.bannerBackground}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>Help us to be better</div>
            <div className={styles.description}>
              Create a PR if you see mistakes, room for improvement, or new opportunities to help dev team..
            </div>
          </div>
          <a href="https://github.com/thisdot/smart-contract-db" rel="noopener noreferrer" className={styles.links}>
            <button type="button" className={styles.button}>
              Contribute
              <img
                src="/img\contribute\hangloose.svg"
                alt="hangloose hand sign"
                className={styles.emoji}
                width="32"
                height="17"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
