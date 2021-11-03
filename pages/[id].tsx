import React, { ReactElement, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CategoryList } from 'src/shared/category-list';
import styles from '../styles/slug.module.css';
import { Resource } from '@/data/resources/models/resource.model';
import { resourceParams } from '@/data/resources';

export default function Resources({ resources, title }: { resources: Resource[]; title: string }): ReactElement {
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
      <CategoryList name={title} data={resources} />
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  // Get the paths we want to pre-render based on posts
  const paths = resourceParams.map((item) => ({
    params: { id: item.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params;
  const { data: resources, title } = resourceParams.find((item) => item.id === id);

  return {
    props: { resources, title },
  };
};
