import { Image } from "@shopify/hydrogen"
import Navigation from "../global/Navigation.server";

export default function ImageHero({ content }){
  return(
    <div className="relative header-dark h-[545px]">
      <Navigation />
      <div className="absolute inset-0">
        <Image src='/images/imageheader.jpg' width={1920} height={545} className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" />
      </div>
      <div className="absolute left-0 w-1/4 h-0.5 top-1/2 bg-gold">
        <div className="ornament-arrow-right"></div>
      </div>
      <div className="absolute right-0 w-1/4 h-0.5 top-1/2 bg-gold">
        <div className="ornament-arrow-left"></div>
        </div>
      <hr />

      <div className="container relative">
        <div className="py-28">
            <h1 className="max-w-2xl py-4 mx-auto text-6xl text-center text-white capitalize">{ content }</h1>
          </div>
      </div>
    </div>
  )
}