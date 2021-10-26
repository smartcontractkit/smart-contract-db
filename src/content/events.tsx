import React from 'react';
import { CategoryList } from 'src/shared/category-list';
import styles from './content.module.css';
import { Event, events } from '@/data/resources/events';

export const isDatePast = (startDate: string, endDate: string) =>
  new Date(startDate).setHours(0, 0, 0, 0) <= new Date(endDate).setHours(0, 0, 0, 0);

export const Events: React.FC = () => {
  const ongoingEvents = events.filter(({ startDate, endDate }: Event) => !isDatePast(startDate, endDate));

  return (
    <section className={styles.section}>
      <div className={styles.heading}>Events</div>
      <CategoryList name="events" data={ongoingEvents} limit={5} />
    </section>
  );
};
