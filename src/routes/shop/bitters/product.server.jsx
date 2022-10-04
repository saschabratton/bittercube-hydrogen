import { Layout } from "../../../components/Layout.server"
import NavigationInterior from "../../../components/global/NavigationInterior.server"
import image from '../../../assets/bittercube-cocktail.jpg'
import { Link, Image } from "@shopify/hydrogen"
import ThreeColumnFeature from "../../../components/sections/ThreeColumnFeature.client"
import CardCarousel from "../../../components/sections/CardCarousel.client"
import WholesaleBitters from "../../../components/sections/WholesaleBitters"
import TabSection from "../../../components/sections/TabSection.client"


export default function Product(){
  return(
    <Layout>
      <NavigationInterior />
      <div className="container pb-6 max-w-screen-2xl">
        <Link className="label text-dark" to="/shop/bitters">Bitters</Link>
        [ arrow ]
        <Link className="label" to="/shop/bitters">Bitters</Link>
      </div>
      <div className="container grid grid-cols-2 gap-6 pt-0 max-w-screen-2xl">
        <div className="grid gap-6">
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
          <Image src={image} width={366} height={455} alt='alt' className="object-cover w-full aspect-4/5" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <span className="label">Bittercube</span>
          <h2>Bittercube Cherry Bark Vanilla Bitters</h2>
          <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elementum sollicitudin neque. Duis libero quam, ultricies in elementum in.</p>
          <hr className="mt-96"/>
          <h3>More Information</h3>
          <div>
            <TabSection />
          </div>
        </div>
      </div>
      <div className="container relative pt-0">
        <hr />
        <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 bg-gold h-fit">
          Recipe Collection
        </div>

      </div>
      <CardCarousel />
      <WholesaleBitters />


    </Layout>
  )
}