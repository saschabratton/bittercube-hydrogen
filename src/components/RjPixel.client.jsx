import { useEffect } from 'react'
import { ClientAnalytics , loadScript } from '@shopify/hydrogen';

let init = false

export default function RjPixel() {
  useEffect(() => {
    ClientAnalytics.pushToPageAnalyticsData({
        userLocale: navigator.language,
    })

    if (!init) {
      init = true

      // if (window._rejoiner) return

      // const _rejoiner = (window.fbq = (...args) => {
      //   fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args)
      // })

      // if (!window._fbq) window._fbq = fbq
      // fbq.push = fbq
      // fbq.loaded = !0
      // fbq.version = '2.0'
      // fbq.queue = []

      loadScript('cdn.rejoiner.com/js/v4/rj2.lib.js').catch(
        () => { }
      )

      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.VIEWED_PRODUCT,
        (payload) => {
          console.log(payload);
          var _rejoiner = _rejoiner || []
          _rejoiner.push(["trackProductView", {
            "product_id": payload.content_ids,
            "name": payload.content_name,
            "price": payload.value,
            "product_url": payload.normalizedRscUrl,
            "category": payload.content_category,
          }])
        }
      )
    }
  })

  return null
}