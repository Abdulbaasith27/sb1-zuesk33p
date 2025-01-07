// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-219N3H3651';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'event',
      eventAction: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    });
  }
};