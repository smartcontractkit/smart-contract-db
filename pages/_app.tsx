import React, { ReactElement, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { IntlErrorCode, NextIntlProvider } from 'next-intl';
import Head from 'next/head';
import TagManager from 'react-gtm-module';
import Layout from '../src/layout';
import '../styles/globals.css';

const tagManagerArgs = {
  gtmId: 'GTM-5J5DL65',
};

function onError(error) {
  if (process.env.NODE_ENV !== 'production') {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      console.warn(error); // eslint-disable-line no-console
    } else {
      console.error(error); // eslint-disable-line no-console
    }
  }
}

function getMessageFallback({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join('.');

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }
  return `Fix translation message at: ${path}`;
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <NextIntlProvider messages={pageProps.messages} onError={onError} getMessageFallback={getMessageFallback}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
