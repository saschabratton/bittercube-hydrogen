import { Layout } from "../components/Layout.server"
import ImageHero from "../components/headers/ImageHero.server"
import ThreeColumnFeature from "../components/sections/ThreeColumnFeature.client";
import SplitBgVert from "../components/sections/SplitBgVert.client"
import VerticalSeparator from "../components/animations/VerticalSeparator.client";
import { Image } from "@shopify/hydrogen"


const HeaderText = ("Creating exceptional bitters since 2009")
const ThreeColumnFeaturedContent = {
  'headline': 'partnerships and Collaborations',
  'description': 'We collaborate with other brands on various projects, including custom bitters blends, co-branded products, and more. We also sell bitters in bulk to companies in need of slow-crafted bitters.',
  'ctaLabel': 'Let\'s Collaborate',
  'ctaLink': '/contact',
  'background': 'forest',
  'image': '',
  'navHeadline': 'our partners',
  'padding': '0',
  'border': '0'
}
const SplitBgContent = {
  'topLabel': 'WHERE THE BITTERS ARE MADE',
  'topHeadline': 'The Apothecary',
  'topDescription': 'Our homebase is a bustling 9,000 square foot building in Milwaukee where Bittercube Bitters are produced. The apothecary also houses the company offsices, and a storefront for bitters, tools, and non-alcoholic cocktail ingredients.',
  // 'bottomCtaLabel': 'Shop for local pick-up',
  'bottomCtaLink': '#',
  'bottomLabel': '',
  'bottomHeadline': '',
  'featuredImage': '',
  'background': 'forest',
  'padding': '0',
  'bottomHtml': '<h5>Offices</h5><h5>MANUFACTURING</h5><h5>BITTERS STOREFRONT</h5><h5>RESEARCH & DEVELOPMENT</h5>',
}
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

export default function about() {
   return (
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="relative w-11/12 mx-auto">
        <div className="container relative mt-20">
          <div className="absolute top-0 right-0">
            <Image src='/emblems/innovative-thoughtful.svg' width={101} height={111} alt="x" role="presentation" />
          </div>
          <div className="grid grid-cols-1 gap-16 py-16 text-center md:grid-cols-2">
              <h2 className="max-w-lg mx-auto">created in Milwaukee, Wisconsin, by hand with real ingredients.</h2>
            <div className="flex items-center justify-center">
              <p className="max-w-md h3">Our mission is to create innovative, densely flavored bitters through thoughtful sourcing, meticulous production, and ongoing research - and to inspire elevated drinking experiences.</p>
            </div>
          </div>
        </div>
        <VerticalSeparator />
      </div>

      {/* <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-center text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit w-60">
          Our Story
        </div>
      </div> */}

      <div className="container grid max-w-screen-sm grid-cols-1 gap-6 lg:grid-cols-2 lg:max-w-screen-2xl">


        {/* TODO: images as a carousel on mobile  */}
        <div className="hidden gap-6 lg:grid">
          <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src='/images/about.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>


        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <div className="absolute top-0 right-0">
            <span className="block text-3xl text-center font-decorative text-gold">Bold & Balanced<br />Bitters</span>
          </div>
          <span className="label">Founded in 2009</span>
          <h2>Two bartenders with a shared vision set out to produce the most distinctive lineup of bitters in the world.</h2>
          <p className="h4">BITTERCUBE IS FEATURED ON COCKTAILS MENUS FROM COAST TO COAST</p>
          <p>Over the last decade, the company has built relationships with farmers, botanical suppliers, bartenders, and foodies across the globe, and continues to innovate with new flavors, collaborations, business lines, and services.</p>
          <p>Bittercube has been featured in the New York Times, Martha Stewart’s Everyday Food, Playboy, Imbibe Magazine, Timeout, Bon Appétit, Chicago Tribune, Bloomberg BusinessWeek, GO – AirTran Inflight Magazine, Southwest Magazine, NPR, and Daily Candy, among many other publications.</p>
          <p>As a company, Bittercube offers employees competitive health and dental insurance and pays for 50% of coverage, provides PTO, paid holidays, quarterly revenue share, a 401K package with match, paid parental leave, and operates on a four day work week.</p>
        </div>
      </div>
      <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
      <div className="relative">
         <div className="absolute left-[77%] top-[20%] z-10">
          <Image src='/emblems/botanicals-emblem.svg' width={101} height={111} alt="x" role="presentation" />
        </div>
        <SplitBgVert content={SplitBgContent} />
      </div>


    </Layout>
   )
}