import React from 'react';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '2.5rem',
  },
  contribute: {
    color: '#95a1ad',
  },
  contributeLogo: {
    color: '#25292e',
  },
  logo: {
    paddingLeft: '1.75rem !important',
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <img src="/img/logo/logo.svg" alt="chainlink logo" />
      </div>
      <div>
        <Link href="https://github.com/thisdot/chainlink-developer-ecosystem">
          <span className={classes.contribute}>Contribute at </span>
          <span className={classes.contributeLogo}>
            <GitHubIcon /> <b>GitHub</b>
          </span>
        </Link>
      </div>
    </header>
  );
};
