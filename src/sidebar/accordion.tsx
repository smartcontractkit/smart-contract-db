import React, { useState } from 'react';
import { Icon } from '../shared/icon';
import styles from './sidebar.module.css';
import Link from '../link';

export const Accordion: React.FC<any> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordionItem}>
      <button type="button" className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <li className={styles.root}>
          <div className={styles.sub_nav_heading}>{title}</div>
          {isActive ? (
            <div>
              <Icon className={styles.openChevron} name="chevron" />
            </div>
          ) : (
            <div>
              <Icon className={styles.chevron} name="chevron" />
            </div>
          )}
        </li>
      </button>
      {isActive &&
        content.map((childItem) => {
          return (
            <li key={childItem.title} className={styles.nested}>
              <Link href={childItem.path} className={styles.links} activeClassName={styles.activeLinks}>
                <Icon className={styles.bulletPoint} name="bullet-point" />
                <span>{childItem.title}</span>
              </Link>
            </li>
          );
        })}
    </div>
  );
};
