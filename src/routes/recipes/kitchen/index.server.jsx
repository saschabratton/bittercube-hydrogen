import PatternHero from "../../../components/headers/PatternHero.server";
import { Layout } from "../../../components/Layout.server";
import image from '../../../assets/bittercube-cocktail.jpg'
import { Link, Image } from "@shopify/hydrogen"
import SubNav from "../../../components/global/SubNav.server";

const HeaderText = ("Bitters in the kitchen")
const pageNav = [
  { label: 'seasonal', link: '/recipes'},
  { label: 'cocktails', link: '/recipes/cocktails'},
  { label: 'syrups', link: '/recipes/syrups'},
  { label: 'in the kitchen', link: '/recipes/kitchen'},
]


export default function Kitchen(){
  return(
    <Layout>
      <PatternHero content={HeaderText} />
      <SubNav navigation={pageNav} />
      <hr />
      <div className="container grid grid-cols-2 gap-6 md:gap-20">
        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col max-w-md gap-6 mx-auto text-center">
            <h2>Bitters & Flavor Extracts</h2>
            <p className="text-ornament">
              When a recipe calls for a flavor extract such as vanilla or almond extract, you can easily substitute bitters in a 1:1 ratio to provide more complexity and a robust flavor profile. Below are some examples of this technique.
            </p>
          </div>
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full max-w-md mx-auto aspect-4/5" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6">bitters as added flavor</h2>
          <p>When a recipe calls for a flavor extract such as vanilla or almond extract, you can easily substitute bitters in a 1:1 ratio to provide more complexity and a robust flavor profile. Below are some examples of this technique.</p>
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-6 md:gap-20">
        <div className="flex flex-col justify-between gap-20">
          <div className="flex flex-col max-w-md gap-6 mx-auto text-center">
            <h2>Bitters & Ground Spices</h2>
            <p className="text-ornament">
              When a recipe calls for a ground spice like cinnamon, cardamom, or cloves, you can easily substitute cocktail bitters in a 1:1 ratio. This method provides a more nuanced flavor, instead of a singularly focused intense flavor. Below are some bitters varieties and spices that work well in this context.
            </p>
          </div>
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full max-w-md mx-auto aspect-4/5" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <h3>Vanilla Extract</h3>
            <p>Use Cherry Bark Vanilla</p>
            <a href="/shop/bitters/product" className="w-40 my-0 btn btn-arrow">Shop Products</a>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <Link to="/store/bitters" className="mx-auto btn btn-action">Shop Bitters</Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}