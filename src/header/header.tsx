import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import theme from 'src/theme';
import Link from '../link';
import { HamburgerMenu } from './hamburgerMenu';

const useStyles = makeStyles({
  section: {
    position: 'sticky',
    top: 0,
    paddingLeft: '2rem',
    minHeight: '5vh',
    background: '#FFFFFF',
    opacity: '0.8',
    zIndex: 1,
  },
  smSection: {
    position: 'sticky',
    top: 0,
    paddingLeft: 0,
    minHeight: '5vh',
    background: '#FFFFFF',
    opacity: '0.8',
    zIndex: 1,
  },
  grid: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'normal',
    },
  },
  contributeContainer: {
    textAlign: 'right',
    [theme.breakpoints.up('lg')]: {
      flexBasis: '25%',
    },
  },
  contribute: {
    color: '#95a1ad',
  },
  contributeLogo: {
    color: '#25292e',
    '&:hover': {
      color: '#0AA6E5',
    },
  },
  links: { textDecoration: 'none' },
  logo: {
    width: '10.25rem',
    textAlign: 'left',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    textAlign: 'left',
    flexBasis: '56%',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '45%',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '26%',
    },
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  const [resourceTitle, setResourceTitle] = useState('');

  const updatedCategoryTitle = (e) => {
    setResourceTitle(e.detail.text);
  };
  const themes = useTheme();
  const isMatch = useMediaQuery(themes.breakpoints.down('md'));

  useEffect(() => {
    window.addEventListener('category-page-updated', (e) => updatedCategoryTitle(e));
    return () => {
      window.removeEventListener('category-page-updated', updatedCategoryTitle);
    };
  }, [resourceTitle]);

  return (
    <header className={isMatch ? classes.smSection : classes.section}>
      <Grid container className={classes.grid}>
        <Grid item className={classes.logo}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.svg" alt="Smart Contract DB logo" width="118" height="69" />
          </Link>
        </Grid>
        {/* hide depending on screen size */}
        {!isMatch ? (
          <Grid item className={classes.categoryTitle}>
            <b>{resourceTitle}</b>
          </Grid>
        ) : null}
        {/* hide depending on screen size and show hamburger */}
        <Grid item className={classes.contributeContainer}>
          {isMatch ? (
            <HamburgerMenu />
          ) : (
            <a href="https://github.com/thisdot/smart-contract-db" rel="noopener noreferrer" className={classes.links}>
              <span className={classes.contribute}>Contribute at </span>
              <span className={classes.contributeLogo}>
                <GitHubIcon /> <b>GitHub</b>
              </span>
            </a>
          )}
        </Grid>
      </Grid>
    </header>
  );
};
