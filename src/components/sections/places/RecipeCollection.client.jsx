import { Image, Link } from "@shopify/hydrogen"
import LocalPickup from '../../global/LocalPickup.client'



export default function RecipeColleciton() {
  return(
    <div className="container relative grid grid-cols-1 px-0 py-0 mx-auto my-20 border-2 border-gold md:grid-cols-8">
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recipe Collection
        </div>
        <ul className="flex flex-col items-center justify-center order-last col-span-1 px-6 pt-12 pb-8 text-center border-t-2 md:col-span-8 lg:border-t-0 lg:border-r-2 border-gold md:order-last lg:order-first lg:col-span-1">
          <li className="label">Locally Made Goods</li>
          <li className="label text-ornament">partner products</li>
          <li className="label text-ornament">bar and cocktail supplies</li>
          <li className="label text-ornament">crafted favorites and more</li>
        </ul>
        <div className="flex items-center justify-center col-span-1 p-10 md:col-span-4 lg:col-span-3">
          <Image src='/images/heirloom.jpg' width={460} height={555} className="object-cover rounded-jumbo-sm aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
        </div>

        <div className="relative flex flex-col items-center justify-center order-first col-span-1 gap-6 p-16 pb-0 text-center lg:py-32 lg:pb-32 md:border-l-2 md:col-span-4 lg:px-28 border-gold md:order-2 lg:order-last">
          <div className="absolute top-10 right-5">
            <Image src='/emblems/bazaar.svg' width={101} height={111} alt="" role="presentation" />
          </div>
          <h2>shop the local milwaukee bazaar</h2>
          <p>
            Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.
          </p>
          <LocalPickup />
        </div>
      </div>
  )
}