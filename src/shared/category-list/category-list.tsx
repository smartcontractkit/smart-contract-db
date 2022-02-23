/* eslint-disable no-nested-ternary */
import React from 'react';
import styles from './category-list.module.css';
import { Icon } from '../icon';
import { Initicon } from '../initicon';
import Link from '../../link';

const isDatePast = (endDate: string): boolean =>
  new Date(endDate).setHours(0, 0, 0, 0) <= new Date(Date.now()).setHours(0, 0, 0, 0);

export interface CategoryListProps {
  name?: string; // category's name
  data;
  limit?: number;
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

const ListItem = (id, title, src, startDate, description, link) => {
  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);

  return (
    <li key={id} className={styles.listItem}>
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
  );
};

export const CategoryList: React.FC<CategoryListProps> = ({ name, data, limit }) => {
  const filteredData = data.filter(({ endDate }) => !isDatePast(endDate));

  if (filteredData.length <= 0) {
    return <h1>No new {name.toLocaleLowerCase() || 'content'}. Please check back soon.</h1>;
  }

  if (name?.toLocaleLowerCase() === 'communities') {
    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
          {filteredData.map(({ tag, data: communities }) => (
            <React.Fragment key={tag}>
              <h3 className={styles.community_subHeaders}>{tag}</h3>
              <li className={styles.hr} />
              {communities
                .slice(0, limit)
                .map(({ id, title, src, startDate, description, link }, communityItemIndex) => (
                  <React.Fragment key={id}>
                    {ListItem(id, title, src, startDate, description, link)}
                    {communities.length !== communityItemIndex + 1 && limit !== communityItemIndex + 1 ? (
                      <li className={styles.hr} />
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {filteredData.slice(0, limit).map(({ id, title, src, startDate, description, link }, index: number) => (
          <React.Fragment key={id}>
            {ListItem(id, title, src, startDate, description, link)}
            {filteredData.length !== index + 1 && limit !== index + 1 ? <li className={styles.hr} /> : ''}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
