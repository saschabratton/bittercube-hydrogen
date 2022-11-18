import { Suspense } from "react"
import { useShopQuery, CacheNone, gql, useUrl } from "@shopify/hydrogen"
import Footer from "./global/Footer.client"


export default function Layout({ children }) {
  const { pathname } = useUrl()
  const isHome = pathname === "/"

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheNone(),
    preload: false
  });


  return (
    <>
    <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
        <main role="main" id="mainContent" className="flex-grow bg-paper">
          <Suspense>
            {children}
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
