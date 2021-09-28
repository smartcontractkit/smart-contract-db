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
import Initicon from 'react-initicon';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: 0,
  },
  title: {
    color: '#1F2529',
  },
  subTitle: {
    color: '#0A5480',
    paddingBottom: '0.75rem',
    margin: 0,
  },
  listItem: {
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
  },
  avatarContainer: {
    marginRight: '1.5rem',
  },
  avatar: { width: '88px', height: '88px' },
  links: {
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

  const isPastDue = (date: string) => new Date(date).getTime() < Date.now();

  return (
    <List className={classes.container}>
      {data.map(({ id, title, src, startDate, endDate, description, link }, index: number) => (
        <React.Fragment key={id}>
          {isPastDue(endDate) ? (
            ''
          ) : (
            <>
              <li className={classes.listItem}>
                <ListItem className={classes.links} component="a" rel="noopener noreferrer" href={link}>
                  <ListItemAvatar className={classes.avatarContainer}>
                    {src ? (
                      <Avatar className={classes.avatar} alt={title} src={src} variant="square" />
                    ) : (
                      <Initicon size={88} text={title} seed={identiconSeedMax(9)} single={false} />
                    )}
                  </ListItemAvatar>
                  {startDate !== undefined ? (
                    <div>
                      <ListItemText className={classes.title} primary={title} />
                      <ListItemText
                        className={classes.subTitle}
                        disableTypography
                        secondary={dateFormatter(startDate)}
                      />
                      <ListItemText secondary={description} />
                    </div>
                  ) : (
                    <ListItemText primary={title} secondary={<>{description}</>} />
                  )}
                </ListItem>
              </li>
              {data.length === index + 1 ? '' : <Divider component="li" />}
            </>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
