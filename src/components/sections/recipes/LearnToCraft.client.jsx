import HorizontalSeperator from "../../headers/HorizontalSeperator.client"
import { Image } from "@shopify/hydrogen"
import VerticalSeparator from "../../animations/VerticalSeparator.client";
import TabSection from "../TabSection.client";


const TabContent = [
  {
    'label': 'Dropper VS Dash',
    'contentHtml': '<dl><dt></dt><dd>In general, both a dash (from Bittercube 1.7 oz or 5 oz bottles) or dropper (from Bittercube 1 oz bottles) are equivalent to slightly less than one ml of bitters. However, follow the instructions below for an accurate measurement.</dd></dl><dl><dt>DISPENSING BITTERS FROM A 1 OZ BOTTLE</dt><dd>Squeeze the bulb of the dropper twice, filling it to about three-quarters of its capacity. The bitters should not enter the bulb. Release the bitters by squeezing the bulb repeatedly until the dropper is empty.</dd></dl><dl><dt>DISPENSING BITTERS FROM A 1.7 OZ OR 5 OZ BOTTLE</dt><dd>Holding the neck of the bottle and using one fluid movement, swing the bottle until upside down. With a downward thrust, expel a dash of bitters from the bottle.</dd></dl>'
  },
  {
    'label': 'Shaking & Stirring',
    'contentHtml': '<dl><dt></dt><dd>Shaking and stirring each have particular effects on a cocktail. Some basics of these techniques</dd></dl><dl><dt>SHAKING</dt><dd>Aims to chill, aerate, and add water to a cocktail. The ingredients to be shaken are combined (almost always with ice) in your preferred cocktail shaker. The shake should be firm and energetic, and the ice should strike each end of the tin as the shaker moves back and forth. "Double strain" with a hawthorne strainer and a tea strainer after shaking to catch tiny ice chips.</dd></dl><dl><dt>STIRRING</dt><dd>Is used to amalgamate, chill, and add water to a cocktail without aeration. This is done in a stirring vessel with a bar spoon. The aim is to smoothly spin the ingredients—without causing air bubbles—until proper dilution and temperature are achieved. Strain with a julep strainer, but if you don’t have one a hawthorne strainer can be substituted.</dd></dl>',
  },
  {
    'label': 'Experimentation',
    'contentHtml': '<dl><dt>Experimentation Is Key</dt><dd>Try the classics, but don’t be afraid to experiment. Train your palate to recognize a well-balanced cocktail. Swap lemon and line, spirits, syrups, and-or bitters to create many cocktail variations.</dd></dl><dl><dt>BEYOND COCKTAILS</dt><dd>Bitters are concentrated complex flavors, and their use isn’t limited to cocktails. Use Orange Bitters in a wheat beer; try Cherry Bark Vanilla as a replacement for vanilla extract; put Jamaican No. 2 in a vinaigrette; add Jamaican No. 1 to gingerbread. The possibilities are endless!</dd></dl>',
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
      <div className="container relative grid w-11/12 grid-cols-1 gap-6 md:grid-cols-2">
        {/* <VerticalSeparator /> */}
        <div className="p-8">
          <Image src='images/bittercube-cocktail.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="flex flex-col gap-6 py-8">
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