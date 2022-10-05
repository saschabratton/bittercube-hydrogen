import { Link, Image } from "@shopify/hydrogen"
import image from '../../../assets/bittercube-cocktail.jpg'


export default function Flavors(){
  return(
    <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-20">
        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col max-w-md gap-6 mx-auto text-center">
            <h2>Bitters & Flavor Extracts</h2>
            <p className="text-ornament">
              When a recipe calls for a flavor extract such as vanilla or almond extract, you can easily substitute bitters in a 1:1 ratio to provide more complexity and a robust flavor profile. Below are some examples of this technique.
            </p>
          </div>
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full max-w-md mx-auto aspect-4/5" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <Link to="/shop/bitters/product" className="flex gap-2 mx-auto label group w-fit">Shop Product
              <div className="btn-arrow"></div>
            </Link>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
  )
}