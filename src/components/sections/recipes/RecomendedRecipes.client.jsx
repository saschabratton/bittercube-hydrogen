import { useState, useEffect } from 'react'
import { RecipeCard } from "@client";
// ----------------------------------------------------------------------

export default function RecomendedRecipes({recipes, activeRecipe}){
  const [similarRecipes, setSimilarRecipes] = useState([])
  const [recommended, setRecommended] = useState([])


  const activeFlavors = activeRecipe.flavors
  const [flavorsList, setFlavorsList] = useState(() => activeFlavors.map(flavor => flavor))



  useEffect(() => {
    if(!recipes) return
    const getSimilarRecipes = () => {
      // const length = activeRecipe.flavors.length
      // const index = Math.floor((Math.random() * length) + 0)
      // const selectedFlavor = activeRecipe.flavors[index]
      // const similar = recipes.filter(({ flavors = [] }) => flavors.includes(selectedFlavor))



        console.log('flavors:', flavorsList)

      // filter every includes
      // const similar = recipes.filter(recipes.every(({ flavors = [] } ) => flavorsList.includes(flavors)))


      console.log('all recipes:', recipes)
      // console.log('similar recipes:', similar)


      // setSimilarRecipes(similarList)
    }
    getSimilarRecipes()
  },[])

  useEffect(() => {
    if (!similarRecipes.length) return
    const getRecommendation = () => {



      // const shuffled = similarRecipes.sort(() => Math.random() * similarRecipes.length)

      const shuffled = similarRecipes => {
        for (let i = similarRecipes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = similarRecipes[i];
          similarRecipes[i] = similarRecipes[j];
          similarRecipes[j] = temp;
        }
      }

      let recommendation = shuffled.slice(0, 4)




      // let recommendation = []
      // times(4)(() => {
      //   const index = Math.floor((Math.random() * similarRecipes.length) + 0)
      //   const suggestion = similarRecipes[index]
      //   recommendation.push(suggestion)
      // })


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