import { Image, Link } from "@shopify/hydrogen"


export default function RecipeColleciton() {
  return(
    <div className="container relative flex py-0 mx-auto my-20 border-2 border-gold md:grid md:grid-cols-8">
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recipe Collection
        </div>
        <ul className="flex flex-col items-center justify-center col-span-1 pr-6 text-center border-r-2 border-gold">
          <li className="label">Locally Made Goods</li>
          <li className="label text-ornament">partner products</li>
          <li className="label text-ornament">bar and cocktail supplies</li>
          <li className="label text-ornament">crafted favorites and more</li>
        </ul>
        <div className="flex items-center justify-center col-span-3 p-10">
          <Image src='/images/heirloom.jpg' width={460} height={555} className="object-cover rounded-jumbo-sm aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
        </div>

        <div className="relative flex flex-col items-center justify-center col-span-4 gap-6 py-32 text-center border-l-2 px-28 border-gold">
          <div className="absolute top-10 right-5">
          <Image src='/emblems/bazaar.svg' width={101} height={111} alt="" role="presentation" />
        </div>
          <h2>shop the local milwaukee bazaar</h2>
          <p>
            Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.
          </p>
          <Link to="/" className="btn btn-action">Shop for local Pick-up</Link>
        </div>
      </div>
  )
}