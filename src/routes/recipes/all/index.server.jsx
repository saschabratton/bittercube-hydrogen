import { fetchSync, Seo } from '@shopify/hydrogen'
import { Layout, PatternHero, RecipesMenu } from '@server'
import { HorizontalSeperator } from "@client"

import SignUp from "../../../components/sections/SignUp.client"
import CocktailsList from "../../../components/sections/recipes/CocktailsList.client"
// ----------------------------------------------------------------------

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

const customSeo = {
    name: 'All Bittercube recipes • Bittercube',
  }


  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PatternHero content={"All Recipes"} />
      <RecipesMenu />

      <CocktailsList />


      <div className="w-11/12 pt-12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}
