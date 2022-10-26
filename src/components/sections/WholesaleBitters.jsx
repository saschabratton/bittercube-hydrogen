import { Link, Image } from "@shopify/hydrogen"

export default function WholesaleBitters(){
  return(
    <section className="relative bg-paper">
      <div className="absolute inset-0">
        <Image src='/images/wholesale-illustration.svg' width={1388} height={367} alt="" role="presentation" className="object-contain w-full h-full" />
      </div>
      <div className="container relative text-center">
        <h2>Wholesale Bittercube</h2>
        <p className="label h4">For bartenders & Managers</p>
        <a href="https://bittercube.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_9p9jssa6xt" className="btn btn-action bg-paper ">Shop Wholesale</a>
      </div>
    </section>
  )
}