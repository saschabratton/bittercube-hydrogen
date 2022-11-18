import { Layout } from '@components/all.server'
import PatternHero from "../../../components/headers/PatternHero.server"
import SignUp from "../../../components/sections/SignUp.client"
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client"
import { fetchSync } from '@shopify/hydrogen'
import RecipesNav from "../../../components/headers/RecipesNav.server"
import CocktailsList from "../../../components/sections/recipes/CocktailsList.client"


const HeaderText = ("All Recipes")

const SignUpContent = {
  'contentHtml': '<h2>Quick Diddy Prefooter Kicker</h2><p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>',
  'ctaLabel': '',
  'ctaLink': '',
}

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'


export default function Cocktails(){

  const recipes = fetchSync(recipesApi,{
    preload: false
  }).json()


  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <RecipesNav />

      <CocktailsList />


      <div className="w-11/12 pt-12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}
