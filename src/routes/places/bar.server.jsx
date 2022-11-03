import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import { Image, Link } from "@shopify/hydrogen"
import TabSection from "../../components/sections/TabSection.client"
import OtherVenues from "../../components/sections/places/OtherVenues.client"
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client"
import SignUpForm from "../../components/global/SignUpForm.client"


const HeaderText = ("Bittercube Bar")
const TabContent = [
  {
    'label': 'Signature',
    'contentHtml': '<dl><dt>Cocktail Name Here</dt><dd>This would be the description text, lorem ipsum, doler, sit, amet conquite, lorem ierem</dd></dl>',
  },
  {
    'label': 'Classic',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'N/A craft',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
]

export default function moslers(){
  return(
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container grid grid-cols-2 gap-6 max-w-screen-2xl">
        <div className="grid gap-6">
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          {/* <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" /> */}
        </div>
        <div className="sticky top-0 grid gap-3 py-20 h-fit lg:px-20">
          <span className="label">Located on Milwaukee’s West-side</span>
          <h2>Some headline for the bittercube bar</h2>
          <p className="label">
            Located at<br />5900 W north ave<br />milwaukee wi<br /><span className="inline-block mt-6">AT THE NORTH AVENUE MARKETs</span>
          </p>
          <div className="text-ornament w-fit"></div>
          <p className="label ">
            <a href="tel:4142931231" target="_blank" className="text-gold hover:text-dark">414.293.1231</a><br />
            <a href="mailto:ANTHONY@BITTERCUBE.COM" target="_blank" className="text-gold hover:text-dark">ANTHONY@BITTERCUBE.COM</a>

          </p>
          <p className="label">Follow us online<br />@BITTERCUBEBAZAAR</p>
          <p>The Bittercube Bar features a seasonal cocktail menu with fresh and unique ingredients. The cocktails were designed to pair with each of the food vendors across the market. Beyond cocktails, enjoy Midwest beers, an eclectic collection of wines, and a plethora of non-alcoholic cocktail options. </p>
          <p>OAlso housed at the bar is the Bittercube Bazaar, a unique liquor store featuring Bittercube Bitters, Heirloom Liqueurs, carry-out cocktails for home consumption, and a curated list of our favorite spirits. <a href="https://www.toasttab.com/north-avenue-market-5900-west-north-avenue/v3" target="blank">Order online now</a>.</p>
        </div>
      </div>


     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex">
                <Link to="/places/moslers" className="btn btn-action">Mosler's Vault</Link>
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





