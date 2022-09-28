import { Link } from "@shopify/hydrogen"

export default function SubNav({ navigation }){
  return(
    <div className="container py-8 flex justify-between">
      <ul className="flex gap-8">
        {navigation.map(item => {
          const {label, link, i} = item
          return (
            <li key={i}>
              <Link to={ link } className="uppercase text-dark tracking-widest font-bold text-sm">
              { label }
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <span className="uppercase text-sm font-bold text-gold tracking-widest">
          Search
        </span>
      </div>
    </div>
  )
}