import { Link, Image } from "@shopify/hydrogen"
import parse from 'html-react-parser';

export default function SplitBgVertBlue({ content }){
  return(
    <section className={`pb-12 pt-12 bg-split-dark`}>
      <div className="relative py-20 border-y-2 border-gold">
        <div className="center-absolute  w-0.5 h-full bg-gold hidden md:flex"></div>
        <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 ">

            <div className="flex flex-col justify-between flex-1 gap-8 text-center lg:px-20">
                <div className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">Feeling Spirited</span>
                  <h2 className="text-white">Get Bittercube at home</h2>
                </div>
                <div  className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">Subscribe for Bittercube at home</span>
                  <h3 className="text-3xl font-regular">Bittercube styled monthly boxes</h3>
                  <a href="https://table22.com/bittercube" target="_blank" className="btn btn-action">Subscriptions</a>
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
              <Image src='/images/heirloom.jpg' width={370} height={450} className='object-cover h-[30rem] w-96 rounded-2xl ' alt="A cocktail made with Bittercube Bitters" />
            </div>

        </div>
      </div>
    </section>
  )
}