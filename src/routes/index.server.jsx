import { propTypes } from "react";
import { Layout } from "../components/Layout.server";
import FeaturedCollections from "../components/FeaturedCollections.server";
import HomeHero from "../components/headers/HomeHero.server";
import ScrollingBanner from "../components/ScrollingBanner.client";
import ThreeColumnFeature from "../components/sections/ThreeColumnFeature.client";
import established from '../assets/established2009.svg'
import { Link, Image } from "@shopify/hydrogen";
import Navigation from "../components/global/Navigation.server";
import wordmark from '../assets/wordmark-reversed.svg'
import BittersCarousel from "../components/sections/BittersCarousel.client";
import VerticalSeparator from "../components/animations/VerticalSeparator.client";
import SignUp from "../components/sections/SignUp.client";
import HorizontalSeperator from "../components/headers/HorizontalSeperator.client";


const HeaderText = ("A hearty intro headline goes right here")
const ThreeColumnFeaturedContent = {
  'headline': 'General Places Headline Goes Right Here',
  'description': 'Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'ctaLabel': 'See our Places',
  'ctaLink': '/places',
  'background': 'dark',
  'image': '',
  'navHeadline': 'Visit our places',
  'padding': '12',
  'border': '2',
}

const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'The Bazaar',
    'link': '/places',
  },
  {
    'linkLabel': 'Bittercube Bar at North Ave',
    'link': '/places',
  },
  {
    'linkLabel': 'The Apothecary',
    'link': '/places',
  },
]

const SignUpContent = {
  'contentHtml': '<h2>Quick Diddy Prefoooter Kicker</h2><p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>',
  'ctaLabel': '',
  'ctaLink': '',
}



export default function Home() {
  return (
    <Layout>
      <HomeHero content={HeaderText} />
      <ScrollingBanner />
        <div className="container relative mx-auto overflow-hidden max-w-screen-2xl">
          <div className="container relative z-10 grid grid-cols-1 gap-6 py-0 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-6 text-center lg:p-28">
            <p className="text-3xl uppercase">Slow-crafted<br />and artisnal bitters <span className="sr-only">Espablished 2009</span></p>
            <Image src={ established } width={225} height={50} alt="" role="presentation" />
          </div>
          <div className="flex flex-col items-center justify-center text-center md:p-16">
            <p className="md:max-w-lg">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
            <Link to="/about" className="flex gap-2 mx-auto btn label group w-fit">About Us
              <div className="btn-arrow"></div>
            </Link>
          </div>
          </div>
          <VerticalSeparator />
        </div>

        <div className="container relative pt-0 max-w-screen-2xl">
           <HorizontalSeperator />
          <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
            Recipe Collection
          </div>
        </div>

        <div className="container pb-0 text-center max-w-screen-2xl">

          <h2 className="max-w-lg mx-auto">Bittercube Collection goes right here</h2>
          <Link to="/shop/bitters" className="btn btn-action">Shop Bitters</Link>
        </div>
        <div className="pb-20">
          <BittersCarousel />
        </div>

        {/* <FeaturedCollections /> */}
        <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />

        <div className="container text-center">[ recipe stuff ]</div>

        <SignUp content={SignUpContent}/>
    </Layout>
  );
}

// ThreeColumnFeaturedLinks.propTypes = {
//   label: propTypes.string
// }