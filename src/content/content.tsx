import React from 'react';
import { Typography } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { CategoryList } from '../shared/category-list';
import { communities } from '@/data/resources/communities';
import { consultants } from '@/data/resources/consultants';
import { frameworks } from '@/data/resources/tools/frameworks';
import { events } from '@/data/resources/events';
import { ContributeBanner } from '../contribute-banner';

const useStyles = makeStyles({
  container: {
    paddingBottom: '10rem',
  },
  heading: {
    fontSize: '1.5rem',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: '4rem',
  },
});

interface HomePageBody {
  title: string;
  data: Data[];
}

type Data = {
  id: string;
  title: string;
  description: string;
  link: string;
  startDate?: Date | string;
  endDate?: Date | string;
  location?: string;
  src?: string;
};

const homePageBody: HomePageBody[] = [
  { title: 'Communities', data: communities },
  { title: 'Consultants', data: consultants },
  { title: 'Events', data: events },
  { title: 'Frameworks', data: frameworks },
];

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
    <Container className={classes.container}>
      {homePageBody.map((item) => {
        if (item.title === 'Events') {
          return (
            <React.Fragment key={item.title}>
              <ContributeBanner />
              <Typography className={classes.heading}>{item.title}</Typography>
              <CategoryList data={item.data} />
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={item.title}>
            <Typography className={classes.heading}>{item.title}</Typography>
            <CategoryList data={item.data} />
          </React.Fragment>
        );
      })}
    </Container>
  );
};
