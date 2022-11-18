import { fetchSync, Seo } from '@shopify/hydrogen'
import { Layout, PatternHero, RecipesMenu } from '@server'
import { HorizontalSeperator, SignUp, CocktailsList } from "@client"
// ----------------------------------------------------------------------

const SignUpContent = {
  'contentHtml': '',
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
