import Carousel from 'better-react-carousel'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"

import { FeaturedRecipeCard } from "@client"
import { makeKey } from "@utils"
// ----------------------------------------------------------------------

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

export default function RecipeCarousel({recipes}) {

  return (
        <Carousel responsiveLayout={breakPoints}
          cols={4} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}>
          {recipes.map((recipe) => {
            return (
              <Carousel.Item key={makeKey(recipe.name)}>
                <FeaturedRecipeCard key={recipe.slug} recipe={recipe} />
              </Carousel.Item>
            )
          })}
        </Carousel>
  )
}