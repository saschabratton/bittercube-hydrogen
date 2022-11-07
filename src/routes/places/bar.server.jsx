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
    'label': 'Brunch',
    'contentHtml': '<dl><dt>MARKET BLOODY - $11</dt><dd>modest vodka, garden variety bloody mary mix, snit of solid gold lager make it a red snapper with gin or n/a with zero proof gin spice it up with disco inferno reverse it with a full beer and a snit of bloody mary!</dd><dt>CREME DE FLORA MIMOSA - $10</dt><dd>heirloom creme de flora, sparkling wine, orange or grapefruit juice, bitters</dd><dt>BEERMOSA- $9</dt><dd>fulton lonely blonde, orange or grapefruit juice, bitters</dd><dt>SEASONAL SPRITZ - $12</dt><dd>seasonal aperitivo blend, seltzer, sparkling wine, skewered olive</dd><dt>NEON PANDA - $12</dt><dd>ten to one aged rum, creme de cacao, cinnamon, coconut water, cold brew, blackstrap bitters</dd><dt>BEE STING - $12</dt><dd>gin, lemon, honey syrup, disco inferno</dd><dd>non-alcoholic variation with amass zero proof gin</dd><dt>MARKET FRESH PALOMA - $12</dt><dd>tequila, grapefruit, seltzer, jamaican no 2 bitters</dd><dd>non-alcoholic variation with ritual zero proof tequila</dd><dt>BARREL AGED LONG ISLAND ICED TEA - $12</dt><dd>barrel aged spirits, lemon, orange liqueur, house kola</dd><dt>MARKET OLD FASHIONED - $12</dt><dd>house american whiskey blend, tapped maple syrup, trinity bitters, grapefruit oil non-alcoholic variation with monday zero alcohol whiskey</dd></dl>',
  },
  {
    'label': 'Dinner',
    'contentHtml': '<dl><dt>WELLSPRING</dt><dd>house whiskey blend, lemon, sweet tea syrup, cherry bark vanilla bitters, seltzer</dd><dd>non-alcoholic variation with ritual zero proof rum</dd><dt>INSPECTOR NORSE</dt><dd>dill aquavit, lime, passion fruit liqueur, red wine syrup, bolivar bitters</dd><dt>WEST NORTH9</dt><dd>modest vodka, lemon, lychee syrup, mint, jamaican no 2 bitters</dd><dd>non-alcoholic variation with amass riverine</dd><dt>MARAVILLA</dt><dd>cimarron tequila, lime, creme de flora, rosemary, root beer bitters, black salt</dd><dt>SEASONAL 75</dt><dd>bloody shiraz gin, lemon, cinnamon syrup, sparkling wine</dd><dt>BARREL-AGED LONG ISLAND ICED TEA</dt><dd>barrel aged spirits, lemon, orange liqueur, house kola</dd><dt>CONNECTED TO THE LAND</dt><dd>ten to one white rum, lime, maple syrup, cardamom, jamaican no 1 bitters</dd><dd>non-alcoholic variation with ritual zero proof rum</dd><dt>STRAWBERRY STREET</dt><dd>strawberry-infused apple brandy, cocchi rosa, meletti amaro, all day bitters</dd><dt>ALASKA</dt><dd>london dry gin, heirloom genepy, orange & bolivar bitters, lemon oil</dd><dt>MARKET OLD FASHIONED</dt><dd>house american whiskey blend, tapped maple syrup, trinity bitters, grapefruit oil</dd></dl>',
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
          <h2>Carefully Crafted Cocktails</h2>
          <p className="label">
            Located at<br />5900 W north ave<br />MILWAUKEE, WI 53208
            <br /><span className="inline-block mt-6">AT THE NORTH AVENUE MARKET</span>
          </p>
          <div className="text-ornament w-fit"></div>
          <p className="label ">
            <a href="tel:4142931231" target="_blank" className="text-gold hover:text-dark">414.293.1231</a><br />
            <a href="mailto:ANTHONY@BITTERCUBE.COM" target="_blank" className="text-gold hover:text-dark">ANTHONY@BITTERCUBE.COM</a>

          </p>
          <p className="label">Follow us online<br />@BITTERCUBEBAZAAR</p>
          <p>The Bittercube Bar features a seasonal cocktail menu with fresh and unique ingredients. The cocktails were designed to pair with each of the food vendors across the market. Beyond cocktails, enjoy Midwest beers, an eclectic collection of wines, and a plethora of non-alcoholic cocktail options. </p>
          <p>Also housed at the bar is the Bittercube Bazaar, a unique liquor store featuring Bittercube Bitters, Heirloom Liqueurs, carry-out cocktails for home consumption, and a curated list of our favorite spirits. <a href="https://www.toasttab.com/north-avenue-market-5900-west-north-avenue/v3" target="blank">Order online now</a>.</p>
        </div>
      </div>
 <div className="w-11/12 mx-auto">
        <HorizontalSeperator />
      </div>

      <div className="container grid grid-cols-2 ">
          <div className="flex flex-col items-center justify-center max-w-md gap-6 mx-auto text-center">
            <h2>Take a look at the vault cocktail menu</h2>
            <a href="https://moslers-vault.resos.com/booking" target="_blank" className="btn btn-action">Book a table</a>
          </div>
        <TabSection content={TabContent} />
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





