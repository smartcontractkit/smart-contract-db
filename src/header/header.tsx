import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../link';

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
    '&:hover': {
      color: '#0AA6E5',
    },
  },
  logo: {
    paddingLeft: '1.75rem !important',
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <Link href="/" className={classes.logo}>
        <img src="/img/logo.svg" alt="chainlink logo" />
      </Link>
      <div>
        <Link href="https://github.com/thisdot/chainlink-developer-ecosystem" underline="none">
          <span className={classes.contribute}>Contribute at </span>
          <span className={classes.contributeLogo}>
            <GitHubIcon /> <b>GitHub</b>
          </span>
        </Link>
      </div>
    </header>
  );
};
