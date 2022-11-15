import { gql, useShopQuery, Seo, useServerAnalytics, useRouteParams, ShopifyAnalyticsConstants} from "@shopify/hydrogen";
import { Suspense } from "react";
import PatternHero from "../../components/headers/PatternHero.server";
import { Layout } from "../../components/Layout.server";
import ProductCard from "../../components/ProductCard.server";
import CollectionsNav from "../../components/headers/CollectionsNav.server";
import WholesaleBitters from "../../components/sections/WholesaleBitters";
import SplitBgVertBlue from "../../components/sections/SplitBgVertBlue.client";


export default function Collections() {
  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  })

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
      <CollectionsNav />
      <hr />
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  query CollecitonDetails($handle: String!) {
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
      products(first: 20) {
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