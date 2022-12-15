import renderHydrogen from '@shopify/hydrogen/entry-server'
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  Route,
  CartProvider,
} from "@shopify/hydrogen"
import { GoogleAnalytics } from '@client'
import { Suspense } from 'react'
import { DefaultSeo } from "./components/global/DefaultSeo.server";
import Error from './Error.server'

function App() {
  return (
    // <Suspense fallback={null}>
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
  );
}

export default renderHydrogen(App);
