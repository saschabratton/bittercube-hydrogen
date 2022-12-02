import {useEffect} from 'react';
import {ClientAnalytics, loadScript} from '@shopify/hydrogen';

const GTAG_ID = 'G-FR4YS5Z1M3';
const URL = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
let init = false;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!init) {
      init = true;

      // Load the gtag script
      loadScript(URL).catch(() => {});

      function trackPageView(payload) {
        gtag('event', 'page_view');
      }

      // gtag initialization code
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      // Configure your gtag
      gtag('config', GTAG_ID, {
        send_page_view: false,
      });

      // Listen for events from Hydrogen
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.PAGE_VIEW,
        trackPageView
      );

      ClientAnalytics.hasSentFirstPageView() &&
        trackPageView(ClientAnalytics.getPageAnalyticsData());
    }
  });

  return null;
}
