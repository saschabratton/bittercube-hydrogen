import { Layout } from "../../../components/Layout.server";
import {  gql, useShopQuery, Link, Image, CacheLong, useRouteParams, fetchSync } from "@shopify/hydrogen"
import TabSection from "../../../components/sections/recipes/TabSection.client";
import CardCarousel from "../../../components/sections/CardCarousel.client";
import WholesaleBitters from "../../../components/sections/WholesaleBitters";
import Arrow from "../../../components/global/icons/Arrow.client"
import SplitBgVertBlue from "../../../components/sections/SplitBgVertBlue.client";
import HorizontalSeperator from "../../../components/headers/HorizontalSeperator.client";
import Nav from "../../../components/headers/Nav.client";
import ImageCarousel from "../../../components/sections/ImageCarousel.client";





const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

export default function Recipe(){

  const {
    data: { shop },
    } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
  });

  // TODO: 404 redirect for non routes
  const {handle} = useRouteParams();

  const recipes = fetchSync(recipesApi,{
    preload: false,
  }).json()

  const activeRecipe = recipes.find(recipe => recipe.slug === handle)



  return(
    <Layout>
      <Nav shop={shop} dark={false}/>
      <div className="container flex items-center w-11/12 gap-2 pb-6">
        <Link className="transition duration-700 label text-dark hover:text-gold" to="/recipes">Recipes</Link>
        <Arrow />
        <Link className="label" to="/recipes/cocktails">Cocktails</Link>
      </div>

      <div className="container grid w-11/12 grid-cols-1 gap-6 lg:grid-cols-2">

        <div className="lg:hidden">
          <ImageCarousel activeRecipe={activeRecipe} />
        </div>

        <div className="hidden gap-6 lg:flex lg:flex-col">
          <Image src={activeRecipe.images[0].url} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          {/* TODO: random dropper image  */}
          <Image src='/images/pour.jpg' width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <span className="label">{activeRecipe.flavors[0]}</span>
          <h2>{activeRecipe.name}</h2>

          {activeRecipe.description &&
            <p>{activeRecipe.description}</p>
          }

          {/* {activeRecipe.bitters.length > 0 && activeRecipe.bitters.map(bitters => {
              const { url } = bitters
              return (
                <Link to={`/shop${ url }`} className="ml-0 btn btn-action">Get the bitters<br />
                </Link>
              )
            })
          } */}

          {/* <div className="flex flex-col items-start justify-center gap-6 label">
            How to craft
            <div className="ml-8 rotate-90">
              <Arrow />
            </div>
          </div> */}
          <div className="py-6">
            <HorizontalSeperator />
          </div>
          <h3>Make the cocktail</h3>
          <div>
            <TabSection activeRecipe={activeRecipe}/>
          </div>
        </div>
      </div>
      <div className="relative w-11/12 pt-0 mx-auto">
        <HorizontalSeperator />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recommended
        </div>
      </div>
      <CardCarousel />
      <SplitBgVertBlue />
      <WholesaleBitters />
    </Layout>
  )
}


const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`