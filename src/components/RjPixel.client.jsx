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

          console.log('console:', payload)
          const priceInCents = payload.value * 100

          window._rejoiner = window._rejoiner || []
          var _rejoiner = window._rejoiner
          _rejoiner.push(["trackProductView", {
            "product_id": payload.productId,
            "name": payload.content_name,
            "price": priceInCents,
            "product_url": payload.normalizedRscUrl,
            "category": payload.content_category,
            "image_url": payload.imageUrl
          }])
        }
      )
    }
  })

  return null
}