import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    alignItems: 'center',
    paddingBottom: '2.5rem',
  },
  contributeContainer: {
    textAlign: 'right',
  },
  contribute: {
    color: '#95a1ad',
  },
  contributeLogo: {
    color: '#25292e',
  },
  logo: {
    textAlign: 'left',
    paddingLeft: '1.75rem !important',
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6} className={classes.logo}>
          <img src="/img/logo/logo.svg" alt="chainlink logo" />
        </Grid>
        <Grid item xs={6} className={classes.contributeContainer}>
          <Link href="https://github.com/thisdot/chainlink-developer-ecosystem">
            <span className={classes.contribute}>Contribute at </span>
            <span className={classes.contributeLogo}>
              <GitHubIcon /> <b>GitHub</b>
            </span>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
};
