import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bannerBackground: {
    display: 'flex',
    height: '30vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${'/img/hero-banner.svg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1F2529',
    fontWeight: 'bold',
    fontSize: '3.25rem',
    width: '75%',
  },
  description: {
    color: '#4D545C',
    width: '55%',
  },
});

// TODO: tweak for tablet/mobile screens
export const HeroBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.bannerBackground}>
      <div className={classes.overlay}>
        <Typography className={classes.title}>Learn about</Typography>
        <Typography className={classes.title}>Smart Contracts.</Typography>
        <Typography className={classes.description}>
          Everything you’ve ever wanted to know about smart contracts, crypto and more. Created by the community, for the community.
        </Typography>
      </div>
    </Container>
  );
};
