import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    paddingTop: '4rem',
  },
  bannerBackground: {
    display: 'flex',
    maxHeight: '27vh',
    maxWidth: '100vw',
    backgroundImage: `url(${'/img/contribute-banner.svg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2.5rem',
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
  },
  button: {
    backgroundColor: '#0AA6E5',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  emoji: {
    paddingLeft: '1rem',
  },
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
          <Button variant="contained" className={classes.button}>
            Contribute
            <span role="img" aria-label="hang loose hand sign" className={classes.emoji}>
              🤙
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};
