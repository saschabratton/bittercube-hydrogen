import { Image, Link } from "@shopify/hydrogen"

import HorizontalSeperator from "../../headers/HorizontalSeperator.client";

export default function InTheKitchen(){
  return(
    <div className="container grid gap-20 pb-0">
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:gap-16 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image src='/images/pour.jpg' width={460} height={555} className="object-cover aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
          </div>
          <div className="relative flex flex-col items-center justify-center max-w-md mx-auto text-center">
            <div className="absolute top-5 -right-16">
              <span className="text-2xl font-decorative text-gold">The Special Ingredient</span>
            </div>
            <h3>Bittercube in the kitchen</h3>
            <div className="w-full mt-6">
              <HorizontalSeperator />
            </div>
              <p className="text-ornament">
                Bitters are liquid spice. While most commonly used by bartenders in cocktails, they are a great addition to any baker's spice arsenal. There are three main ways to use bitters when baking.
              </p>
              <Link to="/recipes/kitchen" className="btn btn-action">Start experimenting</Link>
          </div>
        </div>
        <hr />
      </div>
  )
}