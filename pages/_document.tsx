import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />

          <meta content="/favicons/mstile-70x70.png" name="msapplication-square70x70" />
          <meta content="/favicons/mstile-144x144.png" name="msapplication-square144x144" />
          <meta content="/favicons/mstile-150x150.png" name="msapplication-square150x150" />
          <meta content="/favicons/mstile-310x150.png" name="msapplication-wide310x150" />
          <meta content="/favicons/mstile-310x310.png" name="msapplication-square310x310" />

          <meta property="twitter:title" content="Smart Contract DB" />
          <meta property="twitter:url" content="https://smartcontractdb.com/" />
          <meta property="twitter:image" content="https://smartcontractdb.com/img/meta-banner.png" />
          <meta name="twitter:card" content="summary_large_image" />

          <link href="/favicons/apple-touch-icon-192x192.png" rel="apple-touch-icon" sizes="192x192" />
          <link href="/favicons/apple-touch-icon-512x512.png" rel="icon" sizes="512x512" type="image/png" />

          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

          <link rel="preload" href="/fonts/CircularStd/CircularStd-Medium.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Bold.ttf" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles)],
  };
};
