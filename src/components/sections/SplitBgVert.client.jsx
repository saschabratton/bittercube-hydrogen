import { Link, Image } from "@shopify/hydrogen"

import image from '../../assets/bittercube-cocktail.jpg';

export default function SplitBgVert({ content }){
  const {topLabel, topHeadline, topDescription, topCtaLabel, topCtaLink, bottomLabel, bottomHeadline, bottomCtaLabel, bottomCtaLink,featuredImage, background, padding} = content
  return(
    <section className={`pb-12 pt-${padding} bg-split-${background}`}>
      <div className="py-20 border-y-2 border-gold">
        <div className="container grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-between flex-1 gap-8 text-center lg:px-20">
                <div className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h3 text-gold">{topLabel}</span>
                  <h2 className="text-white">{topHeadline}</h2>
                  <p className="text-white">{topDescription}</p>
                  {topCtaLink &&
                    <a href={topCtaLink} className="text-white btn btn-action">{topCtaLabel}</a>
                  }
                </div>
                <div  className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h3 text-gold">{bottomLabel}</span>
                  <h3 className="text-3xl font-regular">{bottomHeadline}</h3>
                  {/* <Link to="/" className="btn btn-action">See Plans</Link> */}
                  {bottomCtaLink &&
                    <a href={bottomCtaLink} className=" btn btn-action">{bottomCtaLabel}</a>
                  }
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
              <Image src={image} width={370} height={450} className='object-cover h-[30rem] w-96 rounded-2xl ' />
            </div>

        </div>
      </div>
    </section>
  )
}