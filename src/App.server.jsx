import renderHydrogen from '@shopify/hydrogen/entry-server'
import {
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
    // <Suspense>
      <ShopifyProvider>
        <CartProvider>
          <Suspense>
            <DefaultSeo />
          </Suspense>
          <Router>
            <FileRoutes />
            <Route path="*" page={<Error />} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    // </Suspense>
  )
}

export default renderHydrogen(App);
