import React, { ReactElement, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CategoryList } from 'src/shared/category-list';
import styles from '../styles/slug.module.css';
import { communities } from '@/data/resources/communities';
import consultants from '@/data/resources/consultants.json';
import events from '@/data/resources/events.json';
import books from '@/data/resources/education/books.json';
import tutorials from '@/data/resources/education/tutorials.json';
import courses from '@/data/resources/education/courses.json';
import workshops from '@/data/resources/education/workshops.json';
import trainers from '@/data/resources/education/trainers.json';
import schools from '@/data/resources/education/schools.json';
import blockchains from '@/data/resources/tools/blockchain.json';
import ides from '@/data/resources/tools/ides.json';
import frameworks from '@/data/resources/tools/frameworks.json';
import libraries from '@/data/resources/tools/libraries.json';
import exchanges from '@/data/resources/tools/exchanges.json';
import languages from '@/data/resources/tools/languages.json';
import validators from '@/data/resources/tools/validators.json';
import wallets from '@/data/resources/tools/wallets.json';
import test from '@/data/resources/tools/tests.json';
import deploy from '@/data/resources/tools/deploy.json';
import monitoring from '@/data/resources/tools/monitoring.json';
import administration from '@/data/resources/tools/administration.json';
import security from '@/data/resources/tools/security.json';
import { Resource, TaggedResource } from '@/data/resources/models/resource.model';
import { isDatePast } from '@/data/resources';

interface ResourceBody {
  id: string;
  title: string;
  data: Resource[] | TaggedResource[];
}

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

export default function Resources({ resources, title }: { resources: Resource[]; title: string }): ReactElement {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('category-page-updated', {
        bubbles: true,
        detail: { text: title },
      })
    );
  }, [title]);

  let data = resources;
  if (title === 'Events') {
    data = resources.filter(({ startDate, endDate }) => !isDatePast(startDate, endDate));
  }

  return (
    <section className={styles.section}>
      {/* hide depending on screen size */}
      <div className={styles.heading}>{title}</div>
      <CategoryList name={title} data={data} />
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
  const { data: resources, title } = resourceBody.find((item) => item.id === id);

  return {
    props: { resources, title },
  };
};
