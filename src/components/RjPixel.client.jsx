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
          // console.log('console:', payload.descriptionHtml)

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
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.ADD_TO_CART,
        (payload) => {

          const priceInCents = payload.value * 100
          const productDescription = payload.description.replace(/<\/?[^>]+(>|$)/g, "")

          window._rejoiner = window._rejoiner || []
          var _rejoiner = window._rejoiner
          _rejoiner.push(["setCartItem", {
            "product_id": payload.productId,
            "name": payload.content_name,
            "price": priceInCents,
            "description": productDescription,
            "category": payload.content_category,
            "product_url": payload.normalizedRscUrl,
            "image_url": payload.imageUrl,
          }])
        }
      )
      ClientAnalytics.subscribe(
        ClientAnalytics.eventNames.REMOVE_FROM_CART,
        (payload) => {

          const priceInCents = payload.cart.cost.totalAmount.amount * 100

          window._rejoiner = window._rejoiner || []
          var _rejoiner = window._rejoiner
          _rejoiner.push(["setCartItem", {
            "cart_value": priceInCents,
            "cart_item_count": payload.cart.totalQuantity,
            "promo": payload.discountCodes[0],
          }])
        }
      )
    }
  })

  return null
}