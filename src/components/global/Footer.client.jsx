import wordmark from '../../assets/wordmark.svg'
import { Link, Image } from "@shopify/hydrogen"

const navItems = [
  {'link': '/shop', 'label': 'Shop'},
  {'link': '/places', 'label': 'Places'},
  {'link': '/', 'label': 'Recipes'},
  {'link': '/', 'label': 'About'},
  {'link': '/', 'label': 'Find Us'},
  {'link': '/', 'label': 'Wholesale'},
  {'link': '/', 'label': 'Refund Policy'},
]

const contactItems = [
  {'label': 'Headquarters','description': '4828 W Lisbon Ave Milwaukee WI, 53210'},
  {'label': 'APOTHECARY PHONE','description': '414.207.6262'},
  {'label': 'GENERAL INQUIRIES','description': 'info@bittercube.com'},
]


export default function Footer(){

  return(
    <footer className="bg-paper">
      <div className="container grid grid-cols-8 gap-6 max-w-screen-2xl">
          <div className="flex flex-col justify-between col-span-3">
            <Image src={wordmark} height={56} width={297} alt="Bittercube"/>
            <h3 className="text-gold">Subscribe for Recipes, News & Events</h3>
          </div>
          <div className="col-span-2">
            <ul className="flex flex-col justify-center">
              {navItems.map(item => {
                const {link, label, i} = item
                return (
                  <li className="w-full py-3 border-b-2 border-dark last:border-0" key={i}>
                    <Link to={ link } className="w-full uppercase text-gold btn-arrow">{ label }</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-between col-span-2 text-center">
            {contactItems.map(item => {
              const {description, label, i} = item
              return (
                <div key={i}>
                  <h6>{ label }</h6>
                  <p>{ description }</p>
                </div>
              )
            })}
          </div>
          <div className="col-span-1 text-center">
            <div>
              <h6>Follow us online</h6>
              <p>facebook</p>
              <p>instagram</p>
            </div>
          </div>
        </div>

      <div className="py-3 bg-dark">
        <div className="container py-0  max-w-[1800px] flex gap-6 tracking-wider uppercase text-white text-sm font-bold">
          <span>Bittercube • Copyright 2022 <span id="year"></span></span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}