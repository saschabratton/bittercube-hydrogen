import { Layout } from "../components/Layout.server";
import PatternHero from "../components/headers/PatternHero.server";
import SubNav from "../components/global/SubNav.server";
import SplitBgVert from "../components/sections/SplitBgVert.client";
import WholesaleBitters from "../components/sections/WholesaleBitters";
import AlternatingTextImage from "../components/sections/AlternatingTextImage.client";
import CardCarousel from "../components/sections/CardCarousel.client";
import { Link, Image } from "@shopify/hydrogen";

const HeaderText = ("Shop")

const pageNav = [
  { label: 'Bitters', link: '/'},
  { label: 'Curated Kits', link: '/'},
  { label: 'Special Editions & Collaborations', link: '/'},
  { label: 'Accesories', link: '/'},
  { label: 'Shop All', link: '/'}
]

const alternatingContent = [
  {'title': 'artisnal bitters', 'description': '', 'cta': 'Shop Bitters',  'ctaLink': '/',},
  {'title': 'artisnal bitters', 'description': '', 'cta': 'Shop Kits',  'ctaLink': '/',},
  {'title': 'Special Editions & Collaborations', 'description': '', 'cta': 'Special Editions',  'ctaLink': '/',},
]

const SplitBgContent = {
  'topLabel': 'Feeling Spirited',
  'topHeadline': 'Shop our local Milwaukee Bazaaz',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '/',
  'bottomLabel': 'Get more from Bittercube',
  'bottomHeadline': 'Subscription Plans',
  'bottomCtaLabel': 'See Plans',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'dark',
  'padding': '12'
}

export default function Home() {
  return (
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <div className="container">
        <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-5xl capitalize h1">General shop headline goes here</h2>
            <Link to="/" className="w-24 mx-0 btn btn-arrow">Shop All</Link>
          </div>
          <div className="flex items-center justify-center text-center">
            <span className="text-4xl font-decorative text-gold">Made With<br />Real Botanicals</span>
          </div>
        </div>
        <AlternatingTextImage content={alternatingContent} />
      </div>
      <CardCarousel />
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />
    </Layout>
  )
}