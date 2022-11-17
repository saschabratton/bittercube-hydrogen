import { Suspense } from "react";
import { useShopQuery, CacheLong, gql, useUrl, Link, Seo, Head, Image } from "@shopify/hydrogen";
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


  // const customSeo = {
  //   description: 'custom title',
  //   description: 'Bittercube Bitters are created in Milwaukee, Wisconsin, by hand with real ingredients.'
  // }

  return (
    <>
    <Suspense>
      <Seo
        type="defaultSeo"
        data={{
          title: shop.name,
          titleTemplate: `%s · ${shop.name}`,
        }}
      />
      {/* <Head>
        <meta name="title" content={customSeo.title} />
        <meta name="description" content={customSeo.description} />
      </Head> */}
    </Suspense>

    <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
        <main role="main" id="mainContent" className="flex-grow bg-paper">
          {/* <Suspense> */}
            {children}
          {/* </Suspense> */}
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
