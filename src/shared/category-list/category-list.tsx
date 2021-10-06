import React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';
import styles from './category-list.module.css';
import { Icon } from '../icon';
import { Initicon } from '../initicon';

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
  if (data.length === 0) {
    return (
      <Container>
        <Typography>Coming soon...</Typography>
      </Container>
    );
  }

  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);

  const ListItemIconText = ({ title }) => (
    <>
      <Icon className="list-item-arrow-icon" name="long-arrow-up" size={12} />
      <span className="list-item-title">{title}</span>
    </>
  );

  return (
    <List className={styles.container}>
      {data.map(({ id, title, src, startDate, description, link }, index: number) => (
        <React.Fragment key={id}>
          <li className={styles.listItem}>
            <ListItem className={styles.link} component="a" rel="noopener noreferrer" href={link}>
              <ListItemAvatar className={styles.avatarContainer}>
                {src ? (
                  <Avatar className={styles.avatar} alt={title} src={src} variant="square" />
                ) : (
                  <Initicon size={88} text={title} seed={identiconSeedMax(9)} single={false} />
                )}
              </ListItemAvatar>
              {startDate !== undefined ? (
                <div>
                  <ListItemText primary={<ListItemIconText title={title} />} />
                  <ListItemText className={styles.subTitle} disableTypography secondary={dateFormatter(startDate)} />
                  <ListItemText secondary={description} />
                </div>
              ) : (
                <ListItemText primary={<ListItemIconText title={title} />} secondary={<>{description}</>} />
              )}
            </ListItem>
          </li>
          {data.length === index + 1 ? '' : <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};
