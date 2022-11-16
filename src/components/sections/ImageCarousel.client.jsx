import Carousel from 'better-react-carousel'
import FeaturedRecipeCard from "./recipes/FeaturedRecipeCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { makeKey } from "../../utilities/helpers";
import { Image } from "@shopify/hydrogen";

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
    hideArrow: true,
  }
]


export default function ImageCarousel({ content }){


  return(
      <Carousel responsiveLayout={breakPoints}
       cols={1} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}>
        {content.images?.map((image) => (
          <Carousel.Item key={makeKey(content.name)}>
            <Image src={image.url} width={366} height={455} alt={content.name} className="object-cover w-full aspect-4/5" />
          </Carousel.Item>
        ))}

      </Carousel>
  )
}