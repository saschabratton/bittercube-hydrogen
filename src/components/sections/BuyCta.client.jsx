import { Link, Image } from "@shopify/hydrogen"

import image from '../../assets/bittercube-cocktail.jpg';

export default function BuyCta(){
  return(
    <section className="bg-split py-12">
      <div className="border-y-2 border-gold py-20">
        <div className="grid grid-cols-2 gap-16 container">
            <div className="flex flex-col gap-8 text-center flex-1 justify-between">
                <div className="h-44 bg-gold/30 justify-center flex flex-col">
                  <span className="label">Feeling Spirited</span>
                  <h2 className="text-white h1">Shop our Local Milwaukee Bazaar</h2>
                  <Link to="/">Shop for local pick-up</Link>
                </div>
                <div  className="h-44 bg-gold/30 justify-center flex flex-col">
                  <span className="label">Get more from Bittercube</span>
                  <h3>Subscription Plans</h3>
                  <Link to="/">See Plans</Link>
                </div>
            </div>
            <div className="flex justify-center items-center py-12">
              <Image src={image} width={370} height={450} className='h-96 w-72 rounded-2xl object-cover  ' />
            </div>

        </div>
      </div>
    </section>
  )
}