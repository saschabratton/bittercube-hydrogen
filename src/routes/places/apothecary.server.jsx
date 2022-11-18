import { Layout } from '@server'
import ImageHero from "../../components/hero/ImageHero.server"
import { Image, Link, Seo } from "@shopify/hydrogen"
import { SignUpForm, ImageCarousel } from "@client"
// ----------------------------------------------------------------------

const HeaderContent ={
  'text': 'The Apothecary',
  'image': '/images/apothecary-hero.jpg',
}

const Images = [
  {
    'name': 'Two men packing bitters into boxes for shipping',
    'url': '/images/apothecary-01.jpg'
  },
  {
    'name': 'A woman pouring a large batch of bitters into a receptical',
    'url': '/images/apothecary-03.jpg'
  },
  {
    'name': 'A woman pouring a large bag of spices into another container surounded by bins of spices',
    'url': '/images/apothecary-04.jpg'
  },
  {
    'name': 'A shop display with bitters and cocktail books',
    'url': '/images/apothecary-bazaar-01.jpg'
  },
  {
    'name': 'Cocktail accesories placed on a 3x3 shelf',
    'url': '/images/apothecary-bazaar-02.jpg'
  },
  {
    'name': 'A wide shot of the apothecary bazaar with people shopping',
    'url': '/images/apothecary-bazaar-03.jpg'
  },
]

const customSeo = {
    name: "The Bittercube Apothecary • Bittercube",
  }

export default function moslers(){

  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <ImageHero content={HeaderContent} />
      <div className="container grid w-11/12 gap-6 md:grid-cols-2">
        <div className="md:hidden">
          <ImageCarousel content={Images} />
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          <Image src='/images/apothecary-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/apothecary-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/apothecary-04.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/apothecary-bazaar-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/apothecary-bazaar-02.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/apothecary-bazaar-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        </div>
        <div className="sticky top-0 grid gap-6 px-4 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <span className="label">BITTERCUBE HEADQUARTERS</span>
          <h2>Made in Milwaukee</h2>
          <p>The Bittercube Apothecary is a bustling, 9,000 square foot building in Milwaukee, and is the lifeblood of our operation. The majority of the building is dedicated to the manufacturing of our slow-crafted bitters.</p>
          <p>We produce around 1,000 gallons of bitters a month, which is the equivalent of roughly 2.9 million cocktails worth of bitters! The production crew processes hundreds of lbs of botanicals a month into our slow-crafted bitters, and the bottling line crew is constantly bottling. Beyond the production, we also fulfill distributor, wholesale, and e-commerce orders on a daily basis, all from the fulfillment center at the Bittercube Apothecary.</p>
          <p>The apothecary also houses the company offices, and an R&D lab. In the lab, we test every batch of Bittercube Bitters, analyzing for consistency. We also develop and tinker with new product ideas, test new collaborative products, and develop signature cocktails. Interested in collaborating with us, <Link className="inline-block" to="/contact">drop us a line. </Link></p>
          <p>The Apothecary also has a storefront with bitters, swag like t-shirts and hats, tools, cocktail books, syrups, and other non-alcoholic cocktail ingredients. Beyond the standard lineup, collaborative bitters blends and other limited edition bitters are available at the bittercube storefront at the Bittercube Apothecary. </p>
          <p>The apothecary can be booked for private events and tours.</p>
        </div>
      </div>

     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex gap-2">
                <Link to="/places/bar" className="btn btn-action">Bittercube Bar</Link>
                <Link to="/places/moslers"  className="btn btn-action">Mosler's Vault</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center max-w-md gap-4 mx-auto text-center">
              <h4 className="tracking-wide text-white">Enjoy new recipes and the latest<br />news and events</h4>
              <p>Subscribers receive first access to limited products, and curated playlists for your next cocktail party.</p>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}





