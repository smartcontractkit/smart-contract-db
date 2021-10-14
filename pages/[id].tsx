import React, { ReactElement, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CategoryList } from 'src/shared/category-list';
import styles from '../styles/slug.module.css';
import { communities } from '@/data/resources/communities';
import { consultants } from '@/data/resources/consultants';
import { events } from '@/data/resources/events';
import { books } from '@/data/resources/education/books';
import { tutorials } from '@/data/resources/education/tutorials';
import { courses } from '@/data/resources/education/courses';
import { workshops } from '@/data/resources/education/workshops';
import { trainers } from '@/data/resources/education/trainers';
import { schools } from '@/data/resources/education/schools';
import { blockchains } from '@/data/resources/tools/blockchains';
import { ides } from '@/data/resources/tools/ides';
import { frameworks } from '@/data/resources/tools/frameworks';
import { libraries } from '@/data/resources/tools/libraries';
import { exchanges } from '@/data/resources/tools/exchanges';
import { languages } from '@/data/resources/tools/languages';
import { validators } from '@/data/resources/tools/validators';
import { wallets } from '@/data/resources/tools/wallets';
import { test } from '@/data/resources/tools/test';
import { deploy } from '@/data/resources/tools/deploy';
import { monitoring } from '@/data/resources/tools/monitoring';
import { administration } from '@/data/resources/tools/administration';
import { security } from '@/data/resources/tools/security';

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
  const { data: resource, title } = resourceBody.find((item) => item.id === id);

  return {
    props: { resource, title },
  };
};
