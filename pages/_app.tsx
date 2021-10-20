import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { IntlErrorCode, NextIntlProvider } from 'next-intl';
import Head from 'next/head';
import Layout from '../src/layout';
import '../styles/globals.css';

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
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  // 1. Copy the following JavaScript and paste it as close to the opening <head> tag as possible on every page of the website:

  // <!-- Google Tag Manager -->
  // <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  // })(window,document,'script','dataLayer','GTM-5J5DL65');</script>
  // <!-- End Google Tag Manager -->

  // 2. Copy the following snippet and paste it immediately after the opening <body> tag on every page of the website:

  // <!-- Google Tag Manager (noscript) -->
  // <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J5DL65"
  // height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  // <!-- End Google Tag Manager (noscript) -->

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-5J5DL65');</script> */}
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
