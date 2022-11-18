import { Link, Image, CacheLong, Seo } from "@shopify/hydrogen"
import { ImageHero, Layout } from '@server'
import { HorizontalSeperator } from "@client"

import VerticalSeparator from "../components/animations/VerticalSeparator.client"
import ImageCarousel from "../components/sections/ImageCarousel.client"
// ----------------------------------------------------------------------
const HeaderContent ={
  'text': 'Creating exceptional bitters since 2009',
  'image': '/images/about-hero.jpg',
}

const ThreeColumnFeaturedContent = {
  'headline': 'partnerships and Collaborations',
  'description': 'We collaborate with other brands on various projects, including custom bitters blends, co-branded products, and more. We also sell bitters in bulk to companies in need of slow-crafted bitters for RTD cocktails, and other packaged products. Check out a few of our collaborations!',
  'ctaLabel': 'Let\'s Collaborate',
  'ctaLink': '/contact',
  'background': 'forest',
  'image': '/images/about-collaborations.jpg',
  'navHeadline': 'RECENT PARTNERS',
  'padding': '0',
  'border': '0'
}
const SplitBgContent = {
  'topLabel': 'WHERE THE BITTERS ARE MADE',
  'topHeadline': 'The Apothecary',
  'topDescription': 'Our homebase is a bustling 9,000 square foot building in Milwaukee where Bittercube Bitters are produced. The apothecary also houses the company offsices, and a storefront for bitters, tools, and non-alcoholic cocktail ingredients.',
  'bottomCtaLabel': 'The Apothecary',
  'bottomCtaLink': '/places/apothecary',
  'bottomLabel': '',
  'bottomHeadline': '',
  'featuredImage': '',
  'background': 'forest',
  'padding': '0',
  'bottomHtml': '<h5>Offices</h5><h5>MANUFACTURING</h5><h5>BITTERS STOREFRONT</h5><h5>RESEARCH & DEVELOPMENT</h5>',
}


// TODO: left align these
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'Heirloom',
    'link': 'https://heirloomliqueurs.com/',
  },
  {
    'linkLabel': 'Discocube',
    'link': 'https://www.discocubes.com/',
  },
  {
    'linkLabel': 'SANTA TERESA RUM',
    'link': '#',
  },
  {
    'linkLabel': 'BURLAP & BARREL',
    'link': '#',
  },
  {
    'linkLabel': 'LIVEWIRE',
    'link': '#',
  },
  {
    'linkLabel': 'TAPPED MAPLE SYRUP',
    'link': '#',
  },
  {
    'linkLabel': 'BITTERS BLENDS',
    'link': '#',
  },
]
const OrnamentText = "ABOUT BITTERCUBE"

const Images = [
  {
    'name': 'alt',
    'url': '/images/about-01-notation.jpg'
  },
  {
    'name': 'alt',
    'url': '/images/about-02.jpg'
  },
  {
    'name': 'alt',
    'url': '/images/about-03.jpg'
  },
  {
    'name': 'alt',
    'url': '/images/about-04.jpg'
  },
  {
    'name': 'alt',
    'url': '/images/about-05.jpg'
  },
]
const customSeo = {
    name: 'About Bittercube • Bittercube',
  }


