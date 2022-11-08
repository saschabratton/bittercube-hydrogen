import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import { Image } from "@shopify/hydrogen"
import TabSection from "../../components/sections/TabSection.client"
import { Link, Head } from "@shopify/hydrogen"
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client"
import SignUpForm from "../../components/global/SignUpForm.client"


const HeaderText = ("The Apothecary")

export default function moslers(){

  return(
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container grid grid-cols-2 gap-6 ">
        <div className="grid gap-6">
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          {/* <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" /> */}
        </div>
        <div className="sticky top-0 grid gap-3 py-20 h-fit lg:px-20">
          <span className="label">Apothecary subhead</span>
          <h2>Apothecary headline</h2>
          <p>The Bittercube Apothecary is a bustling, 9,000 square foot building in Milwaukee, and is the lifeblood of our operation. The bulk of the space is dedicated to the manufacturing of our slow-crafted bitters.</p>
          <p>The apothecary also houses the company offices, and a storefront for bitters, tools, cocktail books, and other non-alcoholic cocktail ingredients.</p>
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
                <a href="https://www.crowdcast.io/bittercube" target='_blank' className="btn btn-action">Events portal</a>
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-6 text-center">
              <h4 className="tracking-wide text-white">Enjoy new recipes and the latest<br />news and events</h4>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}





