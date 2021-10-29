// log the pageview with their URL
export const pageView = (url: string): void => {
  window.gtag('config', 'UA-128878871-18', {
    page_path: url,
  });
};
