import Carousel from 'better-react-carousel'
import { fetchSync } from "@shopify/hydrogen"
import FeaturedRecipeCard from "./recipes/FeaturedRecipeCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { makeKey } from "../../utilities/helpers";


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
  <span type="prev" className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
    <HiArrowLeft className="w-5 h-5 transform -rotate-45 text-paper" />
  </span>
)
const arrowRight = () => (
  <span type="prev" className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
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
    gap: 10,
    loop: true
  },
]

const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'



// const featuredRecipes = recipes => receipes.every(recipe => recipe.featuredRecipes)

export default function RecipeCarousel(){
  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  const featuredRecipes = recipes.filter(recipe => recipe.featured == true)

  return(
    <section>
      <Carousel responsiveLayout={breakPoints}
       cols={4} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}>
        {featuredRecipes?.length > 0 && featuredRecipes.map((recipe) => {
          return (
          <Carousel.Item key={makeKey(recipe.name)}>
              <FeaturedRecipeCard key={recipe.slug} recipe={recipe} />
          </Carousel.Item>
        )})}
      </Carousel>
    </section>
  )
}