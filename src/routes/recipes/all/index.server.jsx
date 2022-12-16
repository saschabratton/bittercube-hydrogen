import { fetchSync, Seo, CacheLong, useQuery } from '@shopify/hydrogen'
import { Layout, PatternHero, RecipesMenu } from '@server'
import { HorizontalSeperator, SignUp, CocktailsList } from "@client"
// ----------------------------------------------------------------------

const SignUpContent = {
  'contentHtml': '',
  'ctaLabel': '',
  'ctaLink': '',
}

export default function Cocktails(){

  const recipesApi = useQuery(['slug'], async () => {
    const response = await fetch('https://api.bittercube.com/api/recipes.json', {
      headers: {
        accept: 'application/json',
      },
    });
    return await response.json();
  });

  const allRecipes = recipesApi.data

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
      <CocktailsList allRecipes={allRecipes} />
      <div className="w-11/12 pt-12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}
