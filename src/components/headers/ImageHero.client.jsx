import image from '../../assets/bittercube-cocktail.jpg';
import { Image } from "@shopify/hydrogen"

export default function ImageHero({ content }){
  return(
    <div className="relative">
      <div className="absolute inset-0">
        <Image src={image} width={1920} height={545} className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" />
      </div>
      <div className="container relative">
        <div className="py-28">
            <h1 className="max-w-2xl py-4 mx-auto text-6xl text-center text-white capitalize">{ content }</h1>
          </div>
      </div>
    </div>
  )
}