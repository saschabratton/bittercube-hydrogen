import { Image } from "@shopify/hydrogen"
import { PrimaryMenu } from "@client"
// ----------------------------------------------------------------------
export default function HomeHero({ content }) {

  return (
    <>
     <div className="relative header-dark">
      <PrimaryMenu dark={true}/>
      <div className="absolute inset-0 overflow-hidden bg-dark">
        {/* <Image src='images/bittercube-cocktail.jpg' width="1920" height="796" className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" /> */}
        <div className="absolute w-full h-full bg-dark/80"></div>


        <video src="https://player.vimeo.com/progressive_redirect/playback/772504510/rendition/720p/file.mp4?loc=external&signature=c0e4dded82202d2cf5f7bd4e2c658e7842c63092e5c3a2765821155c58363c6f" autoPlay={true} loop muted className="object-cover w-full h-full xl:h-auto"/>



      </div>
      <div className="container relative grid grid-cols-1 mx-auto text-center uppercase sm:grid-cols-7">
        <div className="hidden sm:flex sm:items-center sm:justify-center">
          <span className="font-sans font-bold leading-5 tracking-widest text-ornament text-gold">
            EXCEPTIONAL<br />BITTERS
          </span>

        </div>
        <div className="sm:col-span-5">
          <div className="relative pb-48 pt-36">
            <h1 className="max-w-xl mx-auto text-white capitalize md:text-6xl">{ content }</h1>
            <Image src='/logos/logomark-reversed.svg' width="92" height="92" role="presentation" className="absolute -translate-x-1/2 left-1/2 bottom-20" alt="A cocktail made with Bittercube Bitters" />
          </div>

        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-center">
          <span className="font-sans font-bold leading-5 tracking-widest text-ornament text-gold">
            CAREFULLY<br />CRAFTED
          </span>
        </div>
      </div>
    </div>
    </>
  )
}