export default function AboutPage({response}) {
  response.cache(CacheLong())
  return (
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <ImageHero content={HeaderContent} />
      <div className="relative w-11/12 mx-auto">
        <div className="container relative mt-20">
          <div className="absolute top-0 right-0">
            <Image src='/emblems/innovative-thoughtful.svg' width={101} height={111} alt="x" role="presentation" />
          </div>
          <div className="grid grid-cols-1 gap-16 py-16 text-center md:grid-cols-2">
              <h2 className="max-w-lg mx-auto">Created in Milwaukee, Wisconsin, by hand with real ingredients.</h2>
            <div className="flex items-center justify-center">
              <p className="max-w-md h3">Our mission is to create innovative, densely flavored bitters through thoughtful sourcing, meticulous production, and ongoing research - and to inspire elevated drinking experiences.</p>
            </div>
          </div>
        </div>
        <VerticalSeparator content={OrnamentText} />
      </div>

      {/* <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-center text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit w-60">
          Our Story
        </div>
      </div> */}

      <div className="container grid w-11/12 gap-6 md:grid-cols-2">
        <div className="md:hidden">
          <ImageCarousel content={Images} />
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          <Image src='/images/about-01-notation.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src='/images/about-02.jpg' width={366} height={455} alt='alt' className="object-cover w-full" />
          <Image src='/images/about-03.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src='/images/about-04.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src='/images/about-05.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>


        <div className="sticky top-0 grid gap-6 px-4 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <div className="absolute top-0 -right-4">
            <Image src="/images/handwritten/about-boldandbalancedbitters.svg" alt=" " width={200} height={111}  role="presentation" />
          </div>
          <span className="label">Founded in 2009</span>
          <h2>Two bartenders with a shared vision set out to produce the most distinctive lineup of bitters in the world.</h2>
          <p className="h4">BITTERCUBE IS FEATURED ON COCKTAILS MENUS FROM COAST TO COAST</p>
          <p>Over the last decade, the company has built relationships with farmers, botanical suppliers, bartenders, and foodies across the globe, and continues to innovate with new flavors, collaborations, business lines, and services.</p>
          <p>Bittercube has been featured in the New York Times, Martha Stewart’s Everyday Food, Playboy, Imbibe Magazine, Timeout, Bon Appétit, Chicago Tribune, Bloomberg BusinessWeek, GO – AirTran Inflight Magazine, Southwest Magazine, NPR, and Daily Candy, among many other publications.</p>
          <span className="label">SOCIAL IMPACT</span>
          <p>As a company, Bittercube believes all employees deserve a livable wage. We also offer competitive health and dental insurance and pay for 50% of coverage, provide PTO, paid holidays, quarterly revenue share, a 401K package with match, paid parental leave, and operate on a four day work week.</p>
          <p>We buy organic botanicals whenever possible, and source ingredients as close to origin as we can.  We also work with botanical suppliers that focus on sustainability and equity. After each batch of bitters is produced we give away as much of the botanical infusion as is wanted to companies for various products like candles, soap, infused syrups, etc. The remaining organic materials are composted. In 2021, we helped our compost partner divert more than 2 million lbs of organic material.</p>
          <p>We invested in a shredder that upcycles all cardboard shipped to us into sustainable packaging material. In addition, we use a 100% recycled and reusable paper cushioning, and together these products are what keep bitters safe during shipment to home consumers, bars and restaurants, and distributors. We ship bitters in cardboard boxes rather than plastic bags to mitigate plastic consumption. Beyond these initiatives, at our facility, we recycle as much as possible.</p>
          <p>Our eyedropper and dasher bottles are glass, and can be easily recycled. They also can be reused for bitters blends, sauces, vinaigrettes, you name it! As a way to mitigate waste, we also produce 32 oz refill bottles that are sold to bars and restaurants, and these bottles can be reused for syrups, and infusions.</p>
        </div>
      </div>


      <section className="bg-forest">
        <hr />
        <div className="container relative grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-20">
          <div className="flex flex-col justify-between gap-20">
            <div className="flex flex-col items-center mx-auto text-center">
              <h2 className="max-w-sm">Partnerships and Collaborations</h2>
              <div className="py-6 w-[16rem] md:w-[28rem]">
                  <HorizontalSeperator />
                </div>
              <p className="max-w-sm text-ornament">
                We collaborate with other brands on various projects, including custom bitters blends, co-branded products, and more. We also sell bitters in bulk to companies in need of slow-crafted bitters.
              </p>
            </div>
            <Image src='/images/about-collaborations.jpg' width={366} height={455} alt='A bottle of bitters and baking ingredients' className="object-cover w-full max-w-md mx-auto aspect-4/5 rounded-jumbo-sm" />
          </div>
          <div className="grid grid-cols-1 gap-16 md:gap-10 md:grid-cols-2">

            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>Heirloom</h3>
              <p className="my-2">Bittercube offshoot producing liqueurs</p>
              <a href="https://heirloomliqueurs.com/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>DISCO INFERNO</h3>
              <p className="my-2">Spicy cocktail enhancer collaboration</p>
              <a href="https://disco-inferno.co/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>SANTA TERESA</h3>
              <p className="my-2">Bespoke bitters blend for bars & restaurants</p>
              <a href="https://bevvy.co/articles/taste-test-santa-teresa-1796-cantinero-coffee-bitters/18851" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>WOLLERSHEIM</h3>
              <p className="my-2">Old Fashioned syrup featuring a custom blend of bitters</p>
              <a href="https://www.santateresarum.com/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>BURLAP & BARREL</h3>
              <p className="my-2">Collaborative single origin spice extracts</p>
              <a href="/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>LIVEWIRE</h3>
              <p className="my-2">Canned cocktail brand that features Bittercube in a number of cocktails</p>
              <a href="https://drinklivewire.com/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>TAPPED MAPLE SYRUP</h3>
              <p className="my-2">Collaborative maple syrup featuring CBV botanicals</p>
              <a href="https://www.santateresarum.com/" target='_blank' className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </a>
            </div>
            <div className="flex flex-col justify-start gap-1 text-left">
              <h3>BITTERS BLENDS</h3>
              <p className="my-2">Custom blends with restaurant groups, and bars</p>
              <Link to="/shop/special-editions-and-collaborations" className="flex justify-between gap-2 pt-0 text-base w-fit label group text-gold">Learn more
                <div className="btn-arrow btn-arrow-gold"></div>
              </Link>
            </div>



            <div className="pt-8 md:col-span-2">
              <HorizontalSeperator />
              <div className="grid grid-cols-1 py-8 md:grid-cols-2">
                <div className="flex items-center mx-auto text-lg label">
                  WANT TO WORK WITH US?
                </div>
                <Link to="/contact" className="btn btn-action">Let's Collaborate!</Link>
              </div>
            </div>
          </div>
        </div>
      </section>





  {/*
      <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} /> */}
      <div className="relative">
          <div className="absolute lg:left-[77%] lg:top-[20%] z-10 bottom-28 right-16">
          <Image src='/emblems/botanicals-emblem.svg' width={101} height={111} alt="x" role="presentation" />
        </div>
        {/* <SplitBgVert content={SplitBgContent} /> */}



      <section className="py-12 bg-paper">
      <div className="relative border-y-2 border-gold">
        <div className="center-absolute  w-0.5 h-full bg-gold hidden md:flex"></div>
        <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 ">

            <div className="flex flex-col justify-center flex-1 gap-8 text-left lg:px-20">
                <div className="flex flex-col justify-center gap-2 text-center">
                  <span className="label h4 text-gold">WHERE THE BITTERS ARE MADE</span>
                  <h2>The Apothecary</h2>
                  <p>Our homebase is a bustling 9,000 square foot building in Milwaukee where Bittercube Bitters are produced. The apothecary also houses the company offsices, and a storefront for bitters, tools, and non-alcoholic cocktail ingredients.</p>
                  <Link to="/places/apothecary" className="btn btn-action">The Apothecary</Link>
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
              <Image src='/images/about-apothecary.jpg' width={370} height={450} className='object-cover h-[30rem] w-96 rounded-2xl ' alt="A cocktail made with Bittercube Bitters" />
            </div>

        </div>
      </div>
    </section>



      </div>


    </Layout>
  )
}