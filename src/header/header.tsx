import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../link';

const useStyles = makeStyles({
  grid: {
    alignItems: 'center',
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
  categoryTitle: {
    fontSize: '1.5rem',
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  const [resourceTitle, setResourceTitle] = useState('');

  const updatedCategoryTitle = (e: Event) => {
    setResourceTitle(e.detail?.text); // fix ts issue
  };

  useEffect(() => {
    window.addEventListener('categoryPage-updated', (e) => updatedCategoryTitle(e));
    return () => {
      window.removeEventListener('categoryPage-updated', updatedCategoryTitle);
    };
  }, [resourceTitle]);

  return (
    <header>
      <Grid container spacing={10} className={classes.grid}>
        <Grid item xs={2}>
          <Link href="/" onClick={() => setResourceTitle('')}>
            <img src="/img/logo.svg" alt="chainlink logo" />
          </Link>
        </Grid>
        <Grid item xs={2} className={classes.categoryTitle}>
          <b>{resourceTitle}</b>
        </Grid>
        <Grid item xs={8} className={classes.contributeContainer}>
          <a
            href="https://github.com/thisdot/chainlink-developer-ecosystem"
            rel="noopener noreferrer"
            className={classes.links}
          >
            <span className={classes.contribute}>Contribute at </span>
            <span className={classes.contributeLogo}>
              <GitHubIcon /> <b>GitHub</b>
            </span>
          </a>
        </Grid>
      </Grid>
    </header>
  );
};
