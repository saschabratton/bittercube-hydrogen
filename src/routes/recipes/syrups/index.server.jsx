import { Layout } from "../../../components/Layout.server";
import PatternHero from "../../../components/headers/PatternHero.server";
import SubNav from "../../../components/global/SubNav.server";
import Card from "../../../components/global/Card.client";
import { Image, Link } from "@shopify/hydrogen";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";

const HeaderText = ("Syrups")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]

export default function Cocktails(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />


      <div className="container relative z-10 grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 text-center lg:p-28">
          <span className="label">LOREM IPSUM DOLER</span>
          <h2 className="h1">Making Syrup</h2>

        </div>
        <div className="flex flex-col items-center justify-center text-center md:p-16">
          <p className="md:max-w-lg">Syrups are a foundational ingredient in cocktails. The possibilities are endless, use teas and other spices to flavor your syrups, or combine different sweeteners to create unique variations that can elevate your cocktails even further. </p>
        </div>
        <div>
          <Image src='/images/heirloom.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters"  />
        </div>
        <div className="flex flex-col max-w-md gap-2 mx-auto text-center">
          <span className="text-2xl font-decorative text-gold">Some little zippy<br />closer here</span>
          <h3 className="h2">Simple Syrup</h3>
          <HorizontalSeperator />
          <div className="flex flex-col gap-6 text-left text-ornament">
            <dl>
              <dt>Ingredients</dt>
              <dd>Equal parts granulated sugar and water</dd>
            </dl>
            <dl>
              <dt>Instructions</dt>
              <dd>Combine equal parts of granulated sugar and boiling water removed from heat.</dd>
              <dd>Stir until dissolved, let cool before using.</dd>
              <dd>Keep covered and refrigerated for up to 2 weeks.</dd>
              <dd>Be creative! Use botanical tea instead of plain water to create a flavored syrup. For a more robust syrup, try turbinado sugar.</dd>
            </dl>
          </div>
        </div>
      </div>



      <div className="w-11/12 p-8 mx-auto border-2 border-gold">

        <div className="container grid gap-6 md:gap-16 md:grid-cols-2">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center w-16 h-16 border-2 label border-gold">A</div>
          </div>
          <div className="text-center">
            <h4 className="tracking-normal h2">Agave Nectar Syrup</h4>
            <HorizontalSeperator />
            <div className="flex flex-col gap-6 text-left text-ornament">
            <dl>
              <dt>Ingredients</dt>
              <dd>3 cups organic agave nectar</dd>
              <dd>2 cups water</dd>
            </dl>
            <dl>
              <dt>Instructions</dt>
              <dd>Combine ingredients and whisk together until fully amalgamated.</dd>
              <dd>Bottle and refrigerate for up to one month.</dd>
            </dl>
          </div>
          </div>


        </div>
      </div>
    </Layout>
  )
}