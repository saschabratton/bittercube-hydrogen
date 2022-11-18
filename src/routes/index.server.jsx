import { Link, Image, CacheLong, Seo } from "@shopify/hydrogen"
import { Layout, HomeHero } from '@server'

import ScrollingBanner from "../components/ScrollingBanner.client";
import ThreeColumnFeature from "../components/sections/ThreeColumnFeature.client";
import BittersCarousel from "../components/home/BittersCarousel.client";
import VerticalSeparator from "../components/animations/VerticalSeparator.client";
import SignUp from "../components/sections/SignUp.client";
// ----------------------------------------------------------------------

const ThreeColumnFeaturedContent = {
  'headline': 'Interested in visiting a Bittercube Venue?',
  'description': 'Bittercube operates a cocktail shop, two bars, and a bitters manufacturing facility in Milwaukee, Wisconsin.',
  'ctaLabel': 'See our Places',
  'ctaLink': '/places',
  'background': 'dark',
  'navHeadline': 'Visit our places',
  'padding': '12',
  'border': '2',
  'image': '/images/home-places.jpg',
  'imageAlt': "Mosler's Vault"
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'BITTERCUBE BAR & BAZAAR',
    'link': '/places/bar',
  },
  {
    'linkLabel': "Mosler's Vault",
    'link': '/places/moslers',
  },
  {
    'linkLabel': "The Apothecary",
    'link': '/places/apothecary',
  },
]
const SignUpContent = {
  'contentHtml': '<h2>Quick Diddy Prefooter Kicker</h2><p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>',
  'ctaLabel': '',
  'ctaLink': '',
}

const customSeo = {
    name: 'Bittercube • Making drinks come true since 2009',
  }

export default function Home({response}) {
  response.cache(CacheLong())
  return (
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
        }} />
      <HomeHero content={"Making drinks come true since 2009"} />
      <ScrollingBanner />
      <div className="relative w-11/12 mx-auto">
        <div className="container relative z-10 grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-6 text-center lg:p-28">
            <p className="text-3xl uppercase">Slow-crafted<br />ARTISANAL - unique<span className="sr-only">Established 2009</span></p>
            <Image src='/images/established2009.svg' width={225} height={50} alt="2009" role="presentation" />
          </div>
          <div className="flex flex-col items-center justify-center text-center md:p-16">
            <p className="md:max-w-lg">We create innovative, densely flavored bitters through thoughtful sourcing, meticulous production, and ongoing research. Elevate your next cocktail with Bittercube.</p>
            <Link to="/about" className="items-center hidden gap-2 mx-auto md:flex btn label group w-fit">About Us
            <div className="btn-arrow"></div>
            </Link>
          </div>
        </div>
        <VerticalSeparator content={"Shop"} />
      </div>
      <div className="container pb-0 text-center max-w-screen-2xl">
        <h2 className="max-w-4xl mx-auto">Visit the shop to learn more about the bitters, browse cocktail kits, and check out brand collaborations.</h2>
        <Link to="/shop/bitters" className="btn btn-action">Shop Bitters</Link>
      </div>
      <div className="pt-0 pb-20 mx-auto md:w-11/12">
        <BittersCarousel />
      </div>

      <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}
