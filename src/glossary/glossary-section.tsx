/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { glossary } from '@/data/resources/glossary/glossary';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  grid: {
    textAlign: 'right',
    maxHeight: '25vh',
    paddingTop: '1rem',
  },
  links: {
    textDecoration: 'none',
    color: 'inherit',
  },
  disabledLinks: {
    color: '#95A1AD',
  },
  id: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  title: {
    fontSize: '1.125rem',
  },
  description: {
    fontSize: '1rem',
    color: '#78838F',
    paddingTop: '0.55rem',
  },
  listItem: {
    display: 'block',
  },
});

const glossaryNav = [
  { id: '#', disabled: false },
  { id: 'A', disabled: false },
  { id: 'B', disabled: false },
  { id: 'C', disabled: false },
  { id: 'D', disabled: false },
  { id: 'E', disabled: false },
  { id: 'F', disabled: false },
  { id: 'G', disabled: false },
  { id: 'H', disabled: false },
  { id: 'I', disabled: false },
  { id: 'J', disabled: true },
  { id: 'K', disabled: true },
  { id: 'L', disabled: true },
  { id: 'M', disabled: false },
  { id: 'N', disabled: false },
  { id: 'O', disabled: true },
  { id: 'P', disabled: false },
  { id: 'Q', disabled: true },
  { id: 'R', disabled: false },
  { id: 'S', disabled: false },
  { id: 'T', disabled: false },
  { id: 'U', disabled: true },
  { id: 'V', disabled: true },
  { id: 'W', disabled: false },
  { id: 'X', disabled: true },
  { id: 'Y', disabled: true },
  { id: 'Z', disabled: true },
];

// TODO: make mobile friendly
export const GlossaryList: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('category-page-updated', {
        bubbles: true,
        detail: { text: 'Glossary' },
      })
    );
  });

  return (
    <div className={classes.container}>
      <List>
        {glossary.map((glossaryItem) => (
          <React.Fragment key={Object.keys(glossaryItem)[0]}>
            <ListItem alignItems="flex-start" className={classes.id}>
              <ListItemText
                disableTypography
                id={Object.keys(glossaryItem)[0]}
                primary={Object.keys(glossaryItem)[0]}
              />
            </ListItem>
            {Object.values(glossaryItem)[0].map(({ title, description }) => (
              <React.Fragment key={title}>
                <ListItem className={classes.listItem}>
                  <div className={classes.title}>{title}</div>
                  <div className={classes.description}>{description}</div>
                </ListItem>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </List>

      <Grid container className={classes.grid}>
        {glossaryNav.map((index) => {
          if (index.disabled === true) {
            return (
              <React.Fragment key={index.id}>
                <Grid item xs={3} className={classes.disabledLinks}>
                  {index.id}
                </Grid>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index.id}>
              <Grid item xs={3}>
                <a href={`#${index.id}`} className={classes.links}>
                  {index.id}
                </a>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
};
