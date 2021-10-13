import React from 'react';
import styles from './category-list.module.css';
import { Icon } from '../icon';
import { Initicon } from '../initicon';
import Link from '../../link';

export interface CategoryListProps {
  data; // TODO: combine types
}

function dateFormatter(date: string): string {
  let dateFormat = null;
  const newDate: Date = new Date(date);

  if (newDate.getHours() > 0) {
    dateFormat = {
      hour: 'numeric',
      minute: 'numeric',
    };
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    ...dateFormat,
  }).format(newDate);
}

export const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);

  return (
    <div className={styles.container}>
      {data.map(({ id, title, src, startDate, description, link }, index: number) => (
        <React.Fragment key={id}>
          <ul className={styles.ul}>
            <li className={styles.listItem}>
              <Link className={styles.link} rel="noopener noreferrer" href={link}>
                <div className={styles.avatarContainer}>
                  {src ? (
                    <div className={styles.avatar}>
                      <img alt={title} src={src} width="88" height="88" />
                    </div>
                  ) : (
                    <Initicon size={88} text={title} seed={identiconSeedMax(9)} single={false} />
                  )}
                </div>
                {startDate !== undefined ? (
                  <div>
                    <div className={styles.title}>
                      <Icon className={styles.listItemArrowIcon} name="long-arrow-up" size={12} />
                      <span className={styles.listItemTitle}>{title}</span>
                    </div>
                    <div className={styles.subTitle}>{dateFormatter(startDate)}</div>
                    <div className={styles.listItemText}>{description}</div>
                  </div>
                ) : (
                  <div>
                    <div className={styles.title}>
                      <Icon className={styles.listItemArrowIcon} name="long-arrow-up" size={12} />
                      <span className={styles.listItemTitle}>{title}</span>
                    </div>
                    <div className={styles.listItemText}>{description}</div>
                  </div>
                )}
              </Link>
            </li>
          </ul>
          {data.length === index + 1 ? (
            ''
          ) : (
            <ul className={styles.ul}>
              <li className={styles.hr} />
            </ul>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
