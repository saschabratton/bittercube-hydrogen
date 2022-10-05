import { Link, Image } from "@shopify/hydrogen"
import featured from '../../../assets/bittercube-cocktail.jpg';



export default function FeaturedBartenders(){
  return(
     <section className="py-12 bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-7 gap-6 lg:gap-28">
            <div className="flex flex-col justify-center col-span-4 gap-4">
              <span className="label">Featured Bartender</span>
              <h3 className="max-w-sm tracking-normal text-gold">Julian moreno-johns from lost whale</h3>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <h4 className="mt-6 label">SIGNATURE RECIPE</h4>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

              <Link to="/recipes/cocktails/recipe" className="flex justify-between pt-4 border-t-2 w-fit lg:w-60 label group border-gold">Go to recipe
                <div className="btn-arrow btn-arrow-gold"></div>
              </Link>

            </div>
            <div className="col-span-3">
              <Image src={featured} width={460} height={555} className="object-cover aspect-4/5 rounded-jumbo" alt="A cocktail made with Bittercube Bitters" />
            </div>
          </div>

        </div>
      </section>
  )
}