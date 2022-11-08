import HorizontalSeperator from "../../headers/HorizontalSeperator.client"
import { Image } from "@shopify/hydrogen"
import VerticalSeparator from "../../animations/VerticalSeparator.client";
import TabSection from "../TabSection.client";


const TabContent = [
  {
    'label': 'Dropper VS Dash',
    'contentHtml': '<p>In general, both a dash (from Bittercube 1.7 oz or 5 oz bottles) or dropper (from Bittercube 1 oz bottles) are equivalent to slightly less than one ml of bitters. However, follow the instructions below for an accurate measurement.</p><h6>DISPENSING BITTERS FROM A 1 OZ BOTTLE</h6><p>Squeeze the bulb of the dropper twice, filling it to about three-quarters of its capacity. The bitters should not enter the bulb. Release the bitters by squeezing the bulb repeatedly until the dropper is empty.</p><h6>DISPENSING BITTERS FROM A 1.7 OZ OR 5 OZ BOTTLE</h6><p>Holding the neck of the bottle and using one fluid movement, swing the bottle until upside down. With a downward thrust, expel a dash of bitters from the bottle.</p>',
  },
  {
    'label': 'Shaking & Stirring',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  },
  {
    'label': 'Experimentation',
    'contentHtml': '<h6>Something else</h6><p>Burnt sugar, cinnamon, dried fruit, chamomile and jasmine</p>',
  }
]

export default function LearnToCraft() {
  return(
    <>
      <div className="relative w-11/12 mx-auto mt-20">
        <HorizontalSeperator />
        <div className="absolute top-0 z-10 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Learn how to craft
        </div>
      </div>
      <div className="container relative grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* <VerticalSeparator /> */}
        <div className="p-8">
          <Image src='images/bittercube-cocktail.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="flex flex-col gap-6 p-8">
          <h3 className="tracking-normal">Cocktail Basics</h3>
          <TabSection content={TabContent} />
        </div>
      </div>
      <div className="relative w-11/12 mx-auto mb-20">
        <HorizontalSeperator />
      </div>
    </>
  )
}