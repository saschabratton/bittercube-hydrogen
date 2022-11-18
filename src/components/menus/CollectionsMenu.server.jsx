import { useUrl, Link, gql, useShopQuery, CacheLong } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
export default function CollectionsMenu() {
  const { pathname } = useUrl()
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  })

  return (
    <nav className="container flex justify-between py-8">
      <ul className="grid grid-cols-2 gap-8 md:flex">
        {collections?.nodes.map((collection) => {
          return (
            <li key={collection.id}>
              <Link to={`/shop/${collection.handle}`}
              className={`text-sm font-bold tracking-widest uppercase text-dark subnav-item flex justify-center text-center ${pathname.includes(collection.handle) ? 'active' : ''}`}>
                {collection.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

const QUERY = gql`
  query Collections {
    collections(first: 10, query: "collection_type:smart", sortKey: ID) {
      nodes {
        id
        title
        handle
      }
    }
  }
`
