import { useShopQuery, CacheLong, gql, useUrl, Link, Seo, Image } from "@shopify/hydrogen";

import wordmark from '../assets/wordmark.svg'
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
      <div className="relative flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <header
          role="banner"
          className={`absolute flex items-center h-16 p-6 md:p-8 lg:p-12 z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${
            isHome ? "bg-black/80 text-white" : "bg-white/0"
          }`}
        >
          <div className="flex justify-between w-full items-center">
            <Link to="/">
              <span className="sr-only">
                {shop.name}
              </span>
              <Image src={wordmark} width={170} height={36} alt="Bittercube" />
            </Link>
            <div className="flex gap-12">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
              <Link className="nav-link" to="/places">
                Places
              </Link>
              <Link className="nav-link" to="/places">
                Recipes
              </Link>
              <Link className="nav-link" to="/places">
                About
              </Link>
              <Link className="nav-link" to="/places">
                Find Us
              </Link>
              <Link className="nav-link" to="/places">
                Contact
              </Link>
            </div>
          </div>
        </header>

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
