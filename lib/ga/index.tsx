// log the pageview with their URL
export const pageView = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};
