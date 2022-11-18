import { Suspense } from "react"
import { gql, useShopQuery, Seo, useRouteParams, useServerAnalytics, ShopifyAnalyticsConstants, CacheShort } from "@shopify/hydrogen"
import { NotFound, Layout, PatternHero, CollectionsMenu } from '@server'

import ProductCard from "../../components/ProductCard.server"
import WholesaleBitters from "../../components/sections/WholesaleBitters"
import SplitBgVertBlue from "../../components/sections/SplitBgVertBlue.client"
// ----------------------------------------------------------------------

export default function Collections() {
  const { handle } = useRouteParams()

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
    cache: CacheShort()
  })
  if(!collection) {
    return <NotFound />
  }

  useServerAnalytics({
    shopify: {
      pageType:ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    },
  })

  return (
    <Layout>
      <Suspense>
        <Seo type="collection" data={collection} />
      </Suspense>
      <PatternHero content={collection.title} />
      <CollectionsMenu />
      <hr />
      <div className="container grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <SplitBgVertBlue />
      <WholesaleBitters />
    </Layout>
  )
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 30) {
        nodes {
          id
          title
          vendor
          publishedAt
          handle
          tags
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`
