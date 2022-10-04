import { Layout } from "../../../components/Layout.server";
import PatternHero from "../../../components/headers/PatternHero.server";
import SubNav from "../../../components/global/SubNav.server";
import Card from "../../../components/global/Card.client";
import { Link } from "@shopify/hydrogen";


const HeaderText = ("Cocktail Recipes")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]


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
    </Layout>
  )
}