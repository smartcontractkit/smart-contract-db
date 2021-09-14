import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
    },
    inline: {
      display: 'inline',
    },
  })
);

export interface CategoryListProps {
  data; // TODO: combine types
}

export const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <List className={classes.container}>
      {data.map(({ id, title, src, startDate, description }, index) => (
        <React.Fragment key={id}>
          <ListItem alignItems="flex-start">
            {src !== undefined ? (
              <ListItemAvatar>
                <Avatar alt={title} src={src} />
              </ListItemAvatar>
            ) : null}

            <ListItemText
              primary={title}
              secondary={
                <>
                  {startDate}
                  <br />
                  {description}
                </>
              }
            />
          </ListItem>
          {data.length === index + 1 ? '' : <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};
