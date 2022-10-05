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
    'title': 'The bittercube bar',
    'description': '',
    'contentHtml': '<h5>Located at<br />1234 North ave<br />Milwaukee</h5><br /><h5>At the crossroads collective</h5>',
    'cta': 'go to the bar',
    'ctaLink': '/places/moslers'
  },
  {
    'title': 'Mosler’s Vault',
    'description': '',
    'contentHtml': '<h5>Located at<br />1234 something street<br />Milwaukee</h5>',
    'cta': 'Go to Moslers',
    'ctaLink': '/places/moslers'
  },
]

export default function Places() {
  return (
    <Layout>
       <ImageHero content={HeaderText} />
      <div className="container max-w-2xl text-center">
        <h2>a places headline that introduces all your spaces will go right here</h2>
      </div>
      <div className="container">
        <AlternatingTextImage content={alternatingContent} />
      </div>
      <RecipeColleciton />
      <Events />





    </Layout>
  )
}