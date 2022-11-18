import { useUrl, Link, gql, useShopQuery, CacheShort } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
export default function CollectionsMenu() {
  const { pathname } = useUrl()
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheShort(),
  })

  return (
    <nav className="container flex justify-between py-8">
      <ul className="flex gap-8">
        {collections?.nodes.map((collection) => {
          return (
            <li key={collection.id}>
              <Link to={`/shop/${collection.handle}`}
              className={`text-sm font-bold tracking-widest uppercase text-dark subnav-item ${pathname.includes(collection.handle) ? 'active' : ''}`}>
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
    collections(first: 10, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
      }
    }
  }
`
