import { Layout } from '@components/all.server'
import ImageHero from "../../components/headers/ImageHero.server"
import SubNav from "../../components/global/SubNav.server"
import RecipeCarousel from "../../components/sections/RecipeCarousel.client"
import SignUp from "../../components/sections/SignUp.client";
import FeaturedBartenders from "../../components/sections/recipes/FeaturedBartender.client";
import LearnToCraft from "../../components/sections/recipes/LearnToCraft.client";
import InTheKitchen from "../../components/sections/recipes/InTheKitchen.client";
import { Image } from "@shopify/hydrogen";
import RecipesNav from "../../components/headers/RecipesNav.server";
import HorizontalSeperator from "../../components/headers/HorizontalSeperator.client";



const HeaderContent ={
  'text': 'The Recipe Library',
  'image': '/images/recipes-hero.jpg',
}

const SignUpContent = {
  'contentHtml': '<h2>share your recipes with us on instagram</h2>',
  'ctaLabel': 'Instagram',
  'ctaLink': 'https://www.instagram.com/bittercube/',
}


export default function index() {
  return (
    <Layout>
      <ImageHero content={HeaderContent} />
      <RecipesNav />
      <hr />
      <div className="container max-w-5xl pb-0 text-center pt-44 md:grid md:grid-cols-7">
        <div className="flex items-center justify-center col-span-2">
          <div className="">
            <Image src='/emblems/signatures-classics.svg' width={101} height={111} alt=" " role="presentation" />
          </div>
        </div>
        <h2 className="col-span-3 mt-5 mb-0 capitalize">Featured Cocktails</h2>
      </div>

      <RecipeCarousel />
      <LearnToCraft />
      <FeaturedBartenders />
      <InTheKitchen />
      <div className="w-11/12 pt-12 mx-auto">
        <HorizontalSeperator />
      </div>
      <SignUp content={SignUpContent}/>
    </Layout>
  )
}