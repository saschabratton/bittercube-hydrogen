import { Link, Image } from "@shopify/hydrogen"

export default function RecipeCard({ recipe }){
  const { slug, name, description, spirit, images } = recipe
  // {console.log(recipe.recipe.slug)}
  return(
    <Link to={`/recipes/cocktails/${slug}`}>
      <div className="grid gap-2 group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          {/* <Image src={`https://lavish-turnip.cloudvent.net/${ recipe.recipe.image }`} width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" /> */}



          <Image src={ images[0].url } width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />


        </div>
        <div className="flex justify-between">
          <div className="capitalize label">
            {/* TODO: bittercube bitters product */}
            Bittercube product
          </div>
          <div className="text-dark">
             { spirit }
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between w-full gap-2 mx-auto label group">
          <p className="mb-0 font-bold tracking-widest uppercase">{ name }</p>
          <div className="btn-arrow"></div>
        </div>
        { description &&
        // TODO: line clamp
          <div className="overflow-x-hidden transition duration-700 opacity-0 group-hover:opacity-100 group-hover:flex text-dark">
            { description }
          </div>
        }
      </div>
    </Link>
  )
}