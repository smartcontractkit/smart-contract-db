import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Link from '../link';
import { HamburgerMenu } from './hamburgerMenu';

const useStyles = makeStyles({
  section: {
    position: 'sticky',
    top: 0,
    paddingLeft: '2rem',
  },
  smSection: {
    paddingLeft: 0,
  },
  grid: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  contributeContainer: {
    textAlign: 'right',
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
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  const [resourceTitle, setResourceTitle] = useState('');

  const updatedCategoryTitle = (e) => {
    setResourceTitle(e.detail.text);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

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
            <img src="/img/logo.svg" alt="Smart Contract DB logo" />
          </Link>
        </Grid>
        {/* hide depending on screen size */}
        <Grid item className={classes.categoryTitle}>
          {!isMatch ? <b>{resourceTitle}</b> : null}
        </Grid>
        {/* hide depending on screen size and show hamburger */}
        <Grid item xs={3} className={classes.contributeContainer}>
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
