import { useEffect } from 'react';
import { pageview, event } from '../utils/analytics';

export function useAnalytics() {
  useEffect(() => {
    // Track initial page view
    pageview(window.location.pathname + window.location.search);

    // Track when URL changes
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    // Listen for URL changes
    window.addEventListener('popstate', () => {
      handleRouteChange(window.location.pathname + window.location.search);
    });

    return () => {
      window.removeEventListener('popstate', () => {
        handleRouteChange(window.location.pathname + window.location.search);
      });
    };
  }, []);

  return { trackEvent: event };
}