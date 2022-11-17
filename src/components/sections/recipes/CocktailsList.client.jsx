import { useState, useId } from "react"
import Select from 'react-select'
import { fetchSync } from '@shopify/hydrogen'
import RecipeCard from "./RecipeCard.client"
import { HiSearch } from "react-icons/hi"
import { useEffect } from "react"


const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

const bittersOptions = [
  { value: 'cherry-bark-vanilla', label: 'Cherry Bark Vanilla' },
  { value: 'orange', label: 'Orange' },
  { value: 'bolivar', label: 'Bolivar' },
  { value: 'blackstrap', label: 'Blackstrap' },
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
  { value: 'vodka', label: 'Vodka' },
  { value: 'gin', label: 'Gin' },
  { value: 'aquavit', label: 'Aquavit' },
  { value: 'brandy', label: 'Brandy' },
  { value: 'rum', label: 'Rum' },
  { value: 'agave', label: 'Agave' },
  { value: 'whiskey', label: 'Whisk(e)y' },
]
const styleOptions = [
  { value: 'citrusy', label: 'Citrusy' },
  { value: 'effervescent', label: 'Effervescent' },
  { value: 'spicy', label: 'Spicy' },
  { value: 'spirit-forward', label: 'Spirit Forward' },
  { value: 'bitter', label: 'Bitter' },
  { value: 'herbaceous', label: 'Herbaceous' },
  { value: 'tropical', label: 'Tropical' },
  { value: 'creamy', label: 'Creamy' },
  { value: 'aromatic', label: 'Aromatic' },
  { value: 'low-abv', label: 'Low ABV option' },
  { value: 'non-alcoholic', label: 'Non-Alcoholic' },
  { value: 'hot', label: 'Hot' },
  { value: 'kitchen', label: 'Kitchen' },
]

const emptyFilters = {
  product: null,
  season: null,
  spirit: null,
  style: null,
}

export default function CocktailsList(){
  const [recipes, setRecipes] = useState([])
  const [activeFilter, setActiveFilter] = useState(null)
  const [filters, setFilters] = useState(emptyFilters)
  const [filterString, setFilterString] = useState('')
  const allRecipes = fetchSync(recipesApi,{preload: false}).json()

  useEffect(() => {
    if (!allRecipes) return
    setRecipes(allRecipes)
  },[])

  useEffect(() => {
    const input = filterString.toLowerCase()
    if (input === '') {
      setRecipes(allRecipes)
      return
    }
    setFilters(emptyFilters)
    const filtered = allRecipes.filter(({ name }) => {
      const match = name.toLowerCase().includes(input)
      return match
    })
    setRecipes(filtered)
  },[filterString])

  useEffect(() => {
    const activeFilters = Object.values(filters).filter((value) => value)
    setFilterString('')
    if (activeFilters.length === 0) {
      setRecipes(allRecipes)
      return
    }

    if (filters.product) {
      console.log("Filtering by product")
      filterRecipesByProduct(filters.product)
      return
    }

    filterRecipesByTag(activeFilters[0])


  },[filters])

  const clearFilters = () => {
    setFilters(emptyFilters)
    setRecipes(allRecipes)
  }

  const filterRecipesByProduct = (selected) => {

    if (!selected){
      setRecipes(allRecipes)
      return
    }
    const { label } = selected
    console.log(label)
    const filteredRecipes = allRecipes.filter(({ bitters }) => {
      console.log(bitters)
      return bitters.filter(({ name }) => label === name).length
    })
    console.log("FILTERED",filteredRecipes)
    setRecipes(filteredRecipes)
  }

  const filterRecipesByTag = (selected) => {
    if (!selected) {
      setRecipes(allRecipes)
      return
    }
    const { label } = selected
    const fiteredRecipes = allRecipes.filter(({ flavors }) => flavors.includes(label))
    setRecipes(fiteredRecipes)
  }

  return(
    <>
      <div className="container flex justify-between pt-0 pb-8">
        <div className="flex items-center gap-3">
          <span className="label">Filter By:</span>
          <Select
            instanceId={useId()}
            options={bittersOptions}
            placeholder={'Bitters'}
            classNamePrefix="select"
            isClearable={true}
            value={filters.product}
            onChange={((selected) => {
              setActiveFilter('product')
              setFilters({...emptyFilters, product: selected})
            })}
          />
          <Select
            instanceId={useId()}
            options={seasonsOptions}
            placeholder={'Season'}
            classNamePrefix="select"
            isClearable={true}
            value={filters.season}
            onChange={((selected) => {
              setActiveFilter('season')
              setFilters({ ...emptyFilters, season: selected })
            })}
          />
          <Select
            instanceId={useId()}
            options={spiritOptions}
            placeholder={'Spirit'}
            classNamePrefix="select"
            isClearable={true}
            value={filters.spirit}
            onChange={((selected) => {
              setActiveFilter('spirit')
              setFilters({ ...emptyFilters, spirit: selected })
            })}
          />
          <Select
            instanceId={useId()}
            options={styleOptions}
            placeholder={'Cocktail Style'}
            classNamePrefix="select"
            isClearable={true}
            value={filters.style}
            onChange={((selected) => {
              setActiveFilter('style')
              setFilters({ ...emptyFilters, style: selected })
            })}
          />

        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="search"
            placeholder="search"
            className="p-2 font-semibold tracking-widest text-right uppercase text-gold bg-paper"
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
           />
          <HiSearch className="w-5 h-5 text-dark" />
        </div>
      </div>
      <hr />
      <div><span className="label">Found {recipes.length} of {allRecipes.length} recipes.</span></div>
      <div><span>Active filter: {activeFilter} </span> <button className="btn" onClick={clearFilters}>Clear Filters</button></div>
      <div className="container grid grid-cols-3 gap-6">
        {recipes &&
          recipes.map((recipe, i) => {
            return (
               <RecipeCard key={`${recipe.slug}_${i}`} recipe={recipe} />
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