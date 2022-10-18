import { Layout } from "../../../components/Layout.server"
import NavigationInterior from "../../../components/global/NavigationInterior.server"
import { Link, Image } from "@shopify/hydrogen"
import ThreeColumnFeature from "../../../components/sections/ThreeColumnFeature.client"
import CardCarousel from "../../../components/sections/CardCarousel.client"
import WholesaleBitters from "../../../components/sections/WholesaleBitters"
import TabSection from "../../../components/sections/TabSection.client"
import Arrow from "../../../components/global/icons/Arrow.client"
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client"
import SplitBgVert from "../../../components/sections/SplitBgVert.client"

const TabContent = [
  {
    'label': 'ingredients',
    'contentHtml': '<h6>Made With</h6><p>Wild cherry bark, Indonesian vanilla bean, fresh orange peel, burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'Application Ideas',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
]
const ThreeColumnFeaturedContent = {
  'headline': 'use to craft unique cocktails',
  'description': 'Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'ctaLabel': 'See all recipes',
  'ctaLink': '/recipes',
  'background': 'forest',
  'image': '',
  'navHeadline': 'Craft a cocktail',
  'padding': '12',
  'border': '2',
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'special tonic 12',
    'link': '/recipes/cocktails/recipe',
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

export default function Product(){
  return(
    <Layout>
      {/* <NavigationInterior /> */}
      <div className="container flex items-center gap-2 pb-6 max-w-screen-2xl">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop">shop</Link>
        <Arrow />
        <Link className="label" to="/shop/bitters">Bitters</Link>
      </div>
      <div className="container grid gap-6 pt-0 lg:grid-cols-2 max-w-screen-2xl">
        <div className="hidden lg:grid lg:gap-6">
          <Image src='/images/product.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src='/images/product.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <div className="h-[500px]">
            <span className="label">Bittercube</span>
            <h2>Bittercube Cherry Bark Vanilla Bitters</h2>
            <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
            <button href="#" className="btn btn-action" disabled>Add to cart</button>
          </div>

          {/* <HorizontalSeperator />
          <h3>More Information</h3>
          <TabSection content={TabContent} /> */}
        </div>
      </div>
      <ThreeColumnFeature  content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
      <div className="relative w-11/12 pt-0 mx-auto mt-20">
        <HorizontalSeperator />

        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recipe Collection
        </div>

      </div>
      <CardCarousel />
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />


    </Layout>
  )
}