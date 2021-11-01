import React, { ReactElement } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';
import { Homepage } from '../src/homepage';

const Home: NextPage = (): ReactElement => {
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default Home;

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      /* eslint-disable global-require */
      /* eslint-disable import/no-dynamic-require */
      messages: require(`../locales/${locale}.json`),
    },
  };
}
