import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../global/Card.client"
import BittersCard from "../BittersCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const featuredBitters = [
  {
    'name': 'Cherry Bark Vanilla',
    'image': '/images/bitters/cherry-bark-vanilla.png',
    'flavor': 'Woodsy',
    'description': 'With limited space in your bar, stock Cherry Bark Vanilla Bitters as they perfectly complement stirred and shaken cocktails alike. Use these woodsy, aromatic bitters to create textured, elevated cocktails. CBV simply makes everything better - cocktails, cookies, stout, you name it.',
    'link': '/shop/products/cherry-bark-vanilla',
  },
    {
    'name': 'Orange',
    'image': '/images/bitters/orange.png',
    'flavor': 'Bright',
    'description': "Don't use citrus bitters that fall flat. Bittercube Orange Bitters have layers of depth and are designed to be strong and bold. Coriander, caraway and cardamom create a chorus of flavors that complement the bright citrus notes, while burnt sugar adds a caramelized orange finish.",
    'link': '/shop/products/orange',
  },
  {
    'name': 'Bolivar',
    'image': '/images/bitters/bolivar.png',
    'flavor': 'Aromatic',
    'description': 'We believe in timeless concoctions and Bolivar Bitters pay homage to a 19th century aromatic bitters formula. Use these bitters when your cocktail is balanced, and the flavors are where you want them, but complexity and depth are lacking. These interpretive aromatic bitters enhance any type of spirit or cocktail style.',
    'link': '/shop/products/bolivar',
  },
  {
    'name': 'Trinity',
    'image': '/images/bitters/trinity.png',
    'flavor': 'All Purpose',
    'description': 'Most classic cocktails call for either orange or aromatic bitters. To simplify your drink making, use this all-purpose blend that features both. These bitters will save shelf space, time and money as they become your go to cocktail enhancer.',
    'link': '/shop/products/trinity',
  },
  {
    'name': 'Jamaican No.2',
    'image': '/images/bitters/jamaican-2.png',
    'flavor': 'Zesty',
    'description': 'As a vibrant, ever changing cocktail category, tropical escapism deserves its very own grapefruit bitters. To accentuate tropical cocktails, Jamaican No 2 Bitters are tantalizingly bright and aromatic, backed by warm, indulgent spices.',
    'link': '/shop/products/jamaican-2',
  },
  {
    'name': 'Root Beer',
    'image': '/images/bitters/root-beer.png',
    'flavor': 'Earthy',
    'description': 'Barrel aged spirits need an aromatic partner that understands and complements their age. Nostalgic, yet labyrinthine, the earthy, warm spices in Root Beer Bitters harmonize with barrel aged spirits. Parallel to these robust flavors are cooling citrus and herbal notes that pleasantly contrast cocktails featuring aged spirits.',
    'link': '/shop/products/root-beer',
  },
  {
    'name': 'Blackstrap',
    'image': '/images/bitters/blackstrap.png',
    'flavor': 'Smoky',
    'description': 'Don’t let your bitters get lost in cocktails featuring intense spirits like scotch or Jamaican rum. Boldly reach for Blackstrap to ensure the dynamic flavors in your cocktails achieve balance. Also, enhance the visual and aromatic experience of your egg white cocktails by using Blackstrap Bitters atop the foam. ',
    'link': '/shop/products/blackstrap',
  },
  {
    'name': 'Jamaican No.1',
    'image': '/images/bitters/jamaican-1.png',
    'flavor': 'Robust',
    'description': 'Jamaican. No.1 Bitters feature ginger, black pepper, and allspice, and are intensely spicy, yet distinctly complex. These bitters turn the spice volume up on classic cocktails and amplify the ginger flavor in your favorite seasonal sips.',
    'link': '#',
  },
  {
    'name': 'Chipotle Cacao',
    'image': '/images/bitters/chipotle-cacao.png',
    'flavor': 'Spicy',
    'description': 'Spicy bitters should still be bitter. Chipotle Cacao Bitters are a rich amalgam of earth, heat, decadent, and savory. The rich cocoa and coffee aromas can add weight to stirred, boozy drinks, yet the spiciness extends the flavor of any shaken cocktail. Unique bitters like these warrant experimentation!',
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

export default function BittersCarousel(){
  return(
      <Carousel
      responsiveLayout={breakPoints}
       cols={5} rows={1} gap={16} loop arrowLeft={arrowLeft} mobileBreakpoint={450} arrowRight={arrowRight} hideArrow={false}
       >
        {featuredBitters.map(bitters => {
          // const {label, manufacturer, price, description, image } = bitters

          return(
            <Carousel.Item>
              <BittersCard bitters={bitters}/>
            </Carousel.Item>
          )
          })}
      </Carousel>
  )
}