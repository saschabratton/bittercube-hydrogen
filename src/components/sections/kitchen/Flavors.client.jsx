import { Link, Image } from "@shopify/hydrogen"
import HorizontalSeperator from "../../headers/HorizontalSeperator.client"

export default function Flavors(){
  return(
    <div className="container relative grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-20">
        <div className="top-[90%] center-absolute ">
          <Image src='/emblems/bitters-flavors.svg' width={101} height={111} alt="" role="presentation" />
        </div>
        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col items-center mx-auto text-center">
            <h2 className="max-w-sm">Bitters & Flavor Extracts</h2>
            <div className="py-6 w-[28rem]">
                <HorizontalSeperator />
              </div>
            <p className="max-w-sm text-ornament">
              When a recipe calls for a flavor extract such as vanilla or almond extract, you can easily substitute bitters in a 1:1 ratio to provide more complexity and a robust flavor profile. Below are some examples of this technique.
            </p>
          </div>
          <Image src='/images/recipes-kitchen-flavorextracts.jpg' width={366} height={455} alt='A bottle of bitters and baking ingredients' className="object-cover w-full max-w-md mx-auto aspect-4/5" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Vanilla Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
            <Link to="/shop/products/root-beer" className="label">Root Beer Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Almond Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Maple Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
            <Link to="/shop/products/root-beer" className="label">Root Beer Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Ginger Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
            <Link to="/shop/products/jamaican-2" className="label">Jamaican No. 2 Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Anise Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/cherry-bark-vanilla" className="label">Cherry Bark Vanilla Bitters
            </Link>
            <Link to="/shop/products/jamaican-1" className="label">Jamaican No. 1 Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Citrus Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/cherry-bark-vanilla" className="label">Orange Bitters
            </Link>
            <Link to="/shop/products/jamaican-2" className="label">Jamaican No. 2 Bitters
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center">
            <h3>Coffee Extract</h3>
            <span className="text-ornament"></span>
            <Link to="/shop/products/chipotle-cacao" className="label">Chipotle Cacao Bitters
            </Link>
          </div>



          <div className="col-span-2"></div>
        </div>
    </div>
  )
}