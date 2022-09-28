import { Link, Image } from "@shopify/hydrogen";

import image from '../../assets/bittercube-cocktail.jpg';





export default function AlternatingTextImage({ content }){
  return(
    <div className="grid gap-6">
      {content.map(item => {
        const {title, cta, i} = item
        return (
          <div className="grid gap-6 md:grid-cols-2 alternating-text-image" key={i}>
            <div className="flex flex-col items-center justify-center max-w-sm py-16 mx-auto text-center">
              <h3 className="font-sans h2">{title}</h3>
              <p className="text-ornament">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>
              <Link to="/" className="btn btn-action">{cta}</Link>
            </div>
            <div className="image-frame">
              <Image src={image} width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" />
            </div>
          </div>
        )
      })}


      {/* <div className="grid grid-cols-1 gap-6 py-16 md:col-span-2">
        <div className="flex flex-col order-last max-w-sm gap-6 text-center">
          <h3 className="h2">artisnal bitters</h3>
          <p className="text-ornament">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>
        </div>
        <div></div>
      </div> */}
    </div>
  )
}