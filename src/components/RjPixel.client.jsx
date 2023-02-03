import { useEffect } from 'react'
import { ClientAnalytics, loadScript } from '@shopify/hydrogen'

const {
  VIEWED_PRODUCT, ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART,
} = ClientAnalytics.eventNames

let init = false

const convertGidToId = (gid) => gid.substring(gid.lastIndexOf('/') + 1)

const convertToCents = (dollars) => Math.round(dollars * 100)

const setCartItem = (node) => {
  const { merchandise, quantity } = node
  const variantId = convertGidToId(merchandise.id)

  const priceInCents = convertToCents(merchandise.priceV2.amount)

  const collections = merchandise.product.collections.edges
  const collectionTitles = collections.map((edge) => edge.node.title)

  const cartItem = {
    product_id: merchandise.sku,
    name: merchandise.product.title,
    variant: merchandise.title,
    product_url: `${merchandise.product.onlineStoreUrl}?variant=${variantId}`,
    image_url: merchandise.image.url,
    description: merchandise.product.description.replace(/<\/?[^>]+(>|$)/g, ""),
    category: collectionTitles,
    price: priceInCents,
    item_qty: quantity,
    qty_price: priceInCents * quantity,
  }

  window._rejoiner = window._rejoiner || []
  window._rejoiner.push(['setCartItem', cartItem])
}

const setCartData = (cart) => {
  const cartData = {
    cart_value: convertToCents(cart.cost.subtotalAmount.amount),
    cart_item_count: cart.totalQuantity,
    return_url: cart.checkoutUrl,
  }

  if (cart.discountCodes.length) {
    cartData.promo = cart.discountCodes
      .filter(({ applicable }) => applicable)
      .map(({ code }) => code)
      .join(',')
  }

  window._rejoiner = window._rejoiner || []
  window._rejoiner.push(['setCartData', cartData])
}

export default function RjPixel() {
  useEffect(() => {
    ClientAnalytics.pushToPageAnalyticsData({
        userLocale: navigator.language,
    })

    if (!init) {
      init = true

      ClientAnalytics.subscribe(VIEWED_PRODUCT, (payload) => {
        window._rejoiner.push(["trackProductView", {
          "product_id": payload.productId,
          "name": payload.content_name,
          "price": convertToCents(payload.value),
          "product_url": payload.normalizedRscUrl,
          "category": payload.content_category,
          "image_url": payload.imageUrl
        }])
      })

      ClientAnalytics.subscribe(ADD_TO_CART, (payload) => {
        const addedCartLines = Array.prototype.concat(payload.addedCartLines)

        addedCartLines.forEach(({ merchandiseId }) => {
          const matchingLine = payload.cart.lines.edges
            .find((line) => line.node.merchandise.id === merchandiseId)

          if (matchingLine) {
            setCartItem(matchingLine.node)
          }
        })

        setCartData(payload.cart)
      })

      ClientAnalytics.subscribe(UPDATE_CART, (payload) => {
        const updatedCartLines = Array.prototype.concat(payload.updatedCartLines)

        updatedCartLines.forEach(({ id }) => {
          const matchingLine = payload.cart.lines.edges
            .find((line) => line.node.id === id)

          if (matchingLine) {
            setCartItem(matchingLine.node)
          }
        })

        setCartData(payload.cart)
      })

      ClientAnalytics.subscribe(REMOVE_FROM_CART, (payload) => {
        const removedCartLines = Array.prototype.concat(payload.removedCartLines)

        removedCartLines.forEach((id) => {
          const matchingLine = payload.prevCart.lines
            .find((line) => line.id === id)

          if (matchingLine) {
            window._rejoiner.push(['removeCartItem', {
              product_id: matchingLine.merchandise.sku,
            }])
          }
        })

        if (payload.cart.lines.edges.length) {
          setCartData(payload.cart)
        } else {
          window._rejoiner.push(['clearCartData'])
        }
      })
    }
  })

  return null
}
