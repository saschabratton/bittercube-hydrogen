import { gql, useShopQuery, Seo, useServerAnalytics, useRouteParams, ShopifyAnalyticsConstants} from "@shopify/hydrogen";
import { Suspense } from "react";
import PatternHero from "../../components/headers/PatternHero.server";
import { Layout } from "../../components/Layout.server";
import ProductCard from "../../components/ProductCard.server";
import CollectionsNav from "../../components/headers/CollectionsNav.server";
import WholesaleBitters from "../../components/sections/WholesaleBitters";
import SplitBgVert from "../../components/sections/SplitBgVert.client";


const SplitBgContent = {
  'topLabel': 'FEELING SPIRITED?',
  'topHeadline': 'Shop Our Local Milwaukee Bazaar',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '#',
  'bottomLabel': 'Get more from Bittercube',
  'bottomHeadline': 'Subscription Plans',
  'bottomCtaLabel': 'See Plans',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'dark',
  'padding': '12',
  'bottomHtml': ''
}

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
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />
    </Layout>
  )
}

const QUERY = gql`
  query ColecitonDetails($handle: String!) {
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
      products(first: 8) {
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