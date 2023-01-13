import { useState, useId, useEffect } from "react"
import { HiSearch } from "react-icons/hi"
import { HiX } from "react-icons/hi"
import Select from 'react-select'
import { RecipeCard } from "@client"
// ----------------------------------------------------------------------

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
  { value: 'non-alcoholic-option', label: 'Non-Alcoholic option' },
  { value: 'hot', label: 'Hot' },
  { value: 'kitchen', label: 'Kitchen' },
]

const emptyFilters = {
  product: null,
  season: null,
  spirit: null,
  style: null,
}

export default function CocktailsList({ allRecipes }){
  const [recipes, setRecipes] = useState([])
  const [activeFilter, setActiveFilter] = useState(null)
  const [filters, setFilters] = useState(emptyFilters)
  const [filterString, setFilterString] = useState('')

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

    const filtered = allRecipes.filter(({ name, flavors, spirits, ingredients }) => {
      let tags = []
      flavors?.forEach(element => {
        tags.push(element.toLowerCase())
      })
      spirits?.forEach(element => {
        tags.push(element.toLowerCase())
      })
      ingredients?.forEach(({ name }) => {
        if (name) {
          tags.push(name.toLowerCase())
        }
      })

      function checkTags(input) {
        return tags.find(element => {
          if (element.includes(input.toLowerCase())) {
            return true
          }
        })
      }

      const match = name.toLowerCase().includes(input) || checkTags(input)

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
      filterRecipesByProduct(filters.product)
      return
    }

    if (filters.spirit) {
      filterRecipesBySpirit(filters.spirit)
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
    const filteredRecipes = allRecipes.filter(({ bitters }) => {
      return bitters.filter(({ name }) => label === name).length
    })
    setRecipes(filteredRecipes)
  }

  const filterRecipesByTag = (selected) => {
    if (!selected) {
      setRecipes(allRecipes)
      return
    }
    const { label } = selected
    const filteredRecipes = allRecipes.filter(({ flavors }) => flavors.includes(label))
    setRecipes(filteredRecipes)
  }

  const filterRecipesBySpirit = (selected) => {
    if (!selected) {
      setRecipes(allRecipes)
      return
    }
    const { label } = selected
    const filteredRecipes = allRecipes.filter(({ spirits }) => spirits?.includes(label))
    setRecipes(filteredRecipes)
  }

  return(
    <>
      <div className="container flex flex-col justify-between py-0 lg:flex-row">
        <div className="grid items-center grid-cols-2 gap-3 lg:flex">
          <span className="label">Filter By:</span>
          <button className="p-[0.64rem] btn btn-action lg:order-last w-full lg:w-fit items-center justify-center flex gap-2 py-2 opacity-50 hover:opacity-100" onClick={clearFilters}><span className="text-sm lg:hidden">Clear Filters</span> <HiX /></button>
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
        <div className="flex items-center w-full gap-2 p-1 my-4 rounded-md bg-paper-action/20 lg:w-[250px]">
          <input
            type="text"
            name="search"
            placeholder="search"
            className="w-full p-2 font-semibold tracking-widest text-right uppercase text-gold bg-paper-action/0"
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
           />
          <HiSearch className="w-5 h-5 text-dark" />
        </div>
      </div>
      <hr />
      {/* <Suspense>
        <RecipeApi />
      </Suspense> */}
      <div className="container pt-2 pb-8 text-center">
        <span className="text-sm label text-dark/30">Showing {recipes.length} of {allRecipes.length} {activeFilter} recipes.</span>
      </div>

      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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


function RecipeApi() {
  const recipes = fetchSync('https://api.bittercube.com/api/recipes.json').json()
  const [suggestedRecipes, setSuggestedRecipes] = useState([])

  useEffect(() => {
    if (!recipes.length) return
    const getRecommendation = () => {
      let recommendation = []

      times(4)(() => {
        const index = Math.floor((Math.random() * recipes.length) + 0)
        const suggestion = recipes[index]
        recommendation.push(suggestion)
      })
      setSuggestedRecipes(recommendation)
    }

    getRecommendation()
    // console.log(getRecommendation)
  },[])

  const times = x => f => {
    if (x > 0) {
      f()
      times(x - 1)(f)
    }
  }
  return (
    <>
    {suggestedRecipes && suggestedRecipes.map((recipe, i) => (
      <dd key={makeKey(recipe.name)}>
        <span className="font-bold tracking-wide text-gold">0{i + 1}</span>
        <hr className="my-2 border-t-2 text-gold" />
        <Link to={`/recipes/${recipe.slug}`} className="flex items-center justify-between w-full gap-2 mx-auto label group">{recipe.name} <div className="btn-arrow btn-arrow-gold"></div></Link>
      </dd>
    ))}
    </>
  )
}