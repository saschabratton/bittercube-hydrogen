import { Link } from "@shopify/hydrogen";
import { Image } from '@shopify/hydrogen';
import Arrow from '../animations/Arrow.client'
import { makeKey } from "../../utilities/helpers";

export default function ThreeColumnFeature({ content, links }) {
  const {headline, description, ctaLabel, ctaLink, image, background, navHeadline, padding, border} = content
  const {linkLabel, link} = links
  return (
    <section className={`pt-12 pb-${padding} bg-${background}`}>
      <div className={`border-t-2 border-b-${border} border-gold`}>
        <div className="container max-w-screen-xl !py-20 mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-16">
          <div className="flex flex-col gap-6 py-16 md:col-span-3 lg:order-2 lg:col-span-2">
            <h2 className="font-sans uppercase !text-gold">{headline}</h2>
            <p>{description}</p>
            {ctaLink &&
              <Link to={ctaLink} className="mx-0 mb-0 btn btn-action">{ctaLabel}</Link>
            }
          </div>
          <div className="md:col-span-3 lg:col-span-3 lg:order-3">
            {image &&
              <Image src={image} width={460} height={555} className="object-cover mx-auto aspect-4/5 rounded-jumbo" alt={headline} />
            }
          </div>
          <div className="py-16 md:col-span-6 lg:order-1 lg:col-span-2">
            <dl className="grid gap-8">
              <dt className="h3 text-gold">{navHeadline}</dt>
              {links && links.map((link, i) => (

                <dd key={makeKey(link.linkLabel)}>
                  <span className="font-bold tracking-wide text-gold">0{i + 1}</span>
                  <hr className="my-2 border text-gold" />
                  {/* TODO: use anchor tag or Link component based on internal link or not */}
                  {/* TODO: open in new tab if anchor link */}
                  <a href={link.link} className="flex items-center justify-between w-full gap-2 mx-auto label group">{link.linkLabel} <div className="btn-arrow btn-arrow-gold"></div></a>
                </dd>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}