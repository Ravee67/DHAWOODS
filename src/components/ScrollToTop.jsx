import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Comprehensive scroll to top with multiple fallbacks
    const scrollToTop = () => {
      // Method 1: Modern scroll API
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } else {
        // Method 2: Traditional scroll
        window.scrollTo(0, 0);
      }

      // Method 3: Direct element scroll
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      // Method 4: Ensure no scroll restoration interferes
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    };

    console.log('🔝 Scrolling to top for route:', pathname + search);

    // Execute immediately
    scrollToTop();

    // Execute again after a short delay to handle dynamic content
    const timer1 = setTimeout(scrollToTop, 10);

    // Execute after page should be fully loaded
    const timer2 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, search]); // Include search to handle query parameter changes

  return null;
};

export default ScrollToTop;
