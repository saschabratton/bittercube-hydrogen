import { Layout } from '@components/all.server'
import {  useShopQuery, CacheNone, gql, Seo, Link } from "@shopify/hydrogen"
import HorizontalSeperator from "./headers/HorizontalSeperator.client"
import Nav from "./headers/Nav.client"

 const customSeo = {
    name: 'Oh, geez',
  }

export default function NotFound({ response }) {
  if (response) {
    // response.status = 404
    // response.statusText = 'Not found'
  }

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheNone(),
    preload: false
  });

  return (
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <section className="relative flex flex-col flex-1 h-full py-28 bg-dark bg-pattern header-dark">
        <Nav shop={shop} dark={true} />
        <div className="container max-w-5xl text-center">
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward mb-8"></div>
          <h1>Oh, geez.<br />You took a few too many dashes in the wrong direction.</h1>
          <div className="max-w-sm mx-auto mt-8">
            <HorizontalSeperator />
          </div>
          <p className="mt-16 label text-ornament text-gold">
            looks like a 404 error, but we’re not bitter about it.
          </p>
          <div className="mx-auto mt-8 md:w-60">
            <Link to="/" className="w-full btn btn-action">Take me back home</Link>
            <Link to="/" className="w-full btn btn-action">Take me shopping</Link>
          </div>


        </div>
      </section>
    </Layout>
  )
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;