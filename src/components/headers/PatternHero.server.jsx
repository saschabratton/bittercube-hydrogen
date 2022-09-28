
// import logomark from '../assets/logomark-reversed.svg'
import {Image} from '@shopify/hydrogen';


export default function PatternHero({ content }) {
  return (
     <div className="relative bg-dark bg-pattern">
      <div className="container relative text-center">
          <div className="py-28">
            <div className="h-0.5 w-20 mx-auto bg-gold"></div>
            <h1 className="py-4 text-6xl capitalize text-outline">{ content }</h1>
            <div className="h-0.5 w-20 mx-auto bg-gold"></div>
          </div>
      </div>
    </div>
  );
}