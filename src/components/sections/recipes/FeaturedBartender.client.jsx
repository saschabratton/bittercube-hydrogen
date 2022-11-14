import { Link, Image } from "@shopify/hydrogen"



export default function FeaturedBartenders(){
  return(
     <section className="py-12 bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid col-span-1 gap-6 lg:grid-cols-7 lg:gap-28">
            <div className="flex flex-col justify-center col-span-1 gap-4 lg:col-span-4">
              <span className="label">Featured Bartender</span>
              <h3 className="max-w-sm tracking-normal text-gold">HAYDEN HARPOLE from Misfit Coffee, Minneapolis</h3>
              <p>Hayden has been bartending 8 years, and is also the roaster at Misfit Coffee Company.</p>
              <h4 className="mt-6 label">SIGNATURE RECIPE</h4>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

              <Link to="#" className="flex justify-between pt-4 border-t-2 w-fit lg:w-60 label group border-gold">Go to recipe
                <div className="btn-arrow btn-arrow-gold"></div>
              </Link>

            </div>
            <div className="col-span-1 lg:col-span-3">
              <Image src='/images/about.jpg' width={460} height={555} className="object-cover mx-auto aspect-4/5 rounded-jumbo" alt="Two men in suits posing in front of a shelf of bitters and a small tree" />
            </div>
          </div>

        </div>
      </section>
  )
}