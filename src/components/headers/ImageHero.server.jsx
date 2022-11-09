import { useShopQuery, CacheLong, gql, Image } from "@shopify/hydrogen";
import Navigation from "../global/Navigation.server";
import Nav from "./Nav.client";


export default function ImageHero({ content }){
  const { image, text } = content


const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return(
    <div className="relative header-dark">
      <Nav shop={shop} />
      <div className="absolute inset-0 bg-dark">
        {console.log('hello')}
{image &&
        <Image src={image} width={1920} height={545} className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" />
}
        <div className="absolute inset-0 opacity-40 bg-dark mix-blend-multiply" aria-hidden="true" />
      </div>


      <div className="absolute left-0 w-1/4 h-0.5 top-1/2 bg-gold hero-line-right">
        <div className="ornament-arrow-right hero-line-ornament"></div>
      </div>
      <div className="absolute right-0 w-1/4 h-0.5 top-1/2 bg-gold hero-line-left">
        <div className="ornament-arrow-left hero-line-ornament"></div>
      </div>
      <div className="container relative">
        <div className="py-28">
            <h1 className="max-w-sm py-4 mx-auto text-6xl text-center text-white capitalize md:max-w-xl">{ text }</h1>
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