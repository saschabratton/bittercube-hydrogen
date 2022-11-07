import Carousel from 'better-react-carousel'
import BittersCard from "../../BittersCard.client";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import BakingCard from "../recipes/BakingCard.client";

// TODO: combine with bitterscarousel for 1 data point
const recipes = [
  {
    'name': 'Cherry Bark Vanilla',
    'image': '/images/product.jpg',
    'flavor': 'Woodsy',
    'description': 'Use in Biscotti, Gingerbread, Buttercream Frosting, Baklava, Tsoureki',
    'link': '/shop/products/cherry-bark-vanilla',
  },
  {
    'name': 'Orange',
    'image': '/images/product.jpg',
    'flavor': 'Bright',
    'description': "Use in Orange Crinkle Cookies, Pound Cake, Choco Orange Brownies, Orange Cranberry Bread Pudding, Poppy Seed Muffin",
    'link': '/shop/products/orange',
  },
  {
    'name': 'Bolivar',
    'image': '/images/product.jpg',
    'flavor': 'Aromatic',
    'description': 'Mixed Berry Scones, Oatmeal Raisin Cookies, Banana Bread, Blueberry Muffins, Coffee Cake',
    'link': '/shop/products/bolivar',
  },
  {
    'name': 'Trinity',
    'image': '/images/product.jpg',
    'flavor': 'All Purpose',
    'description': 'Fruitcake, Bourbon Soaked Cake, Candied Nuts, Bourbon Banana Bread, Cheesecake',
    'link': '/shop/products/trinity',
  },
  {
    'name': 'Jamaican No.2',
    'image': '/images/product.jpg',
    'flavor': 'Zesty',
    'description': 'Lemon Bars, Chai Flavored Cakes, Grapefruit Olive Oil Cake, Bruleed Grapefruit Rhubarb Pie, Blueberry Pie',
    'link': '/shop/products/jamaican-2',
  },
  {
    'name': 'Root Beer',
    'image': '/images/product.jpg',
    'flavor': 'Earthy',
    'description': 'Panna Cotta, Mint Chocolate Chip Cookies, Almond Croissants, Pizzelles, Angel Food Cake',
    'link': '/shop/products/root-beer',
  },
  {
    'name': 'Blackstrap',
    'image': '/images/product.jpg',
    'flavor': 'Smoky',
    'description': 'Snickerdoodles, Gingerbread, Old Fashioned Molasses Cake, Cookie Cream Pies, Carrot Cake',
    'link': '/shop/products/blackstrap',
  },
  {
    'name': 'Jamaican No.1',
    'image': '/images/product.jpg',
    'flavor': 'Robust',
    'description': 'Spiced Apple Muffins, Black Pepper Pound Cake, Apple Crisp, Spiced Strawberry Shortcake, Bundt Cake',
    'link': '#',
  },
  {
    'name': 'Chipotle Cacao',
    'image': '/images/product.jpg',
    'flavor': 'Spicy',
    'description': 'Chocolate Mousse, Chocolate Covered Pretzels, Pineapple Upside Down Cake, Chocolate Covered Strawberries, Chocolate Cookie',
    'link': '#',
  },
]


// TODO: seperate arrows into components
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

export default function BakingCarousel(){






  return(
    <div className="pb-20">
      <Carousel
      responsiveLayout={breakPoints}
       cols={5} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}
       >
        {recipes.map(bitters => {
          return(
            <Carousel.Item>
              <BakingCard bitters={bitters}/>
            </Carousel.Item>
          )
          })}
      </Carousel>
    </div>
  )
}