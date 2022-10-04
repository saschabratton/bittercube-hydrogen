import { Layout } from "../../components/Layout.server"
import ImageHero from "../../components/headers/ImageHero.server"
import image from '../../assets/bittercube-cocktail.jpg'
import { Image } from "@shopify/hydrogen"


const HeaderText = ("Location Specific Headline goes Here make it good")



export default function moslers(){
  return(
    <Layout>
      <ImageHero content={HeaderText} />
      <div className="container grid grid-cols-2 gap-6 max-w-screen-2xl">
        <div className="grid gap-6">
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
          <Image src={image} width={366} height={455} alt='alt' className="w-full h-auto" />
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <span className="label">Located on Milwaukee’s North-side</span>
          <h2>a place to gather and enjoy good spirits, in glass and company</h2>
          <p className="label">
            Located at<br />1234 north ave<br />milwaukee wi<br /><span className="inline-block mt-6">at the crossroads collective</span>
          </p>
          <p className="label text-ornament">
            <a href="">414.123.4567</a><br />
            <a href="">info@mostlersvault.com</a>
          </p>
          <p className="label">Follow us online<br />@moslersvault</p>
          <p>Over the last decade, the company has built relationships with farmers, botanical suppliers, bartenders, and foodies across the globe, and continues to innovate with new flavors, collaborations, business lines and services.</p>
          <p>Over the years, Bittercube has been featured in the New York Times, Martha Stewart’s Everyday Food, Playboy, Imbibe Magazine, Timeout, Bon Appétit, Chicago Tribune, Bloomberg BusinessWeek, GO – AirTran Inflight Magazine, Southwest Magazine, NPR, and Daily Candy, among many other publications.</p>
          <a href="/" className="ml-0 btn btn-action">Book a table</a>
        </div>
      </div>
      <hr className="border-t-2 border-gold" />
      <div className="container grid grid-cols-2 ">
        <div className="flex">
          <div className="flex flex-col items-center justify-center max-w-md gap-6 text-center">
            <h2>take a look at our craft cocktail menu</h2>
            <a href="/" className="btn btn-action">Book a table</a>
          </div>
        </div>
        <div className="w-full bg-gold">

          tabs go here
        </div>
      </div>

     <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-2 gap-6 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="label">Explore More</span>
              <h2>Check out our other venues or join us for events</h2>
              <div className="flex">
                <a to="/" className="btn btn-action">Bittercube Bar</a>
                <a to="/" className="btn btn-action">Events portal</a>
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-6 text-center">
              <h3>Enjoy new recipes and the latest news and events</h3>
              <p>Donec dictum, purus quis tincidunt molestie, nulla nibh ornare diam, eu vestibulum velit erat eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <div className="w-full h-20 bg-gold">
                formik form
              </div>

            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}





