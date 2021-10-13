import React from 'react';
import styles from './category-list.module.css';
import { Icon } from '../icon';
import { Initicon } from '../initicon';
import Link from '../../link';
import { isDatePast } from 'src/content/events';

export interface CategoryListProps {
  name?: string; // category's name
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

export const CategoryList: React.FC<CategoryListProps> = ({ name, data }) => {
  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);
  const dataWithOngoingDates = data.filter(({ startDate, endDate }) => !isDatePast(startDate, endDate));

  return (
    <div className={styles.container}>
      {dataWithOngoingDates.length ? (
        <ul className={styles.ul}>
          {data.map(({ id, title, src, startDate, description, link }, index: number) => (
            <React.Fragment key={id}>
              <li className={styles.listItem}>
                <Link className={styles.link} rel="noopener noreferrer" href={link}>
                  <div className={styles.avatarContainer}>
                    {src ? (
                      <div className={styles.avatar}>
                        <img alt={title} src={src} width="88" height="" />
                      </div>
                    ) : (
                      <Initicon size={88} text={title} seed={identiconSeedMax(9)} single={false} />
                    )}
                  </div>
                  <div>
                    <div className={styles.title}>
                      <Icon className={styles.listItemArrowIcon} name="long-arrow-up" size={12} />
                      <span className={styles.listItemTitle}>{title}</span>
                    </div>
                    {startDate ? <div className={styles.subTitle}>{dateFormatter(startDate)}</div> : ''}
                    <div className={styles.listItemText}>{description}</div>
                  </div>
                </Link>
              </li>
              {data.length !== index + 1 ? <li className={styles.hr} /> : ''}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <h1>No new {name.toLocaleLowerCase() || 'content'}. Please check back soon.</h1>
      )}
    </div>
  );
};
