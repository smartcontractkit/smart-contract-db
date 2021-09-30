import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Icon } from '../icon';
import { Initicon } from '../initicon';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: 0,
  },
  subTitle: {
    color: '#0A5480',
    paddingBottom: '0.75rem',
    margin: 0,
  },
  listItem: {
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    cursor: 'pointer',
    '&:hover': {
      background: '#F7F9FA',
    },
    '& .list-item-title': {
      display: 'inline-block',
      transition: 'transform 0.1s ease-out',
    },
    '&:hover .list-item-title': {
      transform: 'translate(0.75rem);',
    },
    '& .list-item-arrow-icon': {
      display: 'none',
    },
    '&:hover .list-item-arrow-icon': {
      display: 'inline-block',
    },
  },
  avatarContainer: {
    marginRight: '1.5rem',
  },
  avatar: { width: '88px', height: '88px' },
  link: {
    textDecoration: 'none',
    color: '#1F2529',
    padding: 0,
  },
});

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
  const classes = useStyles();

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
    <List className={classes.container}>
      {data.map(({ id, title, src, startDate, description, link }, index: number) => (
        <React.Fragment key={id}>
          <li className={classes.listItem}>
            <ListItem className={classes.link} component="a" rel="noopener noreferrer" href={link}>
              <ListItemAvatar className={classes.avatarContainer}>
                {src ? (
                  <Avatar className={classes.avatar} alt={title} src={src} variant="square" />
                ) : (
                  <Initicon size={88} text={title} seed={identiconSeedMax(9)} single={false} />
                )}
              </ListItemAvatar>
              {startDate !== undefined ? (
                <div>
                  <ListItemText primary={<ListItemIconText title={title} />} />
                  <ListItemText className={classes.subTitle} disableTypography secondary={dateFormatter(startDate)} />
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
