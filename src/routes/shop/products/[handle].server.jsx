import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Link,
  Seo,
  CacheLong,
} from "@shopify/hydrogen";
import { Suspense } from "react";
import { Layout } from "../../../components/Layout.server";
import Arrow from "../../../components/global/icons/Arrow.client";
import Nav from "../../../components/headers/Nav.client";
import ProductDetails from "../../../components/ProductDetails.client";
import WholesaleBitters from "../../../components/sections/WholesaleBitters";
import CardCarousel from "../../../components/sections/CardCarousel.client";
import ThreeColumnFeature from "../../../components/sections/ThreeColumnFeature.client";
import SplitBgVert from "../../../components/sections/SplitBgVert.client";



const ThreeColumnFeaturedContent = {
  'headline': 'use to craft unique cocktails',
  'description': 'Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'ctaLabel': 'See all recipes',
  'ctaLink': '#',
  'background': 'forest',
  'image': '',
  'navHeadline': 'Craft a cocktail',
  'padding': '12',
  'border': '2',
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'special tonic 12',
    'link': '#',
  },
]
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


export default function Product({ params }) {
  const { handle } = useRouteParams();

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });
    const {
    data: { shop },
    } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
    });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
    },
  });
  // Implement an `Seo` component for the product. By specifying "type=product"
  // you're overriding the `defaultSeo` type in the Layout component.
  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <Nav shop={shop} />
      {/* TODO: Link up breadcrumbs */}
      <div className="container flex items-center gap-2 pb-6 mt-8 max-w-screen-2xl">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop">shop</Link>
        <Arrow />
        <Link className="label" to="/shop/bitters">Bitters</Link>
      </div>
      <ProductDetails product={product} />
      <ThreeColumnFeature  content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
      <CardCarousel />
      <SplitBgVert content={SplitBgContent} />
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
      media(first: 7) {
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
const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;