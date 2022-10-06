import { Link } from "@shopify/hydrogen"

export default function SubNav({ navigation }){
  return(
    <div className="container flex justify-between py-8">
      <ul className="flex gap-8">
        {navigation.map(item => {
          const {label, link, i} = item
          return (
            <li key={i}>
              <Link to={ link } className="text-sm font-bold tracking-widest uppercase text-dark subnav-item">
              { label }
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <span className="text-sm font-bold tracking-widest uppercase text-gold">
          Search
        </span>
      </div>
    </div>
  )
}