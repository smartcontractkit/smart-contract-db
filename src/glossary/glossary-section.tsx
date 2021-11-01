/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { glossary } from '@/data/resources/glossary/glossary';
import styles from './glossary-section.module.css';

const glossaryNav = [
  { id: '#', disabled: false },
  { id: 'A', disabled: false },
  { id: 'B', disabled: false },
  { id: 'C', disabled: false },
  { id: 'D', disabled: false },
  { id: 'E', disabled: false },
  { id: 'F', disabled: false },
  { id: 'G', disabled: false },
  { id: 'H', disabled: false },
  { id: 'I', disabled: false },
  { id: 'J', disabled: true },
  { id: 'K', disabled: true },
  { id: 'L', disabled: true },
  { id: 'M', disabled: false },
  { id: 'N', disabled: false },
  { id: 'O', disabled: true },
  { id: 'P', disabled: false },
  { id: 'Q', disabled: true },
  { id: 'R', disabled: false },
  { id: 'S', disabled: false },
  { id: 'T', disabled: false },
  { id: 'U', disabled: true },
  { id: 'V', disabled: true },
  { id: 'W', disabled: false },
  { id: 'X', disabled: true },
  { id: 'Y', disabled: true },
  { id: 'Z', disabled: true },
];

// TODO: make mobile friendly
export const GlossaryList: React.FC = () => {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('category-page-updated', {
        bubbles: true,
        detail: { text: 'Glossary' },
      })
    );
  });

  const listItemClass = (index: number) => (index ? styles.id : styles.firstId);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.heading}>Glossary</div>
        {glossary.map((glossaryItem, index) => (
          <React.Fragment key={Object.keys(glossaryItem)[0]}>
            <div className={listItemClass(index)}>
              <div className={styles.listItemText} id={Object.keys(glossaryItem)[0]}>
                {Object.keys(glossaryItem)[0]}
              </div>
            </div>
            {Object.values(glossaryItem)[0].map(({ title, description }) => (
              <React.Fragment key={title}>
                <div className={styles.listItem}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.description}>{description}</div>
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.searchGrid}>
        {glossaryNav.map((index) => {
          if (index.disabled === true) {
            return (
              <React.Fragment key={index.id}>
                <div className={styles.disabledLinks}>{index.id}</div>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index.id}>
              <div className={styles.enabledlinks}>
                <a className={styles.link} href={`#${index.id}`}>
                  {index.id}
                </a>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
