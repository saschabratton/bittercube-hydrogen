import renderHydrogen from '@shopify/hydrogen/entry-server'
import {
  gql,
  Router,
  FileRoutes,
  ShopifyProvider,
  Route,
  CartProvider,
  Cookie
} from "@shopify/hydrogen"
import { GoogleAnalytics } from '@client'
import { Suspense } from 'react'
import queryString from 'query-string'

import { DefaultSeo } from "./components/global/DefaultSeo.server";
import Error from './Error.server'

function App({request, response, search}) {
  const query = queryString.parse(search)
  if (query.gclid) {
    let cookie = new Cookie('__gclid', {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
    })
    cookie.parse(request.headers.get('cookie'))
    cookie.set('id', query.gclid)
    response.headers.set('Set-Cookie', cookie.serialize())
  }
  return (
    <ShopifyProvider>
      <CartProvider cartFragment={CART_FRAGMENT}>
        <Suspense>
          <DefaultSeo />
        </Suspense>
        <Router>
          <FileRoutes />
          <Route path="*" page={<Error />} />
        </Router>
      </CartProvider>
    </ShopifyProvider>
  )
}

const CART_FRAGMENT = gql`
fragment CartFragment on Cart {
  id
  checkoutUrl
  totalQuantity
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          compareAtAmountPerQuantity {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              id
              handle
              title
              vendor
              productType
              description
              onlineStoreUrl
              collections(first: 99) {
                edges {
                  node {
                    title
                  }
                }
              }
            }
            selectedOptions {
              name
              value
            }
            sku
          }
        }
      }
    }
  }
  cost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`

export default renderHydrogen(App);
