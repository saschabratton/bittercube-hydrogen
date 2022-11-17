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
import SplitBgVertBlue from "../../../components/sections/SplitBgVertBlue.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";


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
      <Nav shop={shop} dark={false} />
      {/* TODO: Link up breadcrumbs for non bitters products */}
      <div className="container flex items-center w-11/12 gap-2 pb-6 mt-8">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop">shop</Link>
        <Arrow />
        <Link className="label" to="/shop/bitters">Bitters</Link>
      </div>
      <ProductDetails product={product} />
      <ThreeColumnFeature  content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />

      <div className="relative w-11/12 mx-auto mt-12">
        <HorizontalSeperator />
        <div className="absolute top-0.5 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 h-fit bg-gold ">
          RECOMMENDED
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-paper bg-reveal active"></div>
        </div>
      </div>

      <CardCarousel />
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