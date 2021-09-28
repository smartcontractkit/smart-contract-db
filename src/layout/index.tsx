import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
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
          <Sidebar />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
