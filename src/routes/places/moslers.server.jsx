import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import { Image } from "@shopify/hydrogen"
import TabSection from "../../components/sections/TabSection.client"
import { Link, Head } from "@shopify/hydrogen"
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client"
import SignUpForm from "../../components/global/SignUpForm.client"


const HeaderContent ={
  'text': "Mosler's Vault",
  'image': '/images/moslersvault-01.jpg',
}
const TabContent = [
  {
    'label': 'Signature',
    'contentHtml': '<dl><dt>Queen of the Lemon Herbs</dt><dd>rujero singani, lemon myrtle infused gin, lime strength grapefruit, cinnamon, blackstrap bitters, bergamot oil (zero proof variation with amass riverine)</dd></dl><dl><dt>Do We Even Need Flutes?</dt><dd>armagnac, strawberry infused apple brandy, lemon, peach blossom honey, pineapple amaro, jamaican no. 2 bitters, sparkling wine</dd></dl><dl><dt>Flamed Gin Sour</dt><dd>gin, lemon, rosemary syrup, egg white, flamed genepy & alchermes, all day bitters</dd></dl><dl><dt>Firebird</dt><dd>mango infused sotol, lime, state line aperitivo, disco inferno</dd></dl><dl><dt>Reyes Rum Fizz</dt><dd>shōchū, rum, lemon, passion fruit liqueur, golden yunnan tea syrup, cherry bark vanilla bitters, egg yolk, seltzer, cheese foam</dd></dl><dl><dt>Mosler’s Manhattan</dt><dd>mahlab infused house american whiskey blend, cocchi torino, pompona cbv, flamed orange oil</dd></dl><dl><dt>Fennel Pollen Sazerac</dt><dd>rye whiskey, cognac, fennel pollen syrup, trinity bitters, lemon oil, absinthe</dd></dl><dl><dt>In the Cloud Forest</dt><dd>el dorado 8 yr rum, rhum barbancourt 3 star, ten to one dark rum, espresso, dry vermouth, pineapple amaro, orange bitters, cardamom</dd></dl>',
  },
]

export default function moslers(){

  return(
    <Layout>
      <ImageHero content={HeaderContent} />
      <div className="container grid w-11/12 grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
        {/* <Image src='/images/moslersvault-01.jpg' width={366} height={455} alt='alt' className="object-cover w-full" /> */}
        <Image src='/images/moslersvault-02.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/moslersvault-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        <Image src='/images/moslersvault-04.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
        </div>
        <div className="sticky top-0 grid gap-3 py-20 h-fit lg:px-20">
          <span className="label">LOCATED ON MILWAUKEE’S WEST-SIDE</span>
          <h2>Intimately Elevated Cocktails</h2>
          <p className="label">
            LOCATED IN THE BASEMENT VAULT AT<br />5900 W NORTH AVE<br />MILWAUKEE, WI<br /><span className="inline-block mt-6">AT THE NORTH AVENUE MARKET</span>
          </p>
          <div className="text-ornament w-fit"></div>
          <p className="label ">
            <a href="tel:4142931231" target="_blank" className="text-gold hover:text-dark">414-293-1231</a><br />
            INTERESTED IN BOOKING A PRIVATE EVENT?
            <a href="mailto:MOSLERSVAULT@BITTERCUBE.COM" target="_blank" className="text-gold hover:text-dark">MOSLERSVAULT@BITTERCUBE.COM</a>
          </p>
          <p className="label">Follow us online<br />@BITTERCUBEBAZAAR</p>
          <p>Mosler’s Vault is a cocktail bar in the confines of the former United Federal Savings & Loan bank vault, built in 1949. With cream city brick walls, and a moss ceiling, the space is both intimate and warm. Named after the vault door manufacturer, the elevated cocktail experience showcases a regularly rotating menu of rare and unique ingredients.</p>
          <p>Space is limited, and reservations are recommended. Walk-ins are welcome when space is available. </p>
          {/* <a href="https://moslers-vault.resos.com/booking" className="ml-0 btn btn-action">Book a table</a> */}
          <h3>BOOK A RESERVATION NOW</h3>
          <a id="booking-widget-2" href="https://moslers-vault.resos.com/booking" data-lang="en" data-restaurant-id="GXZgycWvMCudCHBd4" data-domain="moslers-vault.resos.com">Book a table</a>
            <div id="booking-script-2">
            </div>
            <Head>
              <script type="text/javascript"
                src='https://moslers-vault.resos.com/embed/booking/widget.js?ts="+new Date().getTime()'
              />
            </Head>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <HorizontalSeperator />
      </div>

      <div className="container grid grid-cols-2 ">
          <div className="flex flex-col items-center justify-center max-w-md gap-6 mx-auto text-center">
            <h2>Take a look at our craft cocktail menu</h2>
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
                <Link to="/places/bar" className="btn btn-action">Bittercube Bar</Link>
                <Link to="/places/apothecary"  className="btn btn-action">The Apothecary</Link>
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





