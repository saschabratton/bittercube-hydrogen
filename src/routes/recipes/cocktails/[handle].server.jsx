import { Layout } from "../../../components/Layout.server";
import {  gql, useShopQuery, Link, Image, CacheLong, useRouteParams, fetchSync } from "@shopify/hydrogen"
import TabSection from "../../../components/sections/TabSection.client";
import CardCarousel from "../../../components/sections/CardCarousel.client";
import WholesaleBitters from "../../../components/sections/WholesaleBitters";
import Arrow from "../../../components/global/icons/Arrow.client"
import SplitBgVertBlue from "../../../components/sections/SplitBgVertBlue.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";
import Nav from "../../../components/headers/Nav.client";

const TabContent = [
  {
    'label': 'ingredients',
    'contentHtml': '<dl><dt>Mix</dt><dd>2 oz Rye Whiskey</dd><dd>1/2 oz Sweet Vermouth</dd><dd>1/2 oz Heirloom Alchermes</dd><dd>2 dashes Bittercube Root Beer Bitters</dd></dl>',
  },
  {
    'label': 'Instructions',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'Get the supplies',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
]

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

export default function Recipe(){

  const {
    data: { shop },
    } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
  });

  // TODO: 404 redirect for non routes
  const {handle} = useRouteParams();

  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  const activeRecipe = recipes.find(recipe => recipe.slug === handle)

  return(
    <Layout>
      <Nav shop={shop}/>
      <div className="container flex items-center gap-2 pb-6 max-w-screen-2xl">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/recipes">Recipes</Link>
        <Arrow />
        <Link className="label" to="/recipes/cocktails">Cocktails</Link>
      </div>

      <div className="container grid grid-cols-2 gap-6 pt-0 max-w-screen-2xl">
        <div className="grid gap-6">
          <Image src={`https://lavish-turnip.cloudvent.net/${activeRecipe.image}`} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          {/* TODO: random dropper image  */}
          <Image src='/images/pour.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <span className="label">Citrusy</span>
          <h2>{activeRecipe.name}</h2>
          {activeRecipe.description &&
            <p>{activeRecipe.description}</p>
          }
          {activeRecipe.bitters.length > 0 &&
            <Link to="/shop/bitters/product" className="ml-0 btn btn-action">Get the bitters</Link>
          }
          <div className="flex flex-col items-start justify-center gap-6 label">
            <div className="block text-vertical">How</div>
            <div className="pl-1">to</div>
            <div className="block text-vertical">craft</div>
            <div className="-ml-0.5 rotate-90 bounce">
              <Arrow />
            </div>
          </div>
          <div className="py-6">
            <HorizontalSeperator />
          </div>
          <h3>More Information</h3>
          <div>
            <TabSection content={TabContent}/>
          </div>
        </div>
      </div>
      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recommended
        </div>

      </div>
      <CardCarousel />
      <SplitBgVertBlue />
      <WholesaleBitters />
    </Layout>
  )
}


const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`