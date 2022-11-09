import { useState } from "react"
import { fetchSync } from '@shopify/hydrogen';
import RecipeCard from "./RecipeCard.client";

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

export default function CocktailsList(){

  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  const [searchValue, setSearchValue] = useState("")

  return(
    <>
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
          <input
            type="text"
            name="search"
            placeholder="search"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
           />
        </div>
      </div>
      <hr />
      <div className="container grid grid-cols-3 gap-6">
        {recipes
          .filter(recipe => recipe.name.match(new RegExp(searchValue, "i")))
          .map(recipe => {
            return (
               <RecipeCard key={recipe.slug} recipe={recipe} />
            )
          })
        }
        {recipes.length === 0 && (
          <p>no cocktails</p>
        )}
      </div>
    </>
  )

}