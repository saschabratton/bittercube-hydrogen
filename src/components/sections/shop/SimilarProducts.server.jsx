// TODO: Examine how this is being used to help limit api requests
import {Suspense, useMemo} from 'react';
import { gql, useShopQuery, useLocalization, CacheLong } from '@shopify/hydrogen'
import { PRODUCT_CARD_FRAGMENT } from "../../../lib/fragments"
import ProductCard from "../../ProductCard.server"

export default function SimilarProducts({ data }) {


  const productCardsMarkup = useMemo(() => {
    // If the data is already provided, there's no need to query it, so we'll just return the data
    if (typeof data === 'object') {
      return (<div>object</div>);
    }

    // If the data provided is a productId, we will query the productRecommendations API.
    // To make sure we have enough products for the swimlane, we'll combine the results with our top selling products.
    if (typeof data === 'string') {
      return (
        // <div>String</div>
        // <Suspense>
          <RecommendedProducts productId={data} count={1} />
        // </Suspense>
      );
    }

    // If no data is provided, we'll go and query the top products
    // return <TopProducts count={count} />;
    return (<div>no data</div>);
  }, [data]);

  return (
    <section>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        {productCardsMarkup}
      </div>
    </section>
  );
}


function ProductCards({products}) {
  return (
    <>
    <div className="container grid w-11/12 grid-cols-2 gap-6 py-0 lg:grid-cols-4">
      {products.slice(0,  4).map((product) => (
        // <ProductCard key={product.id} product={product} />
        <p>hi</p>
      ))}
      </div>
    </>
  );
}

function RecommendedProducts({productId, count}) {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data: products} = useShopQuery({
    query: RECOMMENDED_PRODUCTS_QUERY,
    variables: {
      count,
      productId,
      languageCode,
      countryCode,
    },
  });

  const mergedProducts = products.recommended
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts
    .map((item) => item.id)
    .indexOf(productId);

  mergedProducts.splice(originalProduct, 1);

  return <ProductCards products={mergedProducts} />;

  ;
}

function TopProducts({count}) {
  const {
    data: {products},
  } = useShopQuery({
    query: TOP_PRODUCTS_QUERY,
    variables: {
      count,
    },
    cache: CacheLong()
  });

  // return <ProductCards products={products.nodes} />;
  return <div>top products</div>;
}

const RECOMMENDED_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(country: $countryCode, language: $languageCode) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;