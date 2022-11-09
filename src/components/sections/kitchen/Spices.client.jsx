import { Link, Image } from "@shopify/hydrogen"
import HorizontalSeperator from "../../headers/HorizontalSeperator.client"


export default function Spices(){
  return(
      <div className="container relative grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-20">
        <div className="top-[90%] center-absolute ">
          <Image src='/emblems/bitters-spices.svg' width={101} height={111} alt="" role="presentation" />
        </div>
        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col items-center mx-auto text-center">
            <h2 className="max-w-sm">Bitters & Ground Spices</h2>
            <div className="py-6 w-[28rem]">
                <HorizontalSeperator />
              </div>
            <p className="max-w-sm text-ornament">
              When a recipe calls for a ground spice like cinnamon, cardamom, or cloves, you can easily substitute cocktail bitters in a 1:1 ratio. This method provides a more nuanced flavor, instead of a singularly focused intense flavor. Below are some bitters varieties and spices that work well in this context.
            </p>
          </div>
          <Image src='/images/recipes-kitchen-spices.jpg' width={366} height={455} alt='Three bitters bottles on a pile of spices' className="object-cover w-full max-w-md mx-auto aspect-4/5" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Cinnamon</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/blackstrap" className="label">Blackstrap Bitters
            </Link>
            <Link to="/shop/products/bolivar" className="label">Bolivar Bitters
            </Link>
             <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Nutmeg</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/blackstrap" className="label">Blackstrap Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Allspice</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
            <Link to="/shop/products/jamaican-2" className="label">Jamaican No. 2 Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Cardamom</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/blackstrap" className="label">Blackstrap Bitters
            </Link>
            <Link to="/shop/products/orange" className="label">Orange Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Star Anise</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
             <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Dried Ginger</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
            <Link to="/shop/products/jamaican-2" className="label">Jamaican No. 2 Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Cinnamon</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
            <Link to="/shop/products/jamaican-2" className="label">Jamaican No. 2 Bitters
            </Link>
          </div>


          <div className="flex items-center justify-center col-span-2">
            <Link to="/shop/bitters" className="mx-auto btn btn-action">Shop Bitters</Link>
          </div>
        </div>
      </div>
  )
}