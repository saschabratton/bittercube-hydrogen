import image from '../../assets/bittercube-cocktail.jpg';
import { Image } from "@shopify/hydrogen"

export default function ImageHero({ content }){
  return(
    <div className="relative">
      <div className="absolute inset-0">
        <Image src={image} width={1920} height={545} className="h-full w-full object-cover" />
      </div>
      <div className="relative container">
        <div className="py-28">
            <h1 className="capitalize py-4 text-white mx-auto text-6xl  max-w-2xl text-center">{ content }</h1>
          </div>
      </div>
    </div>
  )
}