import { Link, Image } from "@shopify/hydrogen"

export default function RecipeCard(){
  return(
    <Link to="/recipes/cocktails/recipe">
      <div className="grid gap-2 text-center group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          <Image src='/images/oldestpal.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
          </div>
          <div className="mt-4 text-2xl font-decorative text-gold">Citrusy</div>
          <h3>Oldest Pal</h3>
          <p className="text-ornament">
            By swapping Rose Water for Root Beer Bitters, this New Orleans classic is transformed into a frothy, winter sipper.
          </p>

        <div className="flex gap-2 mx-auto w-fit label group">
          <p className="mb-0 font-bold tracking-widest uppercase text-gold">View Recipe</p>
          <div className="btn-arrow"></div>
        </div>
      </div>
    </Link>
  )
}