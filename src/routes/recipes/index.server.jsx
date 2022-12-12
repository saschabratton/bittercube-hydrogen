import { Suspense } from 'react'
import { Image, fetchSync, CacheShort, Seo } from "@shopify/hydrogen"
import { Layout, RecipesMenu, ImageHero } from '@server'
import { HorizontalSeperator, RecipeCarousel, SignUp, FeaturedBartenders, LearnToCraft, InTheKitchen } from "@client"
// ----------------------------------------------------------------------


const HeaderContent ={
  'text': 'The Recipe Library',
  'image': '/images/recipes-hero.jpg',
}

const SignUpContent = {
  'contentHtml': '<h2>share your recipes with us on instagram</h2>',
  'ctaLabel': 'Instagram',
  'ctaLink': 'https://www.instagram.com/bittercube/',
}


export default function Recipes() {
  const recipes = fetchSync('https://api.bittercube.com/api/recipes.json', {
    preload: false,
    cache: CacheShort()
  }).json()

  const featuredRecipes = recipes.filter(recipe => recipe.featured == true)

  const customSeo = {
    name: 'The Bittercube Recipe Library  • Bittercube',
  }

  return (
    // <Suspense>
      <Layout>
        <Seo type="page" data={{
          title: customSeo.name,
        }} />
        <ImageHero content={HeaderContent} />
        <RecipesMenu />
        <hr />
        <div className="container max-w-5xl pt-12 pb-0 text-center md:pt-28 xl:pt-44 md:grid md:grid-cols-7">
          <div className="flex items-center justify-center col-span-2">
            <div className="">
              <Image src='/emblems/signatures-classics.svg' width={101} height={111} alt=" " role="presentation" />
            </div>
          </div>
          <h2 className="col-span-3 mt-5 mb-0 capitalize">Featured Cocktails</h2>
        </div>

        <RecipeCarousel recipes={featuredRecipes} />
        <LearnToCraft />
        <FeaturedBartenders />
        <InTheKitchen />
        <div className="w-11/12 pt-12 mx-auto">
          <HorizontalSeperator />
        </div>
        <SignUp content={SignUpContent}/>
      </Layout>
    // </Suspense>
  )
}