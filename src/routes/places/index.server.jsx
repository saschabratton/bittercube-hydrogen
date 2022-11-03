import { Layout } from "../../components/Layout.server"
// import ImageHero from "../../components/headers/ImageHero.server"
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import ImageHero from "../../components/headers/ImageHero.server";
import { Link, Image } from "@shopify/hydrogen";
import RecipeColleciton from "../../components/sections/places/RecipeCollection.client";
const HeaderText = ("places headline goes here, okay!")
import Events from "../../components/sections/places/Events.client";


const alternatingContent = [
  {
    'title': 'The Bittercube Bar & Bazaar',
    'description': 'The Bittercube Bar features a seasonal cocktail menu that showcases the unique lineup of Bittercube Bitters. The Bazaar retails Bittercube Bitters, Heirloom liqueurs, and other unique ingredients.',
    'contentHtml': '<h5>Located at<br />1234 North ave<br />Milwaukee</h5><br /><h5>At the crossroads collective</h5>',
    'cta': 'go to the bar',
    'ctaLink': '/places/bar'
  },
  {
    'title': 'Mosler’s Vault',
    'description': 'Mosler’s Vault is a cocktail bar in the confines of the former United Federal Savings & Loan bank vault. The elevated cocktail experience showcases a regularly rotating menu of rare and unique ingredients.',
    'contentHtml': '<h5>Located at<br />1234 something street<br />Milwaukee</h5>',
    'cta': 'Go to Moslers',
    'ctaLink': '/places/moslers'
  },
  {
    'title': 'Bittercube Apothecary',
    'description': 'Small shop featuring Bittercube Bitters, cocktail books, tools, and N/A ingredients. The apothecary also houses our manufactursing facility, and can be booked for private events and tours.',
    'contentHtml': '<h5>Located at<br />1234 something street<br />Milwaukee</h5>',
    'cta': '',
    'ctaLink': ''
  },
]

export default function Places() {
  return (
    <Layout>
       <ImageHero content={HeaderText} />
      <div className="container max-w-2xl text-center">
        <h2>a places headline that introduces all your spaces will go right here</h2>
      </div>
      <div className="container relative">
        <div className="absolute left-0 top-5">
          <span className="text-3xl font-decorative text-gold">Some little zippy<br />closer  here</span>
        </div>
        <AlternatingTextImage content={alternatingContent} />
      </div>
      {/* <RecipeColleciton /> */}
      <Events />
    </Layout>
  )
}