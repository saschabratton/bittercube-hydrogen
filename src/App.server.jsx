import renderHydrogen from '@shopify/hydrogen/entry-server'
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from "@shopify/hydrogen"
import { GoogleAnalytics } from '@client'
import { Suspense } from 'react'
// import { DefaultSeo } from "./components/global/DefaultSeo.server";

function App() {
  return (
    <>
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProvider>
          {/* <Suspense>
            <DefaultSeo />
          </Suspense> */}
          <Router>
            <FileRoutes />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
    {/* <GoogleAnalytics /> */}
    </>
  );
}

export default renderHydrogen(App);
