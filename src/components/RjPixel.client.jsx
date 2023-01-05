import { useEffect } from 'react'
import { ClientAnalytics, loadScript } from '@shopify/hydrogen'

const AccountID = '22960755'
const Domain = 'bittercube.com'
const URL = '//cdn.rejoiner.com/js/v4/rj2.lib.js'
let init = false

export default function RjPixel() {
  useEffect(() => {
    if (!init) {
      init = true

      if (window._rejoiner) return

      loadScript(URL).catch(() => {});

      rj('init', AccountID)

      function trackPageView(payload) {
        rj('track', 'PageView', payload)
      }
      function trackAddToCart(payload) {
        rj('track', 'AddToCart', payload)
      }
      function trackViewedProduct(payload) {
        rj('track', 'ViewContent', payload)
      }

      console.log('events', trackPageView)

      // Listen for events from Hydrogen
      // https://shopify.dev/custom-storefronts/hydrogen/analytics#default-events
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.PAGE_VIEW,
        trackPageView
      )
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.ADD_TO_CART,
        trackAddToCart
      )
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.VIEWED_PRODUCT,
        trackViewedProduct
      )

      ClientAnalytics.hasSentFirstPageView() &&
        trackPageView(ClientAnalytics.getPageAnalyticsData())
    }
  })

  return null
}