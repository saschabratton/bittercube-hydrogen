import { Suspense } from "react";
import { useShopQuery, CacheLong, gql, useUrl, Link, Seo, Image } from "@shopify/hydrogen";
import Navigation from "./global/Navigation.server";
import Footer from "./global/Footer.client";
import Nav from "./headers/Nav.client";


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
    <Suspense>
      <Seo
        type="defaultSeo"
        data={{
          title: shop.name,
          description: shop.description,
        }}
      />
      </Suspense>

      <div className="hidden pt-0 pb-0 border-b-0 bg-forest bg-split-dark bg-split-forest">
        {/* TODO: This div is creating classes for tailwind that don't generate at build without */}
      </div>
      <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
        {/* <Nav shop={shop} /> */}
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
