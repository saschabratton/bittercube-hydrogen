import { Layout } from "../../../components/Layout.server";
import {  gql, useShopQuery, Link, Image, CacheLong, useRouteParams, fetchSync } from "@shopify/hydrogen"
import TabSection from "../../../components/sections/recipes/TabSection.client";
import RecomendedRecipes from "../../../components/sections/recipes/RecomendedRecipes.client";
import SplitBgVertBlue from "../../../components/sections/SplitBgVertBlue.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";
import Nav from "../../../components/headers/Nav.client";
import RecipeImageCarousel from "../../../components/sections/recipes/RecipeImageCarousel.client";
import { makeKey } from "../../../utilities/helpers";

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
      <Nav shop={shop} dark={false}/>
      <div className="container flex items-center w-11/12 gap-2 pb-6 mt-8">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/recipes/all">All Recipes</Link>
      </div>

      <div className="container grid w-11/12 gap-6 pt-0 md:grid-cols-2">
        <div className="md:hidden">
          <RecipeImageCarousel content={activeRecipe} />
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          {activeRecipe.images?.map((image) => (
            <Image src={image.url} width={366} height={455} alt={activeRecipe.name} className="object-cover w-full aspect-4/5" />
          ))}
        </div>
        {/* <div className="sticky top-0 grid gap-6 md:p-10 xl:py-20 h-fit xl:px-20"> */}
        <div className="sticky top-0 grid gap-6 px-4 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <div>
            <p className="mb-0 text-base label">cocktail style:<br />
            {/* TODO: , after only first item  */}
              {activeRecipe.flavors.filter((i, index) => (index < 2))
              .map((flavor) => (
                  <span key={makeKey(flavor)}>{flavor}, </span>
              ))}
            </p>
            <h1>{activeRecipe.name}</h1>
            {activeRecipe.description &&
              <p>{activeRecipe.description}</p>
            }
          </div>

          <div className="py-6">
            <HorizontalSeperator />
          </div>
          <h3>Make the cocktail</h3>
          <div>
            <TabSection activeRecipe={activeRecipe}/>
          </div>
        </div>
      </div>
      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recommended
        </div>
      </div>
      <RecomendedRecipes />
      <SplitBgVertBlue />
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