import { Image, Link } from "@shopify/hydrogen"
import FeaturedImage from '../../../assets/bittercube-cocktail.jpg';
import Carousel from 'better-react-carousel'
import VerticalSeparator from "../../animations/VerticalSeparator.client";
import TabSection from "../TabSection.client";
import Emblem from '../../../assets/emblems/botanicals-emblem.svg'

const RecommendedProducts = [
  {'label': 'hierloom nitro espresso martini',
  'FeaturedImage': 'src/assets/images/oldestpal.jpg'},
  {'label': 'hierloom nitro espresso martini',
  'FeaturedImage': 'src/assets/bittercube-cocktail.jpg'},
]
const TabContent = [
  {
    'label': 'ingredients',
    'contentHtml': '<dl><dt>Mix</dt><dd>2 oz Rye Whiskey</dd><dd>1/2 oz Sweet Vermouth</dd><dd>1/2 oz Heirloom Alchermes</dd><dd>2 dashes Bittercube Root Beer Bitters</dd></dl>',
  },
  {
    'label': 'Instructions',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'Get the supplies',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
]



const arrowLeft = () => (
  <span type="prev" className="absolute z-10 w-6 h-6 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -left-24 top-2/3 bg-gold hover:bg-dark"></span>
)
const arrowRight = () => (
  <span type="prev" className="absolute z-10 w-6 h-6 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -left-24 top-1/3 bg-gold hover:bg-dark"></span>
)

export default function RecipeCarousel() {
  return(

    <div className="container relative flex py-0 mx-auto my-20 border-2 border-gold md:grid md:grid-cols-8 md:px-0">
      <VerticalSeparator />
      <div className="absolute -top-10 right-10">
        <Image src={Emblem} width={101} height={111} alt="" role="presentation" />
      </div>
      <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">Recipe Collection</div>
      <div className="flex items-center justify-center col-span-1 text-center border-r-2 label border-gold">
         <span>Swipe<br />for<br />more</span>
      </div>
      <div className="col-span-1 lg:col-span-7">
          <Carousel cols={1} rows={1} gap={16} loop arrowLeft={arrowLeft} arrowRight={arrowRight} >
            {RecommendedProducts.map(item => {
              const {label, FeaturedImage } = item
              return(
                <Carousel.Item>
                  <div className="relative grid grid-cols-1 md:grid-cols-7">
                    <div className="flex items-center p-20 md:col-span-3">
                      <Image src={FeaturedImage} width={460} height={555} className="object-cover shadow-md rotate-3 aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
                    </div>
                    <div className="flex flex-col gap-6 md:col-span-4">
                      <div className="flex flex-col gap-6 px-8 pt-28">
                        <h3>{label}</h3>
                        <TabSection content={TabContent} />
                      </div>

                      <div className="flex items-center justify-start gap-6 px-8 border-t-2 border-gold">
                        <Link to="/recipes" className="mx-0 btn btn-action">All Recipes</Link>
                        <Link to="/shop/bitters/product" className="flex gap-2 label group w-fit">Get the bitters
                          <div className="btn-arrow"></div>
                        </Link>
                      </div>
                    </div>
                  </div>

                </Carousel.Item>
              )
              })}
            </Carousel>
      </div>
    </div>
  )
}