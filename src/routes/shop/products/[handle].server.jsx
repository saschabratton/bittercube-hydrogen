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