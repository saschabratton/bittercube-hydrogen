import { Layout } from "../../components/Layout.server";
import PatternHero from "../../components/headers/PatternHero.server";
import SubNav from "../../components/global/SubNav.server";
import SplitBgVert from "../../components/sections/SplitBgVert.client";
import WholesaleBitters from "../../components/sections/WholesaleBitters";
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import CardCarousel from "../../components/sections/CardCarousel.client";
import { Link, Image } from "@shopify/hydrogen";

const HeaderText = ("Shop")
const pageNav = [
  { label: 'Bitters', link: '/shop/bitters'},
  { label: 'Curated Kits', link: '/shop/bitters'},
  { label: 'Special Editions & Collaborations', link: '/shop/bitters'},
  { label: 'Accesories', link: '/shop/bitters'},
  { label: 'Shop All', link: '/shop/bitters'}
]
const alternatingContent = [
  {'title': 'artisnal bitters', 'description': '', 'cta': 'Shop Bitters',
   'ctaLink': '/shop/bitters',
   'contentHtml': '',
  },
  {'title': 'Curated cocktail kits', 'description': '', 'cta': 'Shop Kits',  'ctaLink': '/shop/bitters','contentHtml': '',},
  {'title': 'Special Editions & Collaborations', 'description': '', 'cta': 'Special Editions',  'ctaLink': '/shop/bitters','contentHtml': '',},
]
const SplitBgContent = {
  'topLabel': 'FEELING SPIRITED?',
  'topHeadline': 'Shop Our Local Milwaukee Bazaar',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '/',
  'bottomLabel': 'Get more from Bittercube',
  'bottomHeadline': 'Subscription Plans',
  'bottomCtaLabel': 'See Plans',
  'bottomCtaLink': '',
  'featuredImage': '',
  'background': 'dark',
  'padding': '12',
  'bottomHtml': ''
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
            <Link to="/shop/bitters" className="flex gap-2 label group w-fit">Shop All
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex items-center justify-center text-center">
            <span className="text-4xl font-decorative text-gold">Made With<br />Real Botanicals</span>
          </div>
        </div>
        <div className="relative">
          <div className="center-absolute top-1/3">
            <Image src='/emblems/currated-cocktails.svg' width={101} height={111} alt="" role="presentation" />
          </div>
          <AlternatingTextImage content={alternatingContent} />
        </div>
      </div>
      <CardCarousel />
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />
    </Layout>
  )
}