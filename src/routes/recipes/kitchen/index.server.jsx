import PatternHero from "../../../components/headers/PatternHero.server";
import { Layout } from "../../../components/Layout.server";
import SubNav from "../../../components/global/SubNav.server";
import SignUp from "../../../components/sections/SignUp.client";
import Flavors from "../../../components/sections/kitchen/Flavors.client";
import Spices from "../../../components/sections/kitchen/Spices.client";
import CardCarousel from "../../../components/sections/CardCarousel.client";
import BakingCarousel from "../../../components/sections/kitchen/BakingCarousel.client";
import RecipesNav from "../../../components/headers/RecipesNav.server";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";

const HeaderText = ("Bitters in the kitchen")
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


export default function Kitchen(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <RecipesNav />
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
        {/* TODO: baking recipe carousel  */}
        {/* <CardCarousel /> */}
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