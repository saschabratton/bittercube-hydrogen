import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import { Image } from "@shopify/hydrogen"
import { Link } from "@shopify/hydrogen"
import SignUpForm from "../../components/global/SignUpForm.client"



const HeaderContent ={
  'text': 'The Apothecary',
  'image': '/images/apothecary-hero.jpg',
}


export default function moslers(){

  return(
    <Layout>
      <ImageHero content={HeaderContent} />
      <div className="container grid grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-6">
        <Image src='/images/apothecary-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/apothecary-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/apothecary-04.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/apothecary-bazaar-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/apothecary-bazaar-02.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/apothecary-bazaar-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          {/* <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" /> */}
        </div>
        <div className="sticky top-0 grid gap-3 py-20 h-fit lg:px-20">
          <span className="label">BITTERCUBE HEADQUARTERS</span>
          <h2>Made in Milwaukee</h2>
          <p>The Bittercube Apothecary is a bustling, 9,000 square foot building in Milwaukee, and is the lifeblood of our operation. The majority of the building is dedicated to the manufacturing of our slow-crafted bitters.</p>
          <p>We produce around 1,000 gallons of bitters a month, which is the equivalent of roughly 2.9 million cocktails worth of bitters! The production crew processes hundreds of lbs of botanicals a month into our slow-crafted bitters, and the bottling line crew is constantly bottling. Beyond the production, we also fulfill distributor, wholesale, and e-commerce orders on a daily basis, all from the fulfillment center at the Bittercube Apothecary.</p>
          <p>The apothecary also houses the company offices, and an R&D lab. In the lab, we test every batch of Bittercube Bitters, analyzing for consistency. We also develop and tinker with new product ideas, test new collaborative products, and develop signature cocktails. Interested in collaborating with us, <Link className="inline-block" to="/contact">drop us a line. </Link></p>
          <p>The Apothecary also has a storefront with bitters, swag like t-shirts and hats, tools, cocktail books, syrups, and other non-alcoholic cocktail ingredients. Beyond the standard lineup, collaborative bitters blends and other limited edition bitters are available at the bittercube storefront at the Bittercube Apothecary. </p>
          <p>The apothecary can be booked for private events and tours.</p>
        </div>
      </div>

{/*
      <div className="container grid grid-cols-2 ">
          <div className="flex flex-col items-center justify-center max-w-md gap-6 mx-auto text-center">
            <h2>take a look at our craft cocktail menu</h2>
            <a href="https://moslers-vault.resos.com/booking" target="_blank" className="btn btn-action">Book a table</a>
          </div>
        <TabSection content={TabContent} />
      </div> */}

     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex">
                <Link to="/places/bar" className="btn btn-action">Bittercube Bar</Link>
                <Link to="/places/moslers"  className="btn btn-action">Mosler's Vault</Link>
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-6 text-center">
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





