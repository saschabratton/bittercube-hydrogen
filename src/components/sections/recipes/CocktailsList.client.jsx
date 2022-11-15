import { React, useState } from "react"
import Select from 'react-select'
import { fetchSync } from '@shopify/hydrogen';
import RecipeCard from "./RecipeCard.client";
import { HiSearch } from "react-icons/hi";
import { useEffect } from "react";


const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

const bittersOptions = [
  { value: 'cherry-bark-vanilla', label: 'Cherry Bark Vanilla' },
  { value: 'orange', label: 'Orange' },
  { value: 'bolivar', label: 'Bolivar' },
  { value: 'Blackstrap', label: 'Blackstrap' },
  { value: 'trinity', label: 'Trinity' },
  { value: 'root-beer', label: 'Root Beer' },
  { value: 'jamaican-1', label: 'Jamaican No. 1' },
  { value: 'jamaican-2', label: 'Jamaican No. 2' },
  { value: 'chipotlecacao', label: 'Chipotle Cacao' },
]
const seasonsOptions = [
  { value: 'winter', label: 'Winter' },
  { value: 'fall', label: 'Fall' },
  { value: 'spring', label: 'Spring' },
  { value: 'summer', label: 'Summer' },
]
const spiritOptions = [
  { value: 'tequilla', label: 'Tequilla' },
  { value: 'whiskey', label: 'Whiskey' },
]


export default function CocktailsList(){
  const [recipes, setRecipes] = useState([])
  const [activeFilter, setActiveFilter] = useState([])

  const allRecipes = fetchSync(recipesApi,{
    preload: false,
  }).json()
  useEffect(() => {
    if (!allRecipes) return
    setRecipes(allRecipes)
  },[])
  const [searchValue, setSearchValue] = useState("")


  const filterRecipesByProduct = (selected) => {
    if (!selected){
      setRecipes(allRecipes)
      return
    }
    const { label } = selected

    const fiteredRecipes = allRecipes.filter(({ bitters }) => {
      return bitters.filter(({ name }) => label === name).length
    })
    setRecipes(fiteredRecipes)
  }
  // BY tag, BY string ~ dggt
  const filterRecipesBySeason = ({ label }) => {
    const fiteredRecipes = allRecipes.filter(({ flavors }) => flavors.includes(label))
    setRecipes(fiteredRecipes)
  }

// TODO:
// - filter seasons
// - filter spirits
// - search filter
// - clear values
// - empty state
// - skelton for card images

  return(
    <>
      <div className="container flex justify-between pt-0 pb-8">
        <div className="flex items-center gap-3">
          <span className="label">Filter By:</span>

          <Select
            options={bittersOptions}
            placeholder={'Bitters'}
            classNamePrefix="select"
            isClearable={true}
            onChange={(selected => filterRecipesByProduct(selected))}
          />
          <Select
            options={seasonsOptions}
            placeholder={'Season'}
            classNamePrefix="select"
            isClearable={true}
            onChange={(selected => filterRecipesBySeason(selected))}
          />
          <Select
            options={spiritOptions}
            placeholder={'Spirit'}
            classNamePrefix="select"
            onChange={(selected => filterRecipes(selected))}
          />

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

        {recipes &&
          // .filter(recipe => recipe.name.match(new RegExp(searchValue, "i")))

          recipes.map(recipe => {
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