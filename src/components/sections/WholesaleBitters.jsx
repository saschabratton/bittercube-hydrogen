import illustraion from '../../assets/wholesale-illustration.svg';
import { Link, Image } from "@shopify/hydrogen"

export default function WholesaleBitters(){
  return(
    <section className="relative bg-light">
      <div className="absolute inset-0">
        <Image src={illustraion} width={1388} height={367} className="h-full w-full object-contain" />
      </div>
      <div className="relative container text-center">
        <h2>Wholesale Bittercube</h2>
        <h3>For bartenders & Managers</h3>
        <Link to="/">Shop Wholesale</Link>
      </div>
    </section>
  )
}