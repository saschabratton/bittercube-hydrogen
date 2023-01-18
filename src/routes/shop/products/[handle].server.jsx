// TODO: Examine the query and specifically the structure of the fragments
import { Suspense } from "react"
import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Link,
  CacheNone,
  fetchSync,
  Seo,
  useQuery,
} from "@shopify/hydrogen"
import { Layout, NotFound, SimilarProducts } from '@server'
import { HorizontalSeperator, PrimaryMenu, CardCarousel, WholesaleBitters, ThreeColumnFeature,SplitBgVertBlue, ProductDetails, ProductRecipes  } from "@client"
import { ClientAnalytics, loadScript } from '@shopify/hydrogen'
// ----------------------------------------------------------------------

const ThreeColumnFeaturedContent = {
  'headline': 'use to craft unique cocktails',
  'description': 'Every recipe on this site was meticulously vetted. From updated classics, to seasonal libations, there are cocktails of all styles featured in the recipe library.',
  'ctaLabel': 'See all recipes',
  'ctaLink': '/recipes/all',
  'background': 'forest',
  'image': '/images/shop-product-cocktails.jpg',
  'navHeadline': 'Featured Recipes',
  'padding': '12',
  'border': '2',
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'special tonic 12',
    'link': '#',
  },
]

export default function Product({ params }) {
  const { handle } = useRouteParams()

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
    cache: CacheNone()
  })

  if (!product) {
    return <NotFound />
  }

  useServerAnalytics({
    productId: product.variants.nodes[0].sku,
    imageUrl: product.media.nodes[0].image.url,
  });

  const serverDataLayer = useServerAnalytics({
  content_type: ShopifyAnalyticsConstants.pageType.product,
  content_ids: product.id,
  content_name: product.title,

  value: product.variants.nodes[0].priceV2.amount,
  currency: product.variants.nodes[0].priceV2.currencyCode,
  content_category: product.productType,

  publishEventsOnNavigate: [ClientAnalytics.eventNames.VIEWED_PRODUCT],
})

  return (
    <Layout>
      <Seo type="product" data={product} />
      <PrimaryMenu dark={false} />
      <div className="container flex items-center justify-center w-11/12 gap-2 px-0 pb-3 mt-4 md:justify-start md:pb-6">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop/all">Shop All Products</Link>
      </div>
        <ProductDetails product={product} />
        <ProductRecipes  content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks}/>
      <div className="relative w-11/12 mx-auto mt-12">
        <HorizontalSeperator />
        <div className="absolute top-0.5 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 h-fit bg-gold">
          RECOMMENDED
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-paper bg-reveal active"></div>
        </div>
      </div>
      <Suspense>
        <SimilarProducts data={product.id} />
      </Suspense>
      <SplitBgVertBlue  />
      <WholesaleBitters />
    </Layout>
  )
}


const PRODUCT_QUERY = gql`
  fragment MediaFields on Media {
    mediaContentType
    alt
    previewImage {
      url
    }
    ... on MediaImage {
      id
      image {
        url
        width
        height
      }
    }
  }
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      vendor
      productType
      descriptionHtml
      media(first: 5) {
        nodes {
          ...MediaFields
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`
