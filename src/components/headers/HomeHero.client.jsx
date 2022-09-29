import image from '../../assets/bittercube-cocktail.jpg';
import logomark from '../../assets/logomark-reversed.svg'
import {Image} from '@shopify/hydrogen';


export default function HomeHero({ content }) {
  return (
     <div className="relative">
      <div className="absolute inset-0">
        <Image src={image} width="1920" height="796" className="object-cover w-full h-full" alt="A cocktail made with Bittercube Bitters" />
      </div>
      <div className="container relative grid grid-cols-1 mx-auto text-center uppercase sm:grid-cols-7">
        <div className="hidden sm:flex sm:items-center sm:justify-center">
          <span className="font-sans font-bold leading-5 tracking-widest text-ornament text-gold">
            quiere<br />dondes<br />aqui
          </span>

        </div>
        <div className="sm:col-span-5">
          <div className="relative py-60">
            <h1 className="max-w-2xl mx-auto text-white capitalize text-7xl">{ content }</h1>
            <Image src={logomark} width="92" height="92" role="presentation" className="absolute -translate-x-1/2 left-1/2 bottom-20" alt="A cocktail made with Bittercube Bitters" />
          </div>

        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-center">
          <span className="font-sans font-bold leading-5 tracking-widest text-ornament text-gold">
            lorem<br />ipsum et<br />doler
          </span>
        </div>
      </div>
    </div>
  );
}