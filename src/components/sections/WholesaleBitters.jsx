import { Image } from "@shopify/hydrogen"
// ----------------------------------------------------------------------
export default function WholesaleBitters(){
  return(
    <section className="relative bg-paper">
      <div className="absolute inset-0">
        <Image src='/images/wholesale-illustration.svg' width={1388} height={367} alt=" " role="presentation" className="object-contain w-full h-full" />
      </div>
      <div className="container relative text-center">
        <h2>Wholesale Bittercube</h2>
        <p className="mb-0 label h4">FOR BAR MANAGERS & BUYERS</p>
        <p><a href="mailto:info@bittercube.com" className="inline-block">Email us</a> to set up an account and order direct or order wholesale using the portal below</p>
        <a href="https://bittercube.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_9p9jssa6xt" className="mb-1 btn btn-action bg-paper" target='_blank'>Order Wholesale</a>
      </div>
    </section>
  )
}