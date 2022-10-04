import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import SubNav from "../../components/global/SubNav.server"
import RecipeCarousel from "../../components/sections/RecipeCarousel.client"
import featured from '../../assets/bittercube-cocktail.jpg';
import { Link, Image } from '@shopify/hydrogen';
import SignUpForm from "../../components/global/SignUpForm.client";
import TabSection from "../../components/sections/TabSection.client";



const HeaderText = ("Recipes headline goes here")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]


export default function index() {
  return (
    <Layout>
      <ImageHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <div className="container max-w-md pb-0 text-center">
        <h2 className="capitalize h1">Featured Recipes Headline Goes Here</h2>
      </div>
      <RecipeCarousel />
      <div className="container relative pt-0 max-w-screen-2xl">
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Learn how to craft
        </div>
        <hr />

        <div className="container">
            <TabSection />
        </div>

      </div>

      <section className="py-12 bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-7 gap-6 lg:gap-28">
            <div className="flex flex-col justify-center col-span-4 gap-4">
              <span className="label">Featured Bartender</span>
              <h3 className="tracking-normal text-gold">Julian moreno-johns from lost whale</h3>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <h4 className="mt-6 label">SIGNATURE RECIPE</h4>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <a href="" className="btn btn-arrow">Go to recipe</a>
            </div>
            <div className="col-span-3">
              <Image src={featured} width={460} height={555} className="object-cover aspect-4/5 rounded-jumbo" alt="A cocktail made with Bittercube Bitters" />
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="container grid gap-20">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <Image src={featured} width={460} height={555} className="object-cover aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
            </div>
             <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center">
              <h3>Bittercube in the kitchen</h3>
              <hr />
                <p className="text-ornament">
                  Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.
                </p>
                <Link to="" className="btn btn-action">Start experimenting</Link>
             </div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-ornament">share your recipes with us on instagram</h2>
              <a href="https://www.instagram.com/bittercube/" className="btn btn-action" target="_blank" rel="noopener">Instagram</a>
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg gap-8 mx-auto mt-8">
              <h4 className="max-w-md text-center">
                Enjoy new recipes and the latest news and events
              </h4>
              <SignUpForm />
            </div>
          </div>
        </div>
      </section>
    <hr />

    </Layout>
  )
}