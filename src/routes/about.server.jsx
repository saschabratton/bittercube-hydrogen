import { Layout } from "../components/Layout.server"
import ImageHero from "../components/headers/ImageHero.server"
import ThreeColumnFeature from "../components/sections/ThreeColumnFeature.client";
import SplitBgVert from "../components/sections/SplitBgVert.client"
import Navigation from "../components/global/Navigation.server";
import HorizontalSeperator from "../components/headers/HorizontalSeperator.client";
import VerticalSeparator from "../components/animations/VerticalSeparator.client";
import image from '../assets/images/about.jpg'
import { Image } from "@shopify/hydrogen"
import Emblem from '../assets/emblems/innovative-thoughtful.svg'
import Emblem2 from '../assets/emblems/botanicals-emblem.svg'

const HeaderText = ("About Bittercube Headline goes Here make it good")
const ThreeColumnFeaturedContent = {
  'headline': 'our partnerships and Collaborations',
  'description': 'Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'ctaLabel': 'Let\'s Collaborate',
  'ctaLink': '/contact',
  'background': 'forest',
  'image': '',
  'navHeadline': 'our partners',
  'padding': '0',
  'border': '0'
}
const SplitBgContent = {
  'topLabel': 'Where it all started',
  'topHeadline': 'The Apothecary',
  'topDescription': 'Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'bottomCtaLabel': 'Shop for local pick-up',
  'bottomCtaLink': '/',
  'bottomLabel': '',
  'bottomHeadline': '',
  'bottomCtaLabel': '',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'forest',
  'padding': '0',
  'bottomHtml': '<h5>Tours</h5><h5>Tastings and sampling</h5><h5>Corporate events</h5><h5>Classes</h5>',
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'Heirloom',
    'link': '/places',
  },
  {
    'linkLabel': 'Discocube',
    'link': '/places',
  }
]

export default function about() {
   return (
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container relative mt-20">
        <div className="absolute top-0 right-0">
          <Image src={Emblem} width={101} height={111} alt="" role="presentation" />
        </div>
        <div className="grid grid-cols-1 gap-6 py-16 text-center md:grid-cols-2">
            <h2 className="max-w-lg">created in Milwaukee, Wisconsin, by hand with real ingredients.</h2>
          <div className="flex items-center justify-center">
            <p className="max-w-md h3">Our mission is to create innovative, densely flavored bitters through thoughtful sourcing, meticulous production, and ongoing research.</p>
          </div>
        </div>
        <VerticalSeparator />
      </div>

      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-center text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit w-60">
          Our Story
        </div>
      </div>

      <div className="container grid grid-cols-2 gap-6 max-w-screen-2xl">
        <div className="grid gap-6">
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <div className="absolute top-0 right-0">
            <span className="block text-3xl text-center font-decorative text-gold">Inspire elevated <br />drinking experiences.</span>
          </div>
          <span className="label">Founded in 2009</span>
          <h2>two bartenders with a shared vision for what bold & balanced bitters could be.</h2>
          <p className="h4">relationships with farmers, botanical suppliers, bartenders, and foodies across the globe</p>
          <p>Over the last decade, the company has built relationships with farmers, botanical suppliers, bartenders, and foodies across the globe, and continues to innovate with new flavors, collaborations, business lines and services.</p>
          <p>Over the years, Bittercube has been featured in the New York Times, Martha Stewart’s Everyday Food, Playboy, Imbibe Magazine, Timeout, Bon Appétit, Chicago Tribune, Bloomberg BusinessWeek, GO – AirTran Inflight Magazine, Southwest Magazine, NPR, and Daily Candy, among many other publications.</p>
        </div>
      </div>
      <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
      <div className="relative">
         <div className="absolute left-[77%] top-[20%] z-10">
          <Image src={Emblem2} width={101} height={111} alt="" role="presentation" />
        </div>
        <SplitBgVert content={SplitBgContent} />
      </div>


    </Layout>
   )
}