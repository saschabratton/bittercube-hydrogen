import { useEffect } from 'react'
import {ClientAnalytics} from '@shopify/hydrogen';

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
          // console.log(payload);
          var _rejoiner = _rejoiner || []
          _rejoiner.push(["trackProductView", {
            "product_id": payload.content_ids,
            "name": payload.content_name,
            "price": payload.value,
            "product_url": payload.normalizedRscUrl,
            // "image_url": payload.,
            // "stock": payload.,
            "category": payload.content_category,
          }])
        }
      )
    }
  })

  return null
}