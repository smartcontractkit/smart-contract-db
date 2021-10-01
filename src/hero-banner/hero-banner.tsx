import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import theme from 'src/theme';

const useStyles = makeStyles({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: '3.75rem',
  },
  bannerBackground: {
    display: 'flex',
    height: '22.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${'/img/hero-banner.svg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '1.75rem',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    color: '#1F2529',
    fontWeight: 'bold',
    fontSize: '3.25rem',
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '2.375rem',
    },
  },
  titlePart1: {
    lineHeight: 1,
  },
  description: {
    color: '#4D545C',
    width: '55%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

// TODO: tweak for tablet/mobile screens
export const HeroBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.bannerBackground}>
        <div className={classes.overlay}>
          <Typography className={classes.title}>
            <span className={classes.titlePart1}>Learn about</span> <span>Smart Contracts.</span>
          </Typography>
          <Typography className={classes.description}>
            Everything you’ve ever wanted to know about smart contracts, crypto and more. Created by the community, for
            the community.
          </Typography>
        </div>
      </div>
    </Container>
  );
};
