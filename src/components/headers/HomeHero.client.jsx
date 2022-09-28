import image from '../../assets/bittercube-cocktail.jpg';
import logomark from '../../assets/logomark-reversed.svg'
import {Image} from '@shopify/hydrogen';


export default function HomeHero({ content }) {
  return (
     <div className="relative">
      <div className="absolute inset-0">
        <Image src={image} width="1920" height="796" className="h-full w-full object-cover" />
      </div>
      <div className="relative container grid grid-cols-1 sm:grid-cols-7 text-center mx-auto uppercase">
        <div className="sm:flex sm:items-center sm:justify-center hidden">
          <span className="text-ornament font-sans text-gold font-bold tracking-widest leading-5">
            quiere<br />dondes<br />aqui
          </span>

        </div>
        <div className="sm:col-span-5">
          <div className="py-60 relative">
            <h1 className="capitalize text-7xl max-w-2xl mx-auto text-white">{ content }</h1>
            <Image src={logomark} width="92" height="92" role="presentation" className="absolute left-1/2 -translate-x-1/2 bottom-20" />
          </div>

        </div>
        <div className="sm:flex sm:items-center sm:justify-center hidden">
          <span className="text-ornament font-sans text-gold font-bold tracking-widest leading-5">
            lorem<br />ipsum et<br />doler
          </span>
        </div>
      </div>
    </div>
  );
}