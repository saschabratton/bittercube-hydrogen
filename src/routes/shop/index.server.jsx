import { Layout } from "../../components/Layout.server";
import PatternHero from "../../components/headers/PatternHero.server";
import SubNav from "../../components/global/SubNav.server";
import SplitBgVert from "../../components/sections/SplitBgVert.client";
import WholesaleBitters from "../../components/sections/WholesaleBitters";
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import CardCarousel from "../../components/sections/CardCarousel.client";
import { Link, Image } from "@shopify/hydrogen";
import CollectionsNav from "../../components/headers/CollectionsNav.server";


const HeaderText = ("The most distinct lineup of bitters in the world.")
const pageNav = [
  { label: 'Bitters', link: '/shop/bitters'},
  { label: 'Curated Kits', link: '/shop/bitters'},
  { label: 'Special Editions & Collaborations', link: '/shop/bitters'},
  { label: 'Accesories', link: '/shop/bitters'},
  { label: 'Shop All', link: '/shop/bitters'}
]
const alternatingContent = [
  {
    'title': 'slow-crafted bitters',
    'description': 'Bold, balanced, densely flavored bitters made by hand. Shop the most distinctive lineup of aromatic, spicy, and citrus bitters.',
    'cta': 'Shop Bitters',
    'ctaLink': 'shop/bitters-1',
    'contentHtml': '',
  },
  {
    'title': 'Curated cocktail kits',
    'description': 'Curated cocktail kits contain the necessary ingredients to create a number of unique cocktails, including syrups, bitters, recipes, and instructions.',
    'cta': 'Shop Kits',
    'ctaLink': 'shop/curated-kits',
    'contentHtml': '',
  },
  {
    'title': 'Special Editions & Collaborations',
    'description': 'Unique collection of special edition bitters, as well as collaborations with restaurant groups, bars, and other brands. ',
    'cta': 'Special Editions',
    'ctaLink': '/shop/special-editions-collaborations',
    'contentHtml': ''
  },
]
const SplitBgContent = {
  'topLabel': 'FEELING SPIRITED?',
  'topHeadline': 'Shop Our Local Milwaukee Bazaar',
  'topDescription': '',
  'topCtaLabel': 'Shop for local pick-up',
  'topCtaLink': '#',
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
      {/* <SubNav navigation={pageNav} /> */}
      <CollectionsNav />
      <div className="container">
        <div className="grid grid-cols-1 gap-6 pb-16 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-5xl capitalize h1">General shop headline goes here</h2>
            <Link to="/shop/bitters-1" className="flex gap-2 label group w-fit">Explore the Bittercube lineup
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