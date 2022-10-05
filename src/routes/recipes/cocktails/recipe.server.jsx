import { Layout } from "../../../components/Layout.server";
import NavigationInterior from "../../../components/global/NavigationInterior.server";
import image from '../../../assets/bittercube-cocktail.jpg'
import { Link, Image } from "@shopify/hydrogen"
import TabSection from "../../../components/sections/TabSection.client";
import CardCarousel from "../../../components/sections/CardCarousel.client";
import WholesaleBitters from "../../../components/sections/WholesaleBitters";
import Arrow from "../../../components/global/icons/Arrow.client"
import SplitBgVert from "../../../components/sections/SplitBgVert.client";


const TabContent = [
  {
    'label': 'ingredients',
    'contentHtml': '<h6>Made With</h6><p>Wild cherry bark, Indonesian vanilla bean, fresh orange peel, burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'ApplicatIdeas',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  }
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

export default function Recipe(){
  return(
    <Layout>
      <NavigationInterior />
      <div className="container flex items-center gap-2 pb-6 max-w-screen-2xl">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/shop/bitters">Recipes</Link>
        <Arrow />
        <Link className="label" to="/shop/bitters">Cocktails</Link>
      </div>

      <div className="container grid grid-cols-2 gap-6 pt-0 max-w-screen-2xl">
        <div className="grid gap-6">
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <span className="label">Citrusy</span>
          <h2>Oldest Pal</h2>
          <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
          <Link to="/shop/bitters/product" className="ml-0 btn btn-action">Get the bitters</Link>
          <div className="flex flex-col items-start justify-center gap-6 label">
            <div className="block text-vertical">How</div>
            <div className="pl-1">to</div>
            <div className="block text-vertical">craft</div>
          </div>
          <hr className="my-6"/>
          <h3>More Information</h3>
          <div>
            <TabSection content={TabContent} />
          </div>
        </div>
      </div>
      <div className="container relative pt-0">
        <hr />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recommended
        </div>

      </div>
      <CardCarousel />
      <SplitBgVert content={SplitBgContent} />
      <WholesaleBitters />
    </Layout>
  )
}