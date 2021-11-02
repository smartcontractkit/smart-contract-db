import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import { Header } from '../header';
import { Sidebar } from '../sidebar';

const Layout: React.FC = ({ children }) => {
  const setOpacity = (e) => {
    const container = document.querySelector('#__next > div') as HTMLElement;
    container.style.opacity = e.detail ? '0.5' : '1';
  };

  useEffect(() => {
    window.addEventListener('hamburger-menu', (e) => setOpacity(e));
    return () => {
      window.removeEventListener('hamburger-menu', setOpacity);
    };
  });

  return (
    <>
      <Head>
        <title>Smart Contract DB</title>
        <meta name="description" content="Resources archive for all things crypto." />
        <link rel="preload" href="/fonts/CircularStd/CircularStd-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/CircularStd/CircularStd-Bold.ttf" as="font" crossOrigin="" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Sidebar />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
