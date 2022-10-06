import { useShopQuery, CacheLong, gql, useUrl, Link, Seo, Image } from "@shopify/hydrogen";

import Footer from "./global/Footer.client";

export function Layout({ children }) {
  const { pathname } = useUrl();
  const isHome = pathname === "/";

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <>
      <Seo
        type="defaultSeo"
        data={{
          title: shop.name,
          description: shop.description,
        }}
      />
      <div className="hidden pt-0 pb-0 border-b-0 bg-forest bg-split-dark bg-split-forest"></div>
      <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
        <main role="main" id="mainContent" className="flex-grow bg-paper">
          {children}
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
