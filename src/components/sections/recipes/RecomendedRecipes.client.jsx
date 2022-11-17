import {useState, useEffect} from 'react'
import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../../global/Card.client";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { makeKey } from "../../../utilities/helpers";

const RecommendedProducts = [
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
]

const arrowLeft = () => (
  <span type="prev" className="absolute z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -left-4 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
    <HiArrowLeft className="w-5 h-5 transform -rotate-45 text-paper" />
  </span>
)
const arrowRight = () => (
  <span type="prev" className="absolute z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -right-4 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
  <HiArrowRight className="w-5 h-5 transform -rotate-45 text-paper" />
  </span>
)

const breakPoints = [
  {
    breakpoint: 767,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true,
    hideArrow: false
  },
  {
    breakpoint: 868,
    cols: 2,
    rows: 1,
    gap: 0,
    loop: true,

  },
  {
    breakpoint: 1200,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true
  },
  {
    breakpoint: 1650,
    cols: 4,
    rows: 1,
    gap: 26,
    loop: true
  },
]


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

      times(3)(() => {
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
    <section className="w-11/12 mx-auto">
       <Carousel
        responsiveLayout={breakPoints}
        cols={5} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}
       >
        {recommended?.length > 0 && recommended.map(({slug, name}) => {

          return(
            <>
            <h1 key={slug}>{name}</h1>
              {/* <Carousel.Item key={makeKey(label)}>
                <Card />
              </Carousel.Item> */}
            </>
          )
        })}


      </Carousel>
      </section>
  )
}