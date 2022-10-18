import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function CollectionsNav() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <nav className="container flex justify-between py-8">
      <ul className="flex gap-8">
        {collections.nodes.map((collection) => {
          return (
            <li key={collection.id}>
              <Link to={`/shop/${collection.handle}`} className="text-sm font-bold tracking-widest uppercase text-dark subnav-item">
                {/* <div className="grid gap-4">
                  {collection?.image && (
                    <Image
                      className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                      width={"100%"}
                      height={336}
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                    />
                  )}
                </div> */}
                {collection.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const QUERY = gql`
  query CollectionsNav {
    collections(first: 10, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
