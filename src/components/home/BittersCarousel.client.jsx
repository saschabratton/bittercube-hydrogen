import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../global/Card.client"
import BittersCard from "../BittersCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { makeKey } from "../../utilities/helpers";


const featuredBitters = [
  {
    'name': 'Cherry Bark Vanilla',
    'image': '/images/bitters/cherry-bark-vanilla.png',
    'flavor': 'Woodsy',
    'description': 'With limited space in your bar, stock these woodsy, aromatic bitters as they perfectly complement stirred and shaken cocktails alike.',
    'link': '/shop/products/cherry-bark-vanilla',
  },
    {
    'name': 'Orange',
    'image': '/images/bitters/orange.png',
    'flavor': 'Bright',
    'description': "Bittercube Orange Bitters have layers of depth, and the coriander, caraway and cardamom create a chorus of flavors.",
    'link': '/shop/products/orange',
  },
  {
    'name': 'Bolivar',
    'image': '/images/bitters/bolivar.png',
    'flavor': 'Aromatic',
    'description': 'Bolivar Bitters pay homage to a 19th century aromatic bitters formula. Use these versatile bitters to add complexity and depth.',
    'link': '/shop/products/bolivar',
  },
  {
    'name': 'Trinity',
    'image': '/images/bitters/trinity.png',
    'flavor': 'All Purpose',
    'description': 'Use this all-purpose blend for recipes that call for Orange or Aromatic Bitters. These bitters will become your go to cocktail enhancer.',
    'link': '/shop/products/trinity',
  },
  {
    'name': 'Jamaican No.2',
    'image': '/images/bitters/jamaican-2.png',
    'flavor': 'Zesty',
    'description': 'To accentuate tropical cocktails, Jamaican No 2 Bitters are tantalizingly bright and aromatic, backed by warm, indulgent spices.',
    'link': '/shop/products/jamaican-2',
  },
  {
    'name': 'Root Beer',
    'image': '/images/bitters/root-beer.png',
    'flavor': 'Earthy',
    'description': 'The earthy, warm spices in Root Beer Bitters harmonize with barrel aged spirits. Parallel to these robust flavors are cooling citrus and herbal notes',
    'link': '/shop/products/root-beer',
  },
  {
    'name': 'Blackstrap',
    'image': '/images/bitters/blackstrap.png',
    'flavor': 'Smoky',
    'description': 'Smoky and robust, reach for Blackstrap Bitters to ensure the dynamic flavors in your cocktails achieve balance.',
    'link': '/shop/products/blackstrap',
  },
  {
    'name': 'Jamaican No.1',
    'image': '/images/bitters/jamaican-1.png',
    'flavor': 'Robust',
    'description': 'Jamaican. No.1 Bitters feature ginger, black pepper, and allspice, and are intensely spicy, yet distinctly complex. ',
    'link': '/shop/products/jamaican-1',
  },
  {
    'name': 'Chipotle Cacao',
    'image': '/images/bitters/chipotle-cacao.png',
    'flavor': 'Spicy',
    'description': 'Chipotle Cacao Bitters are a rich amalgam of earth, heat, decadent, and savory. The spiciness extends the flavor of any shaken cocktail.',
    'link': '/shop/products/chipotlecacao',
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

export default function BittersCarousel(){
  return(
    <Carousel
      responsiveLayout={breakPoints}
      cols={5} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}>
      {featuredBitters.map(bitters => {
        return(
          <Carousel.Item key={makeKey(bitters.name)}>
            <BittersCard bitters={bitters}/>
          </Carousel.Item>
        )
        })}
    </Carousel>
  )
}