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
import Link from 'src/link';

const useStyles = makeStyles({
  title: {
    color: '#1F2529',
  },
  links: { textDecoration: 'none', color: '#1F2529' },
  container: {
    width: '100%',
    padding: 0,
  },
  events: {
    color: '#0A5480',
  },
});

export interface CategoryListProps {
  data; // TODO: combine types
}

function dateFormatter(date: string): string {
  const newDate: Date = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(newDate);
}

export const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const classes = useStyles();

  if (data.length === 0) {
    return (
      <Container>
        <Typography>Coming soon..</Typography>
      </Container>
    );
  }

  const identiconSeedMax = (max: number) => Math.floor(Math.random() * max);

  return (
    <List className={classes.container}>
      {data.map(({ id, title, src, startDate, description, link }, index: number) => (
        <React.Fragment key={id}>
          <ListItemLink href={link} rel="noopener noreferrer" className={classes.links}>
            <ListItemAvatar>
              {src ? (
                <Avatar alt={title} src={src} />
              ) : (
                <Initicon size={40} text={title} seed={identiconSeedMax(9)} single={false} />
              )}
            </ListItemAvatar>
            {startDate !== undefined ? (
              <div>
                <ListItemText primary={title} className={classes.title} />
                <ListItemText disableTypography secondary={dateFormatter(startDate)} className={classes.events} />
                <ListItemText secondary={description} />
              </div>
            ) : (
              <ListItemText className={classes.title} primary={title} secondary={<>{description}</>} />
            )}
          </ListItemLink>
          {data.length === index + 1 ? '' : <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

const ListItemLink = ({ children, ...props }) => {
  const { href, rel, className } = props;

  const CustomLink = (props) => <Link className={className} rel={rel} href={href} {...props} />;

  return (
    <li>
      <ListItem component={CustomLink}>{children}</ListItem>
    </li>
  );
};
