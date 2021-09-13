import React, { ReactElement } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';
import { HeroBanner } from '../src/hero-banner';

const Home: NextPage = (): ReactElement => {
  return <HeroBanner />;
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
