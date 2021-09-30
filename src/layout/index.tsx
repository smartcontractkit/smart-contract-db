import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Header } from '../header';
import { Sidebar } from '../sidebar';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1.5rem',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-start',
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/CircularStd/CircularStd-Medium.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/CircularStd/CircularStd-Bold.ttf" as="font" crossOrigin="" />
      </Head>

      <div className={classes.container}>
        <Header />
        <main className={classes.main}>
          {/* hide depending on screen size */}
          {!isMatch ? <Sidebar /> : null}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
