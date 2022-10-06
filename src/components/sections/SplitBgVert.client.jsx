import { Link, Image } from "@shopify/hydrogen"
import parse from 'html-react-parser';

export default function SplitBgVert({ content }){
  const {topLabel, topHeadline, topDescription, topCtaLabel, topCtaLink, bottomLabel, bottomHeadline, bottomCtaLabel, bottomCtaLink,featuredImage, background, padding, bottomHtml} = content
  return(
    <section className={`pb-12 pt-${padding} bg-split-${background}`}>
      <div className="relative py-20 border-y-2 border-gold">
        <div className="center-absolute  w-0.5 h-full bg-gold"></div>
        <div className="container grid grid-cols-2 gap-16">

            <div className="flex flex-col justify-between flex-1 gap-8 text-center lg:px-20">
                <div className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">{topLabel}</span>
                  <h2 className="text-white">{topHeadline}</h2>
                  <p className="text-white">{topDescription}</p>
                  {topCtaLink &&
                    <a href={topCtaLink} className="text-white btn btn-action">{topCtaLabel}</a>
                  }
                </div>
                <div  className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">{bottomLabel}</span>
                  <h3 className="text-3xl font-regular">{bottomHeadline}</h3>
                  {/* <Link to="/" className="btn btn-action">See Plans</Link> */}
                  {parse(bottomHtml)}
                  {bottomCtaLink &&
                    <a href={bottomCtaLink} className="btn btn-action">{bottomCtaLabel}</a>
                  }
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
              <Image src='images/heirloom.jpg' width={370} height={450} className='object-cover h-[30rem] w-96 rounded-2xl ' alt="A cocktail made with Bittercube Bitters" />
            </div>

        </div>
      </div>
    </section>
  )
}