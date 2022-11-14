import { useUrl, Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";


const pageNav = [
  { label: 'featured', link: '/recipes', active: 'featured'},
  { label: 'cocktails', link: '/recipes/cocktails', active: 'cocktails'},
  { label: 'syrups', link: '/recipes/syrups', active: 'syrup'},
  { label: 'in the kitchen', link: '/recipes/kitchen', active: 'kitchen'},
]

export default function RecipesNav() {
  const { pathname } = useUrl();

  return (
    <nav className="container flex justify-between py-8">
      <ul className="flex gap-8">
        {pageNav.map(item => {
          const {label, link, active, i} = item
          return (
            <li key={i}>
              <Link to={ link } className={`text-sm font-bold tracking-widest uppercase text-dark subnav-item ${pathname === (link) ? 'active' : ''}`}>
              { label }
              </Link>
            </li>
          )
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
