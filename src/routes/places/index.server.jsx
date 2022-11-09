import { Layout } from "../../components/Layout.server"
// import ImageHero from "../../components/headers/ImageHero.server"
import AlternatingTextImage from "../../components/sections/AlternatingTextImage.client";
import ImageHero from "../../components/headers/ImageHero.server";
import { Link, Image } from "@shopify/hydrogen";
import RecipeColleciton from "../../components/sections/places/RecipeCollection.client";
import ThreeColumnFeature from "../../components/sections/ThreeColumnFeature.client";


const HeaderContent ={
  'text': 'Made in Milwaukee. Imbibed globally',
  'image': '',
}
const ThreeColumnFeaturedContent = {
  'headline': 'Entertaining Education',
  'description': 'Over the last feww years, Bittercube has hosted online classes covering topics such as seasonal cocktails, coffee cocktails, and many others. The entire catalog of classes are available online.',
  'ctaLabel': '',
  'ctaLink': '',
  'background': 'dark',
  'image': '',
  'navHeadline': 'Visit our places',
  'padding': '12',
  'border': '2',
  'image': '',
  'imageAlt': ""
}
const ThreeColumnFeaturedLinks = [
  {
    'linkLabel': 'ONLINE CLASS INQUIRY',
    'link': 'mailto:info@bittercube.com',
  },
  {
    'linkLabel': 'ONLINE CLASS LIBRARY',
    'link': 'https://www.crowdcast.io/bittercube',
  },
]


const alternatingContent = [
  {
    'title': 'The Bittercube Bar & Bazaar',
    'description': 'The Bittercube Bar features a seasonal cocktail menu that showcases the unique lineup of Bittercube Bitters. The Bazaar retails Bittercube Bitters, Heirloom liqueurs, and other unique ingredients.',
    'contentHtml': '<h5>Located at<br />1234 North ave<br />Milwaukee</h5><br /><h5>At the crossroads collective</h5>',
    'cta': 'go to the bar',
    'ctaLink': '/places/bar',
    'image': '/images/places-bc-bar.jpg'
  },
  {
    'title': 'Mosler’s Vault',
    'description': 'Mosler’s Vault is a cocktail bar in the confines of the former United Federal Savings & Loan bank vault. The elevated cocktail experience showcases a regularly rotating menu of rare and unique ingredients.',
    'contentHtml': '<h5>Located at<br />1234 something street<br />Milwaukee</h5>',
    'cta': "Go to Mosler's",
    'ctaLink': '/places/moslers',
    'image': '/images/places-moslersvault.jpg'
  },
  {
    'title': 'Bittercube Apothecary',
    'description': 'Small shop featuring Bittercube Bitters, cocktail books, tools, and N/A ingredients. The apothecary also houses our  manufacturing facility, and can be booked for private events and tours.',
    'contentHtml': '<h5>Located at<br />1234 something street<br />Milwaukee</h5>',
    'cta': 'Go to the apothecary',
    'ctaLink': '/places/apothecary',
    'image': '/images/places-apothecary.jpg'
  },
]

export default function Places() {
  return (
    <Layout>
       <ImageHero content={HeaderContent} />
      <div className="container max-w-2xl text-center">
        <h2>Join us for a cocktail, swing by to pick up Bittercube swag, or get info about a tour.</h2>
      </div>
      <div className="container relative">
        <div className="absolute left-0 top-5">
          <span className="text-3xl font-decorative text-gold">Some little zippy<br />closer  here</span>
        </div>
        <AlternatingTextImage content={alternatingContent} />
      </div>
      {/* <RecipeColleciton /> */}
      <ThreeColumnFeature content={ThreeColumnFeaturedContent} links={ThreeColumnFeaturedLinks} />
    </Layout>
  )
}