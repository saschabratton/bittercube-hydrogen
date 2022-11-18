import { useUrl, Link } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
const menu = [
  { label: 'featured', link: '/recipes', active: 'featured'},
  { label: 'all recipes', link: '/recipes/all', active: 'all'},
  { label: 'syrups', link: '/recipes/syrups', active: 'syrup'},
  { label: 'in the kitchen', link: '/recipes/kitchen', active: 'kitchen'},
]

export default function RecipesMenu() {
  const { pathname } = useUrl()

  return (
    <nav className="container flex justify-between py-8">
      <ul className="flex gap-8">
        {menu.map(item => {
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
  )
}

