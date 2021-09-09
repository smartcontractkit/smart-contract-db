import React, { ReactElement } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlErrorCode, NextIntlProvider } from 'next-intl';

function onError(error) {
  if (process.env.NODE_ENV !== 'production') {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      console.warn(error);
    } else {
      console.error(error);
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
  return (
    <NextIntlProvider messages={pageProps.messages} onError={onError} getMessageFallback={getMessageFallback}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
export default MyApp;
