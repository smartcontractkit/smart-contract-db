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
  searchGrid: {
    textAlign: 'right',
    maxHeight: '25vh',
    paddingTop: '0.875rem',
    position: 'sticky',
    top: '123px',
  },
  link: {
    color: '#000000de',
    textDecoration: 'none',
  },
  enabledlinks: {
    textAlign: 'center',
    padding: '0.625rem',
    flexGrow: 0,
    flexBasis: '18%',
  },
  disabledLinks: {
    textAlign: 'center',
    color: '#95A1AD',
    padding: '0.625rem',
    flexGrow: 0,
    flexBasis: '18%',
  },
  firstId: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0 0 2rem 0',
  },
  id: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0 0 2rem 0',
  },
  title: {
    fontSize: '1.125rem',
    paddingBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    color: '#78838F',
  },
  list: {
    padding: 0,
    maxWidth: '29.25rem',
    marginRight: '80px',
  },
  listItem: {
    display: 'block',
    padding: '0 0 2rem 0',
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

  const listItemClass = (index: number) => (index ? classes.id : classes.firstId);

  return (
    <div className={classes.container}>
      <List className={classes.list}>
        {glossary.map((glossaryItem, index) => (
          <React.Fragment key={Object.keys(glossaryItem)[0]}>
            <ListItem alignItems="flex-start" className={listItemClass(index)}>
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

      <Grid container className={classes.searchGrid}>
        {glossaryNav.map((index) => {
          if (index.disabled === true) {
            return (
              <React.Fragment key={index.id}>
                <Grid item className={classes.disabledLinks}>
                  {index.id}
                </Grid>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index.id}>
              <Grid item className={classes.enabledlinks}>
                <a className={classes.link} href={`#${index.id}`}>
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
