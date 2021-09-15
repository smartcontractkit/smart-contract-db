import { Container, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { CategoryList } from 'src/shared/category-list';
import { communities } from '@/data/resources/communities';
import { consultants } from '@/data/resources/consultants';
import { events } from '@/data/resources/events';
import { books } from '@/data/resources/education/books';
import { tutorials } from '@/data/resources/education/tutorials';
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

interface ResourceBody {
  id: string;
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

const resourceBody: ResourceBody[] = [
  { id: 'communities', title: 'Communities', data: communities },
  { id: 'consultants', title: 'Consultants', data: consultants },
  { id: 'events', title: 'Events', data: events },
  { id: 'books', title: 'Books', data: books },
  { id: 'tutorials', title: 'Tutorials', data: tutorials },
  { id: 'courses', title: 'Courses', data: courses },
  { id: 'workshops', title: 'Workshops', data: workshops },
  { id: 'trainers', title: 'Trainers', data: trainers },
  { id: 'schools', title: 'Schools', data: schools },
  { id: 'frameworks', title: 'Frameworks', data: frameworks },
  { id: 'ides', title: 'IDEs', data: ides },
  { id: 'libraries', title: 'Libraries', data: libraries },
];

export default function Resources({ resource, title }: { resource: Data; title: string }): ReactElement {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.heading}>{title}</Typography>
      <CategoryList data={resource} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  // Get the paths we want to pre-render based on posts
  const paths = resourceBody.map((item) => ({
    params: { id: item.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params;
  let resource;
  let title;
  resourceBody.forEach((item) => {
    if (item.id === id) {
      resource = item.data;
      title = item.title;
    }
  });

  return {
    props: { resource, title },
  };
};
