/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import { glossary } from '@/data/resources/glossary/glossary';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  heading: {
    fontSize: '1.5rem',
    textAlign: 'left',
    fontWeight: 'bold',
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
  },
  disabledLinks: {
    textAlign: 'center',
    color: '#95A1AD',
    padding: '0.625rem',
  },
  firstId: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingBottom: '2rem',
  },
  id: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  title: {
    fontSize: '1.125rem',
  },
  description: {
    fontSize: '1rem',
    color: '#78838F',
    paddingTop: '0.55rem',
  },
  list: {
    padding: 0,
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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = () => {
    const element = document.querySelector('#__next > div > header') as HTMLElement;
    const text = document.querySelector('#__next > div > main > div > ul') as HTMLElement;
    if (text !== null) {
      const textList = text.children as unknown as HTMLElement;

      for (let i = 0; i < text.children.length; i += 1) {
        const header = element.offsetTop;
        const elementHeight = textList[i].offsetTop;

        if (elementHeight < header) {
          textList[i].style.opacity = '0.3';
        } else {
          textList[i].style.opacity = '1';
        }
      }
    }
  };

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('category-page-updated', {
        bubbles: true,
        detail: { text: 'Glossary' },
      })
    );

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const listItemClass = (index: number) => (index ? classes.id : classes.firstId);

  return (
    <div className={classes.container}>
      <List className={classes.list}>
        {isMatch ? <Typography className={classes.heading}>Glossary</Typography> : null}
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
                <Grid item xs={3} className={classes.disabledLinks}>
                  {index.id}
                </Grid>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index.id}>
              <Grid item xs={3} className={classes.enabledlinks}>
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
