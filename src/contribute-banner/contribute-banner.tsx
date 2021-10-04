import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import theme from 'src/theme';
// import { NextLinkComposed } from '../link';

const useStyles = makeStyles({
  card: {
    paddingBottom: '4rem',
  },
  bannerBackground: {
    display: 'flex',
    backgroundImage: `url(${'/img/contribute-banner.svg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '2.5rem',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  title: {
    color: '#25292E',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
  description: {
    color: '#78838F',
  },
  text: {
    textAlign: 'left',
    marginRight: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      paddingBottom: '1.5rem',
      margin: 0,
    },
  },
  button: {
    backgroundColor: '#0AA6E5',
    color: '#FFFFFF',
    fontSize: '1rem',
    borderRadius: '2rem',
    padding: '0.5rem 2rem 0.5rem 2rem',
    textTransform: 'none',
  },
  emoji: {
    paddingLeft: '1rem',
  },
  links: { textDecoration: 'none' },
});

// TODO: tweak for tablet/mobile screens
export const ContributeBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Container className={classes.bannerBackground}>
        <div className={classes.overlay}>
          <div className={classes.text}>
            <Typography className={classes.title}>Help us to be better</Typography>
            <Typography className={classes.description}>
              Create a PR if you see mistakes, room for improvement, or new opportunities to help dev team..
            </Typography>
          </div>
          <a href="https://github.com/thisdot/smart-contract-db" rel="noopener noreferrer" className={classes.links}>
            <Button className={classes.button}>
              Contribute
              <img
                src="/img/hangloose.svg"
                alt="hangloose hand sign"
                className={classes.emoji}
                width="16"
                height="17"
              />
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
};
