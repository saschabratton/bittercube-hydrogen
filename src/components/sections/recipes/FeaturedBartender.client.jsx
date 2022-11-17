import { Link, Image } from "@shopify/hydrogen"



// TODO: pull in data from bartender api

export default function FeaturedBartenders(){
  return(
     <section className="py-12 bg-dark" id="featured-bartender">
        <div className="border-y-2 border-gold">
          <div className="container grid max-w-5xl col-span-1 gap-6 lg:grid-cols-7 lg:gap-16">
            <div className="flex flex-col justify-center col-span-1 gap-4 lg:col-span-4">
              <span className="label">Featured Bartender</span>
              <h3 className="max-w-sm tracking-normal text-gold">HAYDEN HARPOLE from Misfit Coffee</h3>
              <p>Hayden has been bartending 8 years, and is also the roaster at Misfit Coffee Company.</p>
              <h4 className="mt-6 label">SIGNATURE RECIPE</h4>
              <p>This spirit forward sipper is the perfect after-dinner drink.</p>

              <Link to="/recipes/all/bogart" className="flex justify-between pt-4 border-t-2 w-fit lg:w-60 label group border-gold">Go to recipe
                <div className="btn-arrow btn-arrow-gold"></div>
              </Link>

            </div>
            <div className="col-span-1 lg:col-span-3">
              <Image src='/images/misfit.jpeg' width={460} height={555} className="object-cover mx-auto aspect-4/5 rounded-jumbo" alt="HAYDEN HARPOLE" />
            </div>
          </div>

        </div>
      </section>
  )
}