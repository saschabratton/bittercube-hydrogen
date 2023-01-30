import { useUrl, Link } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
const menu = [
  { label: 'featured', link: '/recipes', active: 'featured'},
  { label: 'all recipes', link: '/recipes/all', active: 'all'},
  { label: 'syrups', link: '/recipes/syrups', active: 'syrup'},
  { label: 'in the kitchen', link: '/recipes/kitchen', active: 'kitchen'},
  { label: 'How to craft', link: '/recipes#learn-how-to-craft', active: 'how-to-crafte'},
    { label: 'Featured Bartender', link: '/recipes#featured-bartender', active: 'bartender'},
]

export default function RecipesMenu() {
  const { pathname } = useUrl()

  return (
    <nav className="container py-8 md:flex md:justify-between print:hidden print:opacity-10">
      <ul className="grid grid-cols-2 gap-8 md:flex">
        {menu.map(item => {
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
  )
}

