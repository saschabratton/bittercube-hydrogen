import { useUrl, Link, gql} from "@shopify/hydrogen";


const pageNav = [
  { label: 'featured', link: '/recipes', active: 'featured'},
  { label: 'all recipes', link: '/recipes/all', active: 'all'},
  { label: 'syrups', link: '/recipes/syrups', active: 'syrup'},
  { label: 'in the kitchen', link: '/recipes/kitchen', active: 'kitchen'},
]

export default function RecipesNav() {
  const { pathname } = useUrl();

  return (
    <nav className="container py-8 md:flex md:justify-between">
      <ul className="grid grid-cols-2 gap-8 md:flex">
        {pageNav.map(item => {
          const {label, link, active, i} = item
          return (
            <li key={i}>
              <Link to={ link } className={`text-sm font-bold tracking-widest uppercase text-dark subnav-item flex justify-center ${pathname === (link) ? 'active' : ''}`}>
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
