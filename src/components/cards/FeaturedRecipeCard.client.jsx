import { Link, Image } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
export default function FeaturedRecipeCard({ recipe }){
  const { slug, name, images, descripiton, flavors } = recipe

  const flavor = flavors[0].replace(/\s+/g, '-').toLowerCase();
  console.log('flavor is', flavor)

  return(
    <Link to={`/recipes/${slug}`}>
      <div className="grid gap-2 text-center group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          <Image src={ images[0].url } width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
          </div>
          {/* <div className="mt-4 text-2xl capitalize font-decorative text-gold">
              { flavors[0] }
          </div> */}
          <Image src={`/images/flavors/${flavor}.svg`} className="h-8 mx-auto" width={200} height={35} alt={flavor}/>
          <h3>{name}</h3>
          {descripiton &&
            <p className="text-ornament">
              {descripiton}
            </p>
          }

        <div className="flex gap-2 mx-auto w-fit label group">
          <p className="mb-0 font-bold tracking-widest uppercase text-gold">View Recipe</p>
          <div className="btn-arrow"></div>
        </div>
      </div>
    </Link>
  )
}