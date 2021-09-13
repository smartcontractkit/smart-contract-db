import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
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
      {data.map(({ id, title, src, description }, index) => (
        <>
          <ListItem key={id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={title} src={src} />
            </ListItemAvatar>
            <ListItemText primary={title} secondary={<>{description}</>} />
          </ListItem>
          {data.length === index + 1 ? '' : <Divider variant="inset" component="li" />}
        </>
      ))}
    </List>
  );
};
