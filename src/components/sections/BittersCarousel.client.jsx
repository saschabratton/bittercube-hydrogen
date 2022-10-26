import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../global/Card.client"
import BittersCard from "../BittersCard.client"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const featuredBitters = [
  {
    'name': 'Cherry Bark Vanilla',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Woodsy and aromatic, these rustic bitters have a pleasant aroma of cocoa and bitter almonds, with flavors of vanilla, fennel and star anise.',
    'link': '#',
  },
  {
    'name': 'Bolivar',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Versatile and aromatic, with floral notes of chamomile and jasmine, plus cinnamon and dried fruits on the finish. Bolivar is an homage to an old recipe found in a 19th century cocktail book.',
    'link': '#',
  },
  {
    'name': 'Orange',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Citrus forward with aromas of bright orange, toasted coriander, caraway and cardamom. Bittercube Orange Bitters are finished with a touch of burnt sugar, creating subtle, caramelized orange character.',
    'link': '#',
  },
  {
    'name': 'Trinity',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Combining a proprietary blend of Cherry Bark Vanilla, Bolivar and Orange Bitters creates an all-purpose bitters style. This union is rested for more than a month, amalgamating the flavors to produce a unique variety of versatile, aromatic bitters.',
    'link': '#',
  },
  {
    'name': 'Root Beer',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Earthy and dark, Root Beer Bitters are complex and complement barrel-aged spirits. Citrus and herbal notes balance robust spices like anise and cinnamon.',
    'link': '#',
  },
  {
    'name': 'Jamaican No.1',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Robust spice overtones, with ginger, allspice, clove and black pepper. Being so heavily spiced, Jamaican No. 1 complements cocktails, but can also be utilized in baking, marinades, and in vinaigrettes.',
    'link': '#',
  },
  {
    'name': 'Jamaican No.2',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Jamaican No.2 is bright and acidic, with grapefruit and hibiscus overtones and underlying spice notes of allspice, ginger and vanilla',
    'link': '#',
  },
  {
    'name': 'Blackstrap',
    'image': '/images/bitters-eg.png',
    'flavor': 'Tasting Note',
    'description': 'Full-bodied and earthy, with two types of molasses, three types of cinnamon, nutmeg, sassafras and sarsaparilla aroma and flavors. Perfect for garnish atop egg white cocktails to provide visual appeal and intense aroma.',
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