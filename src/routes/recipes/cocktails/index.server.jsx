import { Layout } from "../../../components/Layout.server";
import PatternHero from "../../../components/headers/PatternHero.server";
import SubNav from "../../../components/global/SubNav.server";
import Card from "../../../components/global/Card.client";
import { Link } from "@shopify/hydrogen";
import SignUp from "../../../components/sections/SignUp.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";


const HeaderText = ("Cocktail Recipes")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]

const SignUpContent = {
  'contentHtml': '<h2>Quick Diddy Prefooter Kicker</h2><p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>',
  'ctaLabel': '',
  'ctaLink': '',
}

export default function Kitchen(){
  return(
       <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />
      <div className="container grid grid-cols-3 gap-6">
        <Link to="/recipes/cocktails/recipe">
          <Card />
        </Link>
        <Link to="/recipes/cocktails/recipe">
          <Card />
        </Link>
        <Link to="/recipes/cocktails/recipe">
          <Card />
        </Link>
        <Link to="/recipes/cocktails/recipe">
          <Card />
        </Link>

      </div>
      <div className="container max-w-screen-2xl">
        <HorizontalSeperator />
      </div>

      <SignUp content={SignUpContent}/>
    </Layout>
  )
}