import { Link, Image } from "@shopify/hydrogen";

import image from '../../assets/bittercube-cocktail.jpg';





export default function AlternatingTextImage({ content }){
  return(
    <div className="grid gap-6">
      {content.map(item => {
        const {title, cta, i} = item
        return (
          <div className="grid gap-6 md:grid-cols-2 alternating-text-image group" key={i}>
            <div className="flex flex-col items-center justify-center max-w-sm py-16 mx-auto text-center">
              <h3 className="font-sans h2">{title}</h3>
              <p className="text-ornament">Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis.</p>
              <Link to="/" className="btn btn-action">{cta}</Link>
            </div>
            <div className="overflow-hidden image-frame group-hover:!rounded-jumbo transition-all transform w-fit z-10 relative mx-auto duration-500">
              <Image src={image} width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
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