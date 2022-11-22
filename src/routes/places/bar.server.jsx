import { Image, Link, Seo } from "@shopify/hydrogen"
import { Layout, ImageHero } from '@server'
import { HorizontalSeperator, SignUpForm, ImageCarousel } from "@client"

import TabSection from "../../components/sections/TabSection.client"
// ----------------------------------------------------------------------
const HeaderContent ={
  'text': 'Bittercube Bar & Bazaar',
  'image': '/images/bc-bar-hero.jpg',
}

const TabContent = [
  {
    'label': 'Brunch',
    'contentHtml': '<dl><dt>MARKET BLOODY</dt><dd>Modest vodka, garden variety bloody mary mix, snit of solid gold lager make it a red snapper with gin or n/a with zero proof gin spice it up with disco inferno reverse it with a full beer and a snit of bloody mary!</dd></dl><dl><dt>CREME DE FLORA MIMOSA</dt><dd>Heirloom creme de flora, sparkling wine, orange or grapefruit juice, bitters</dd></dl><dl><dt>BEERMOSA</dt><dd>Fulton lonely blonde, orange or grapefruit juice, bitters</dd></dl><dl><dt>SEASONAL SPRITZ</dt><dd>Seasonal aperitivo blend, seltzer, sparkling wine, skewered olive</dd></dl><dl><dt>NEON PANDA</dt><dd>Ten to one aged rum, creme de cacao, cinnamon, coconut water, cold brew, blackstrap bitters</dd></dl><dl><dt>BEE STING</dt><dd>Gin, lemon, honey syrup, disco inferno</dd><dd>non-alcoholic variation with amass zero proof gin</dd></dl><dl><dt>MARKET FRESH PALOMA</dt><dd>Tequila, grapefruit, seltzer, jamaican no 2 bitters</dd><dd>non-alcoholic variation with ritual zero proof tequila</dd></dl><dl><dt>BARREL AGED LONG ISLAND ICED TEA</dt><dd>Barrel aged spirits, lemon, orange liqueur, house kola</dd></dl><dl><dt>MARKET OLD FASHIONED</dt><dd>House american whiskey blend, tapped maple syrup, trinity bitters, grapefruit oil non-alcoholic variation with monday zero alcohol whiskey</dd></dl>',
  },
  {
    'label': 'Dinner',
    'contentHtml': '<dl><dt>WELLSPRING</dt><dd>House whiskey blend, lemon, sweet tea syrup, cherry bark vanilla bitters, seltzer</dd><dd>non-alcoholic variation with ritual zero proof rum</dd></dl><dl><dt>INSPECTOR NORSE</dt><dd>Dill aquavit, lime, passion fruit liqueur, red wine syrup, bolivar bitters</dd></dl><dl><dt>WEST NORTH9</dt><dd>Modest vodka, lemon, lychee syrup, mint, jamaican no 2 bitters</dd><dd>non-alcoholic variation with amass riverine</dd></dl><dl><dt>MARAVILLA</dt><dd>Cimarron tequila, lime, creme de flora, rosemary, root beer bitters, black salt</dd></dl><dl><dt>SEASONAL 75</dt><dd>Bloody shiraz gin, lemon, cinnamon syrup, sparkling wine</dd></dl><dl><dt>BARREL-AGED LONG ISLAND ICED TEA</dt><dd>Barrel aged spirits, lemon, orange liqueur, house kola</dd></dl><dl><dt>CONNECTED TO THE LAND</dt><dd>Ten to one white rum, lime, maple syrup, cardamom, jamaican no 1 bitters</dd><dd>non-alcoholic variation with ritual zero proof rum</dd></dl><dl><dt>STRAWBERRY STREET</dt><dd>Strawberry-infused apple brandy, cocchi rosa, meletti amaro, all day bitters</dd></dl><dl><dt>ALASKA</dt><dd>London dry gin, heirloom genepy, orange & bolivar bitters, lemon oil</dd></dl><dl><dt>MARKET OLD FASHIONED</dt><dd>House american whiskey blend, tapped maple syrup, trinity bitters, grapefruit oil</dd></dl>',
  },
]

const Images = [
  {
    'name': 'Four people sitting around a table with cocktails smiling and laughing',
    'url': '/images/bc-bar-01.jpg'
  },
  {
    'name': 'Three people cheers cocktails with a lens flare',
    'url': '/images/bc-bar-02.jpg'
  },
  {
    'name': 'Crafting a chocolate martini',
    'url': '/images/bc-bar-03.jpg'
  },
  {
    'name': 'Three men out of focus, talking and drinking',
    'url': '/images/bc-bar-04.jpg'
  },
]

const customSeo = {
    name: 'Visit the Bittercube Bar & Bazaar • Bittercube',
  }

export default function moslers(){
  return(
    <Layout>
      <Seo type="page" data={{
        title: customSeo.name,
      }} />
      <ImageHero content={HeaderContent} />
      <div className="container grid w-11/12 gap-6 md:grid-cols-2">
        <div className="overflow-hidden md:hidden">
          <ImageCarousel content={Images} />
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          <Image src='/images/bc-bar-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/bc-bar-02.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/bc-bar-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/bc-bar-04.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        </div>
        <div className="sticky top-0 grid gap-6 px-4 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <span className="label">5900 W north ave, MILWAUKEE, WI</span>
          <h2>Carefully Crafted Cocktails</h2>
          <p>The Bittercube Bar features a seasonal cocktail menu with fresh and unique ingredients. The cocktails were designed to pair with each of the food vendors across the market. Beyond cocktails, enjoy Midwest beers, an eclectic collection of wines, and a plethora of non-alcoholic cocktail options. </p>
          <p>Also housed at the bar is the Bittercube Bazaar, a unique liquor store featuring Bittercube Bitters, Heirloom Liqueurs, carry-out cocktails for home consumption, and a curated list of our favorite spirits.</p>

          {/* <p className="label">
            Located at<br />5900 W north ave<br />
            <br /><span className="inline-block mt-6">AT THE NORTH AVENUE MARKET</span>
          </p> */}
          <p className="label">Follow us online<br />@BITTERCUBEBAZAAR</p>
          <Link to="https://www.toasttab.com/north-avenue-market-5900-west-north-avenue/v3" className="m-0 ml-0 btn btn-action">Order online now</Link>
          <a href="mailto:mailto:INFO@BITTERCUBE.COM" target='_blank' className="m-0 ml-0 btn btn-action">Private Events</a>
          {/* <div className="text-ornament w-fit"></div>
          <p className="label ">
            <a href="tel:4142931231" target="_blank" className="text-gold hover:text-dark">414.293.1231</a><br />
            <a href="mailto:ANTHONY@BITTERCUBE.COM" target="_blank" className="text-gold hover:text-dark">ANTHONY@BITTERCUBE.COM</a>
          </p>
          <p className="label">Follow us online<br />@BITTERCUBEBAZAAR</p> */}

        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <HorizontalSeperator />
      </div>
      <div className="container grid max-w-lg grid-cols-1 gap-6 xl:grid-cols-2 xl:max-w-none">
        <div className="flex flex-col items-center justify-center max-w-md gap-6 mx-auto text-center">
          <h2>Check out the seasonal cocktail menus</h2>
        </div>

        <TabSection content={TabContent} />
      </div>
     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex gap-2">
                <Link to="/places/moslers" className="btn btn-action">Mosler's Vault</Link>
                <Link to="/places/apothecary"  className="btn btn-action">The Apothecary</Link>
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
