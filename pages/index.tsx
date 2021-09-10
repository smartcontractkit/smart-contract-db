import React, { ReactElement } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';
import Layout from '../src/layout';
import { Sidebar } from '../src/sidebar';
import { HeroBanner } from '../src/hero-banner';

const Home: NextPage = (): ReactElement => {
  return (
    <Layout>
      <Sidebar />
      <HeroBanner />
    </Layout>
  );
};

export default Home;

export function getStaticProps({ locale }: GetStaticPropsContext): any {
  return {
    props: {
      /* eslint-disable global-require */
      /* eslint-disable import/no-dynamic-require */
      messages: require(`../locales/${locale}.json`),
    },
  };
}
