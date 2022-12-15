import { useUrl, Link, gql, useShopQuery, CacheLong } from "@shopify/hydrogen"
import { ProductCard } from '@server'

// ----------------------------------------------------------------------



export default function BittersBundles() {

 const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {handle:'Bundles'},
    cache: CacheLong(),
  })


  return(
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

const QUERY = gql`
  query BundlesCollection($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      products(first: 30) {
        nodes {
          id
          title
          vendor
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
            }
          }
        }
      }
    }
  }
`