import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../global/Card.client"
import BittersCard from "../BittersCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";


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
  <span type="prev" className="absolute z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none left-6 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
    <HiArrowLeft className="w-5 h-5 transform -rotate-45 text-paper" />
  </span>
)
const arrowRight = () => (
  <span type="prev" className="absolute z-10 flex items-center justify-center w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none right-6 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">
  <HiArrowRight className="w-5 h-5 transform -rotate-45 text-paper" />
  </span>
)

const breakPoints = [
  {
    breakpoint: 767,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true
  },
  {
    breakpoint: 1200,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true
  }
]


export default function BittersCarousel(){
  return(
      <Carousel
      responsiveLayout={breakPoints}
       cols={4} rows={1} gap={16} loop arrowLeft={arrowLeft} arrowRight={arrowRight}
       >
        {RecommendedProducts.map(item => {
          const {label, manufacturer, price, description, image } = item
          return(
            <Carousel.Item>
              <BittersCard />
             </Carousel.Item>
          )
          })}
      </Carousel>
  )
}