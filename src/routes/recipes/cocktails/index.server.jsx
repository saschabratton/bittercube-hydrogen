import { Layout } from "../../../components/Layout.server";
import PatternHero from "../../../components/headers/PatternHero.server";
import SignUp from "../../../components/sections/SignUp.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";
import {fetchSync, CacheLong} from '@shopify/hydrogen';
import { NoIndexPageSeo } from "@shopify/hydrogen/components/Seo/NoIndexSeo.client";
import RecipeCard from "../../../components/sections/recipes/RecipeCard.client";
import RecipesNav from "../../../components/headers/RecipesNav.server";
import { HiSearch } from "react-icons/hi";



const HeaderText = ("Cocktail Recipes")

const SignUpContent = {
  'contentHtml': '<h2>Quick Diddy Prefooter Kicker</h2><p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>',
  'ctaLabel': '',
  'ctaLink': '',
}

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'


export default function Cocktails(){

  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <RecipesNav />

      <div className="container flex justify-between pt-0 pb-8">
        <div className="flex items-center gap-3">
          <span className="label">Sort By:</span>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Spirit
          </div>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Cocktail Style
          </div>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Bitters
          </div>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Season
          </div>
        </div>
        <div className="text-left label">
          Search
          {/* <HiSearch /> */}
        </div>
      </div>
      <hr />
      <div className="container grid grid-cols-3 gap-6">

        {recipes?.length > 0 && recipes.map((recipe) => {
          return (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          )
        })}



      </div>
      <div className="w-11/12 pt-12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}
