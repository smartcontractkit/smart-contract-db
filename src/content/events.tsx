import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import events from '@/data/resources/events.json';
import { isDatePast } from '@/data/resources';

export const Events: React.FC = () => {
  const ongoingEvents = events.filter(({ startDate, endDate }) => !isDatePast(startDate, endDate));

  return (
    <section className={styles.section}>
      <div className={styles.heading}>Events</div>
      <CategoryList name="events" data={ongoingEvents} limit={5} />
    </section>
  );
};
