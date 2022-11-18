import { Layout, PatternHero, RecipesMenu } from '@server'
import {
  HorizontalSeperator,
  // CardCarousel
} from "@client"
import { Seo } from "@shopify/hydrogen";
import SignUp from "../../../components/sections/SignUp.client";
import Flavors from "../../../components/sections/kitchen/Flavors.client";
import Spices from "../../../components/sections/kitchen/Spices.client";
import BakingCarousel from "../../../components/sections/kitchen/BakingCarousel.client";
// ----------------------------------------------------------------------

const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/all'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]
const SignUpContent = {
  'contentHtml': '<h2>share your recipes with us on instagram</h2>',
  'ctaLabel': 'Instagram',
  'ctaLink': 'https://www.instagram.com/bittercube/',
}

const customSeo = {
    name: 'Bitters as ingredients • Bittercube',
  }


export default function Kitchen(){
  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PatternHero content={"Bitters in the kitchen"} />
      <RecipesMenu />
      <hr />
      <Flavors />
      <div className="relative bg-dark">
        <div className="absolute left-0 w-1/4 h-0.5 top-28 bg-gold hero-line-right">
          <div className="ornament-arrow-right hero-line-ornament"></div>
        </div>
        <div className="absolute right-0 w-1/4 h-0.5 top-28 bg-gold hero-line-left">
          <div className="ornament-arrow-left hero-line-ornament"></div>
        </div>
        <div className="container max-w-3xl pb-0 text-center">
          <h2 className="mb-6">Bitters as Added Flavor</h2>
          <p>Another way to use cocktail bitters in baking is to riff on classics like a bartender might do when mixing cocktails. Simply add bitters to a tried and true recipe to accentuate, enhance, or contrast existing flavors. When using 1-2 tsp of bitters, you should not have to adjust the recipe in any way. Below are some ideas for adding bitters to your favorite baked goods.</p>
        </div>
        <BakingCarousel />
      </div>
      <Spices />
      <div className="w-11/12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>

    </Layout>
  )
}