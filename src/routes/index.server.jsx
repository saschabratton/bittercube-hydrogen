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

import VerticalSeparator from "../components/animations/VerticalSeparator.client";


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



export default function Home() {
  return (
    <Layout>
      <HomeHero content={HeaderText} />
      <ScrollingBanner />
        <div className="container relative mx-auto overflow-hidden border max-w-screen-2xl">
          <div className="container relative z-10 grid grid-cols-1 gap-6 py-0 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-6 text-center lg:p-28">
            <p className="text-3xl uppercase">Slow-crafted<br />and artisnal bitters <span className="sr-only">Espablished 2009</span></p>
            <Image src={ established } width={225} height={50} alt="" role="presentation" />
          </div>
          <div className="flex flex-col items-center justify-center text-center md:p-16">
            <p className="md:max-w-lg">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
            <Link to="/about" className="w-24 btn btn-arrow">About Us</Link>
          </div>
          </div>
          <VerticalSeparator />
        </div>
        <div className="container max-w-md mx-auto text-center">
          <h2>Bittercube Collection goes right here</h2>
          <Link to="/" className="btn btn-action">Shop Bitters</Link>
        </div>
        <FeaturedCollections />
        <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />

    </Layout>
  );
}

// ThreeColumnFeaturedLinks.propTypes = {
//   label: propTypes.string
// }