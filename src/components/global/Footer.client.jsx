import { Link } from "@shopify/hydrogen"

export default function Footer(){

  return(
    <footer className="bg-paper">
    <div className="container grid grid-cols-7 py-20">
        <div className="col-span-3">
          Bittercube
        </div>
        <div className="col-span-2">
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">Places</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          Headquarters
        </div>
        <div className="col-span-1"></div>
      </div>

    <div className="py-3 bg-dark">
      <div className="container  max-w-[1800px] flex gap-6 tracking-wider uppercase text-white text-sm font-bold">
        <span>Bittercube • Copyright 2022 <span id="year"></span></span>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
    </footer>
  )
}