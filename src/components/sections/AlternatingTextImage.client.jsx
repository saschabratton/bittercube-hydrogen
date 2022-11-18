import { Link, Image } from "@shopify/hydrogen"
import { HorizontalSeperator } from "@client"
import { makeKey } from '@utils'
// ----------------------------------------------------------------------

export default function AlternatingTextImage({ content }){
  return(
    <div className="grid mx-auto gap-36 md:gap-16 lg:gap-36 max-w-7xl">
      {content.map(item => {
        const {title, cta, ctaLink, contentHtml, description, image} = item
        return (
          <div className="grid gap-6 xl:gap-0 md:grid-cols-2 alternating-text-image group" key={makeKey(title)}>
            <div className="flex flex-col items-center justify-center mx-auto text-center md:py-16">
              <h2 className="max-w-sm font-sans tracking-wide uppercase">{title}</h2>
              <div className="py-6 w-full lg:w-[28rem]">
                <HorizontalSeperator />
              </div>
              <p className="max-w-sm text-ornament">{description}</p>
              {ctaLink &&
              <Link to={ctaLink} className="btn btn-action">{cta}</Link>
              }
            </div>
            <div className="overflow-hidden image-frame group-hover:!rounded-jumbo transition-all transform w-fit z-10 relative mx-auto duration-500 h-fit flex items-center">
              {image &&
              <Image src={image} width={460} height={555} className="object-cover mx-auto rounded-none aspect-video md:aspect-4/5" alt={title} />
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}