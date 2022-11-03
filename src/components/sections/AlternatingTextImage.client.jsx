import { Link, Image } from "@shopify/hydrogen";
import HorizontalSeperator from "../headers/HorizontalSeperator.client";
import parse from 'html-react-parser';
import { makeKey } from '../../utilities/helpers'



export default function AlternatingTextImage({ content }){
  return(
    <div className="grid gap-16 mx-auto lg:gap-36 max-w-7xl">
      {content.map(item => {
        const {title, cta, ctaLink, contentHtml, description} = item
        return (
          <div className="grid gap-6 xl:gap-0 md:grid-cols-2 alternating-text-image group" key={makeKey(title)}>
            <div className="flex flex-col items-center justify-center py-16 mx-auto text-center">
              <h3 className="max-w-sm font-sans tracking-wide uppercase h2">{title}</h3>
              <div className="py-6 w-full lg:w-[28rem]">
                <HorizontalSeperator />
              </div>

              <p className="max-w-sm text-ornament">{description}</p>
              {/* {parse(contentHtml)} */}
              {ctaLink &&
              <Link to={ctaLink} className="btn btn-action">{cta}</Link>
              }
            </div>
            <div className="overflow-hidden image-frame group-hover:!rounded-jumbo transition-all transform w-fit z-10 relative mx-auto duration-500 h-full flex items-center">
              <Image src='/images/pour.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
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