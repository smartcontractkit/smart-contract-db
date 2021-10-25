// log the pageview with their URL
export const pageView = (url: string): void => {
  window.gtag('config', 'GTM-5J5DL65', {
    page_path: url,
  });
};
