import React, { ReactElement, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CategoryList } from 'src/shared/category-list';
import styles from '../styles/slug.module.css';
import { communities } from '@/data/resources/communities/communities';
import * as consultants from '@/data/resources/consultants.json';
import * as events from '@/data/resources/events.json';
import * as books from '@/data/resources/education/books.json';
import * as tutorials from '@/data/resources/education/tutorials.json';
import * as courses from '@/data/resources/education/courses.json';
import * as workshops from '@/data/resources/education/workshops.json';
import * as trainers from '@/data/resources/education/trainers.json';
import * as schools from '@/data/resources/education/schools.json';
import * as blockchains from '@/data/resources/tools/blockchain.json';
import * as ides from '@/data/resources/tools/ides.json';
import * as frameworks from '@/data/resources/tools/frameworks.json';
import * as libraries from '@/data/resources/tools/libraries.json';
import * as exchanges from '@/data/resources/tools/exchanges.json';
import * as languages from '@/data/resources/tools/languages.json';
import * as validators from '@/data/resources/tools/validators.json';
import * as wallets from '@/data/resources/tools/wallets.json';
import * as test from '@/data/resources/tools/tests.json';
import * as deploy from '@/data/resources/tools/deploy.json';
import * as monitoring from '@/data/resources/tools/monitoring.json';
import * as administration from '@/data/resources/tools/administration.json';
import * as security from '@/data/resources/tools/security.json';

interface ResourceBody {
  id: string;
  title: string;
  data: Data[][] | Data[];
}

type Data = {
  tag?: string;
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
  { id: 'blockchains', title: 'Blockchains', data: blockchains },
  { id: 'ides', title: 'IDEs', data: ides },
  { id: 'libraries', title: 'Libraries', data: libraries },
  { id: 'exchanges', title: 'Exchanges', data: exchanges },
  { id: 'languages', title: 'Languages', data: languages },
  { id: 'validators', title: 'Validators', data: validators },
  { id: 'wallets', title: 'Wallets', data: wallets },
  { id: 'test', title: 'Test', data: test },
  { id: 'deploy', title: 'Deploy', data: deploy },
  { id: 'monitoring', title: 'Monitoring', data: monitoring },
  { id: 'administration', title: 'Administration', data: administration },
  { id: 'security', title: 'Security', data: security },
];

export default function Resources({ resource, title }: { resource: Data; title: string }): ReactElement {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('category-page-updated', {
        bubbles: true,
        detail: { text: title },
      })
    );
  }, [title]);
  return (
    <section className={styles.section}>
      {/* hide depending on screen size */}
      <div className={styles.heading}>{title}</div>
      <CategoryList name={title} data={resource} />
    </section>
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
  // eslint-disable-next-line prefer-const
  let { data: resource, title } = resourceBody.find((item) => item.id === id);

  if (id !== 'communities') {
    resource = Object.values(resource[0]);
  }
  return {
    props: { resource, title },
  };
};
