import React from 'react';
import { Communities } from 'src/content';
import { HeroBanner } from 'src/hero-banner';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import styles from './homepage.module.css';

const Consultants = dynamic(() => import('src/content').then((module) => module.Consultants));
const Events = dynamic(() => import('src/content').then((module) => module.Events));
const ContributeBanner = dynamic(() => import('src/contribute-banner').then((module) => module.ContributeBanner));
const Frameworks = dynamic(() => import('src/content').then((module) => module.Frameworks));

export const Homepage: React.FC = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  return (
    <div className={styles.container}>
      <HeroBanner />
      <Communities />
      <div ref={observe}>
        {inView && (
          <>
            <Consultants /> <ContributeBanner /> <Events /> <Frameworks />
          </>
        )}
      </div>
    </div>
  );
};
