import { useState, useEffect } from "react";
import { Link, Image, useRouteParams, fetchSync, Seo, useQuery } from "@shopify/hydrogen"
import { makeKey } from "@utils"
import { NotFound, Layout } from '@server'
import { PrimaryMenu, HorizontalSeperator, RecomendedRecipes, SplitBgVertBlue, RecipeImageCarousel, TabSection } from "@client"
// ----------------------------------------------------------------------


export default function Recipe(){
  const { handle } = useRouteParams()


   const recipesApi = useQuery(['slug'], async () => {
    const response = await fetch('https://api.bittercube.com/api/recipes.json', {
      headers: {
        accept: 'application/json',
      },
    });
    return await response.json();
  });

  const recipes = recipesApi.data

  const activeRecipe = recipes.find(recipe => recipe.slug === handle)

  if (!activeRecipe) {
    return <NotFound />
  }


  const customSeo = {
    name: 'How to craft • Bittercube',
  }

  return(
    <Layout>
      <Seo type="page" data={{
          title: customSeo.name,
      }} />
      <PrimaryMenu dark={false}/>
      <div className="container flex items-center w-11/12 gap-2 pb-6 mt-8 print:hidden">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/recipes/all">All Recipes</Link>
      </div>

      <div className="container grid w-11/12 gap-6 pt-0 md:grid-cols-2 ">
        <div className="print:hidden">
          <div className="md:hidden">
            <RecipeImageCarousel content={activeRecipe} />
          </div>
          <div className="hidden gap-6 md:flex md:flex-col">
            {activeRecipe.images?.map((image) => (
              <Image src={image.url} width={366} height={455} alt={activeRecipe.name} className="object-cover w-full aspect-4/5" />
            ))}
          </div>
        </div>
        <div className="sticky top-0 grid gap-6 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <div>
            <p className="text-base label">cocktail style:<br />
              {activeRecipe.flavors.slice(0, 2)
              .map((flavor, index) => (
                  <span key={makeKey(flavor)}>{index != 0 ? ', ' : ''}{flavor}</span>
              ))}
            </p>
            <h1>{activeRecipe.name}</h1>
            {activeRecipe.description &&
              <p>{activeRecipe.description}</p>
            }
          </div>

          <div className="py-6 print:hidden">
            <HorizontalSeperator />
          </div>
          <h3>Make the cocktail</h3>
          <div>
            <TabSection activeRecipe={activeRecipe}/>
            {/* <button onClick={window.print()} className="btn btn-action">
              Print Recipe
            </button> */}
          </div>
        </div>
      </div>
      <div className="print:hidden">
        <div className="relative w-11/12 pt-0 mx-auto">
          <HorizontalSeperator />
          <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
            Recommended Recipes
          </div>
        </div>
        <RecomendedRecipes recipes={recipes} activeRecipe={activeRecipe}/>
        <SplitBgVertBlue />
      </div>
    </Layout>
  )
}
