/* eslint-disable no-nested-ternary */
import React from 'react';
import { isDatePast } from 'src/content/events';
import styles from './category-list.module.css';
import { Icon } from '../icon';
import { Initicon } from '../initicon';
import Link from '../../link';
import { VentureCapital } from '@/data/resources/communities/venture-capital-funds';
import { GrantProgram } from '@/data/resources/communities/grant-programs';
import { IncubatorAccelerator } from '@/data/resources/communities/incubators-accelerators';
import { Developer } from '@/data/resources/communities/developer';
import { Enterprise } from '@/data/resources/communities/enterprise';

export interface CategoryListProps {
  name?: string; // category's name
  data; // TODO: combine types
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

const list = (id, title, src, startDate, description, link, identiconSeedMax) => {
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
  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);
  const dataWithOngoingDates = data.filter(({ startDate, endDate }) => !isDatePast(startDate, endDate));
  let communities: (VentureCapital | GrantProgram | IncubatorAccelerator | Developer | Enterprise)[];
  if (name?.toLocaleLowerCase() === 'communities') {
    communities = data;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {/* for communities */}
        {name?.toLocaleLowerCase() === 'communities' ? (
          communities.map((communityItem) => (
            <React.Fragment key={Object.keys(communityItem)[0]}>
              <div className={styles.communitySubHeaders}>{Object.keys(communityItem)}</div>{' '}
              <li className={styles.hr} />
              {Object.values(communityItem)[0]
                .slice(0, limit)
                .map(({ id, title, src, startDate, description, link }, communityItemIndex) => (
                  <React.Fragment key={id}>
                    {list(id, title, src, startDate, description, link, identiconSeedMax)}
                    {Object.values(communityItem)[0].length !== communityItemIndex + 1 &&
                    limit !== communityItemIndex + 1 ? (
                      <li className={styles.hr} />
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))
        ) : dataWithOngoingDates.length && name !== 'communities' ? (
          data.slice(0, limit).map(({ id, title, src, startDate, description, link }, index: number) => (
            <React.Fragment key={id}>
              {list(id, title, src, startDate, description, link, identiconSeedMax)}
              {data.length !== index + 1 && limit !== index + 1 ? <li className={styles.hr} /> : ''}
            </React.Fragment>
          ))
        ) : (
          <h1>No new {name.toLocaleLowerCase() || 'content'}. Please check back soon.</h1>
        )}
      </ul>
    </div>
  );
};
