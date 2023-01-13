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

      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.VIEWED_PRODUCT,
        (payload) => {
          console.log(window._rejoiner);
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