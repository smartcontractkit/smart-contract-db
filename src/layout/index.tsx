import React from 'react';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import theme from 'src/theme';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1.5rem',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
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
