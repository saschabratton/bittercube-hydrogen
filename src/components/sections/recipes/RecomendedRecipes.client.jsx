import {useState, useEffect, useId} from 'react'
import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../../global/Card.client";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { makeKey } from "../../../utilities/helpers";
import RecipeCard from "./RecipeCard.client";



export default function RecomendedRecipes({recipes, activeRecipe}){
  const [similarRecipes, setSimilarRecipes] = useState([])
  const [recommended, setRecommended] = useState([])
  useEffect(() => {
    if(!recipes) return
    const getSimilarRecipes = () => {
      const length = activeRecipe.flavors.length
      const index = Math.floor((Math.random() * length) + 0)
      const selectedFlavor = activeRecipe.flavors[index]
      const similar = recipes.filter(({ flavors }) => flavors.includes(selectedFlavor))

      setSimilarRecipes(similar)
    }
    getSimilarRecipes()
  },[])

  useEffect(() => {
    if (!similarRecipes.length) return
    const getRecommendation = () => {
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
      {/* {recommended?.length > 0 &&
          recommended.map(({slug, name}) => {
          return(
            <>
              <div className="card">
                  <h1>{name}: {slug}</h1>
              </div>
            </>
          )
        })} */}

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