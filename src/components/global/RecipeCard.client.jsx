import { Link, Image } from "@shopify/hydrogen"

export default function RecipeCard(){
  return(
    <Link to="/shop/bitters/product">
      <div className="grid gap-2 group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          <Image src='images/bittercube-cocktail.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
          </div>
        <div className="flex justify-between">
          <div className="label">Bittercube Orange Bitters</div>
          <div className="text-dark">Rye Whiskey</div>
        </div>
        <hr />

        <div className="flex justify-between w-full gap-2 mx-auto label group">
          <p className="mb-0 font-bold tracking-widest uppercase">"Oldest Pal"</p>
          <div className="btn-arrow"></div>
        </div>
        <span className="transition duration-700 opacity-0 group-hover:opacity-100 group-hover:flex text-dark">Sweet and zippy, perfect for summer</span>
      </div>
    </Link>
  )
}