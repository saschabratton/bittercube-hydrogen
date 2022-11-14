import { Link, Image } from "@shopify/hydrogen"
import parse from 'html-react-parser';

export default function SplitBgVertBlue({ content }){
  return(
    <section className={`pb-12 pt-12 bg-dark md:bg-split-dark`}>
      <div className="relative py-20 border-y-2 border-gold">
        <div className="center-absolute  w-0.5 h-full bg-gold hidden md:flex"></div>
        <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 ">

            <div className="flex flex-col justify-between flex-1 gap-8 text-center lg:px-20">
                <div className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">BITTERCUBE DELIVERED</span>
                  <h2 className="text-white">Monthly subscription</h2>
                </div>
                <div  className="flex flex-col justify-center gap-2 h-44">
                  <span className="label h4 text-gold">Boxes include one-of-a-kind items</span>
                  <h3 className="text-3xl text-white font-regular md:text-dark">Curated bitters, syrups, recipes, and more</h3>
                  <a href="https://app.table22.com/product/v1/the-bittercube-old-fashioned-club" target="_blank" className="text-white btn btn-action md:text-dark">Subscriptions</a>
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
              <Image src='/images/shop-subscription.jpg' width={370} height={450} className='object-cover h-[30rem] w-96 rounded-2xl ' alt="A cocktail made with Bittercube Bitters" />
            </div>

        </div>
      </div>
    </section>
  )
}