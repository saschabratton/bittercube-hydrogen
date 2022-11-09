import { React, useState } from "react"
import Select from 'react-select'
import { fetchSync } from '@shopify/hydrogen';
import RecipeCard from "./RecipeCard.client";
import { HiSearch } from "react-icons/hi";


const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

const options = [
  { value: 'cherry-bark-vanilla', label: 'Cherry Bark Vanilla' },
  { value: 'orange', label: 'Orange' },
]


export default function CocktailsList(){

  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  const [searchValue, setSearchValue] = useState("")

  return(
    <>
      <div className="container flex justify-between pt-0 pb-8">
        <div className="flex items-center gap-3">
          <span className="label">Filter By:</span>
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
          {/* <Select options={options} /> */}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="search"
            placeholder="search"
            className="p-2 font-semibold tracking-widest text-right uppercase text-gold bg-paper"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
           />
          <HiSearch className="w-5 h-5 text-dark" />
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