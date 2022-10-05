import PatternHero from "../../../components/headers/PatternHero.server";
import { Layout } from "../../../components/Layout.server";
import SubNav from "../../../components/global/SubNav.server";
import SignUp from "../../../components/sections/SignUp.client";
import Flavors from "../../../components/sections/kitchen/Flavors.client";
import Spices from "../../../components/sections/kitchen/Spices.client";
import CardCarousel from "../../../components/sections/CardCarousel.client";


const HeaderText = ("Bitters in the kitchen")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]
const SignUpContent = {
  'contentHtml': '<h2>share your recipes with us on instagram</h2>',
  'ctaLabel': 'Instagram',
  'ctaLink': 'https://www.instagram.com/bittercube/',
}


export default function Kitchen(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />
      <Flavors />
      <div className="bg-dark">
        <div className="container max-w-3xl pb-0 text-center">
          <h2 className="mb-6">bitters as added flavor</h2>
          <p>When a recipe calls for a flavor extract such as vanilla or almond extract, you can easily substitute bitters in a 1:1 ratio to provide more complexity and a robust flavor profile. Below are some examples of this technique.</p>
        </div>
        <CardCarousel />
      </div>
      <Spices />
      <hr className="w-11/12 mx-auto"/>
      <SignUp content={SignUpContent}/>

    </Layout>
  )
}