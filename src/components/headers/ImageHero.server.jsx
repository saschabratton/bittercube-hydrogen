import { useShopQuery, CacheNone, gql, Image } from "@shopify/hydrogen"
import Nav from "./Nav.client"


export default function ImageHero({ content }){
  const { image, text } = content


const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheNone(),
    preload: false
  });

  return(
    <div className="relative header-dark">
      <Nav shop={shop} dark={true} />
      <div className="absolute inset-0 bg-dark">
        {image &&
          <Image src={image} width={1920} height={545} className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" />
        }
        <div className="absolute inset-0 opacity-50 bg-dark mix-blend-multiply" aria-hidden="true" />
      </div>


      <div className="absolute left-0 w-1/12 md:w-[16%] lg:w-1/4 h-0.5 top-1/2 bg-gold hero-line-right">
        <div className="ornament-arrow-right hero-line-ornament"></div>
      </div>
      <div className="absolute right-0 w-1/12 md:w-[16%] lg:w-1/4 h-0.5 top-1/2 bg-gold hero-line-left">
        <div className="ornament-arrow-left hero-line-ornament"></div>
      </div>
      <div className="container relative px-2 max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
        <div className="py-28">
            <h1 className="py-4 mx-auto text-6xl text-center text-white normal-case ">{ text }</h1>
          </div>
      </div>
    </div>
  )
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;