import { Suspense } from "react"
import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Link,
  Seo
} from "@shopify/hydrogen"
import { Layout } from '@server'
import { HorizontalSeperator, PrimaryMenu, CardCarousel } from "@client"

import Arrow from "../../../components/global/icons/Arrow.client";
import ProductDetails from "../../../components/ProductDetails.client";
import WholesaleBitters from "../../../components/sections/WholesaleBitters"
import ThreeColumnFeature from "../../../components/sections/ThreeColumnFeature.client"
import SplitBgVertBlue from "../../../components/sections/SplitBgVertBlue.client"
import SimilarProducts from "../../../components/sections/shop/SimilarProducts.server"
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
  })

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
    },
  })

  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <PrimaryMenu dark={false} />
      <div className="container flex items-center justify-center w-11/12 gap-2 px-0 mt-4 md:justify-start md:pb-6">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop/all">Shop All</Link>
        {/* <Arrow />
        <span className="text-lg label">{product.title}</span> */}
      </div>
      <ProductDetails product={product} />
      <ThreeColumnFeature  content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />

      <div className="relative w-11/12 mx-auto mt-12">
        <HorizontalSeperator />
        <div className="absolute top-0.5 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 h-fit bg-gold">
          RECOMMENDED
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-paper bg-reveal active"></div>
        </div>
      </div>
      <SimilarProducts data={product.id} />
      <SplitBgVertBlue />
      <WholesaleBitters />
    </Layout>
  );
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
    ... on Video {
      id
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      sources {
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
    }
  }
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      media(first: 50) {
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
