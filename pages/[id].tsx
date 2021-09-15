import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { CategoryList } from 'src/shared/category-list';
import { communities } from '@/data/resources/communities';
import { consultants } from '@/data/resources/consultants';
import { events } from '@/data/resources/events';
import { books } from '@/data/resources/education/books';
// import { tutorials } from '@/data/resources/education/tutorials';
import { courses } from '@/data/resources/education/courses';
import { workshops } from '@/data/resources/education/workshops';
import { trainers } from '@/data/resources/education/trainers';
import { schools } from '@/data/resources/education/schools';
import { ides } from '@/data/resources/tools/ides';
import { frameworks } from '@/data/resources/tools/frameworks';
import { libraries } from '@/data/resources/tools/libraries';

const useStyles = makeStyles({
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
  { title: 'Books', data: books },
  // { title: 'Tutorials', data: tutorials },
  { title: 'Courses', data: courses },
  { title: 'Workshops', data: workshops },
  { title: 'Trainers', data: trainers },
  { title: 'Schools', data: schools },
  { title: 'Frameworks', data: frameworks },
  { title: 'IDEs', data: ides },
  { title: 'Libraries', data: libraries },
];

export default function Resources(resource): ReactElement {
  const classes = useStyles();
  console.log(resource);
  return (
    <>
      <Typography className={classes.heading}>{resource.id}</Typography>
      <CategoryList data={resource.resourse} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<any> => {
  const { id } = params;
  let resourse;

  homePageBody.forEach((item) => {
    if (item.title.toLowerCase() === id) {
      resourse = item.data;
    }
  });

  console.log({ resourse });
  return {
    props: { resourse, id },
  };
};
