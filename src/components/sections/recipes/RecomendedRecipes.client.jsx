import { useState, useEffect } from 'react'
import { RecipeCard } from "@client";
// ----------------------------------------------------------------------

export default function RecomendedRecipes({recipes, activeRecipe}){
  const [similarRecipes, setSimilarRecipes] = useState([])
  const [recommended, setRecommended] = useState([])

  useEffect(() => {
    if(!recipes) return
    const getSimilarRecipes = () => {
      const length = activeRecipe.flavors.length
      const index = Math.floor((Math.random() * length) + 0)
      const selectedFlavor = activeRecipe.flavors[index]
      const similar = recipes.filter(({ flavors = [] }) => flavors.includes(selectedFlavor))





      setSimilarRecipes(similar)
    }
    getSimilarRecipes()
  },[])

  useEffect(() => {
    if (!similarRecipes.length) return
    const getRecommendation = () => {



      // const shuffled = similarRecipes.sort(() => Math.random() * similarRecipes.length)
      // let recommendation = shuffled.slice(0, 4)

      // console.log('similar recipes:', shuffled)


      let recommendation = []
      times(4)(() => {
        const index = Math.floor((Math.random() * similarRecipes.length) + 0)
        const suggestion = similarRecipes[index]
        recommendation.push(suggestion)
      })


      setRecommended(recommendation)
    }

    getRecommendation()
  },[similarRecipes])

  const times = x => f => {
    if (x > 0) {
      f()
      times(x - 1)(f)
    }
  }


  return(
    <section className="container grid grid-cols-2 gap-6 md:grid-cols-4">

        {recommended?.length > 0 &&
          recommended.map((recipe, i) => {
            return (
              <RecipeCard key={`${recipe.slug}_${i}`} recipe={recipe} />
            )
          })
        }
    </section>
  )
}