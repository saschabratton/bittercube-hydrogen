
// import logomark from '../assets/logomark-reversed.svg'
import { useShopQuery, CacheLong, gql, Image } from "@shopify/hydrogen";
import Navigation from "../global/Navigation.server";
import Nav from "./Nav.client";

export default function PatternHero({ content }) {

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
     <div className="relative bg-dark bg-pattern header-dark">
      <Nav shop={shop} />
      <div className="container relative text-center">
        <div className="py-28">
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
          <h1 className="max-w-2xl py-4 mx-auto text-6xl capitalize text-outline">{ content }</h1>
          <div className="h-0.5 w-20 mx-auto bg-gold grow-outward"></div>
        </div>
      </div>
    </div>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;