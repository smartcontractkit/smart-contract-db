import React from 'react';
import { Typography } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { CategoryList } from '../shared/category-list';
import { communities } from '@/data/resources/communities';
import { consultants } from '@/data/resources/consultants';
import { frameworks } from '@/data/resources/tools/frameworks';
import { events } from '@/data/resources/events';
import { HeroBanner } from '../hero-banner';
import { ContributeBanner } from '../contribute-banner';

const useStyles = makeStyles({
  heading: {
    fontSize: '1.5rem',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: '4rem',
  },
});

/*
 * TODO:
 * look into react-dom.development.js:67 Warning:
 * Prop `className` did not match. Server: "MuiBox-root MuiBox-root-17" Client: "MuiBox-root MuiBox-root-18"
 *
 * For now use useStyles heading instead of box and typography variant h5
 */
export const Content: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <HeroBanner />

      <Typography className={classes.heading}>Communities</Typography>
      <CategoryList data={communities} />

      <Typography className={classes.heading}>Consultants</Typography>
      <CategoryList data={consultants} />

      <ContributeBanner />

      <Typography className={classes.heading}>Events</Typography>
      <CategoryList data={events} />

      <Typography className={classes.heading}>Frameworks</Typography>
      <CategoryList data={frameworks} />
    </div>
  );
};
