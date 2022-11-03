import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import SubNav from "../../components/global/SubNav.server"
// import RecipeCarousel from "../../components/sections/recipes/RecipeCarousel.client"
import RecipeCarousel from "../../components/sections/RecipeCarousel.client"
import SignUp from "../../components/sections/SignUp.client";
import FeaturedBartenders from "../../components/sections/recipes/FeaturedBartender.client";
import LearnToCraft from "../../components/sections/recipes/LearnToCraft.client";
import InTheKitchen from "../../components/sections/recipes/InTheKitchen.client";
import { Image } from "@shopify/hydrogen";

const HeaderText = ("The Recipe Library")
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


export default function index() {
  return (
    <Layout>
      <ImageHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />
      <div className="container max-w-5xl pb-0 text-center pt-44 md:grid md:grid-cols-7">
        <div className="flex justify-center col-span-2">
          <div className="">
            <Image src='/emblems/signatures-classics.svg' width={101} height={111} alt="" role="presentation" />
          </div>
        </div>
        <h2 className="col-span-3 capitalize">Featured Recipes Headline Goes Here</h2>
      </div>
      <RecipeCarousel />
      {/* <LearnToCraft /> */}
      <FeaturedBartenders />
      <InTheKitchen />
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}