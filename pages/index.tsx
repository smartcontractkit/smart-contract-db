import React, { ReactElement } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';
import { Content } from '../src/content';

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <Content />
    </>
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
