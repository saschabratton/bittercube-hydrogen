// import icon from '../assets/bittercube-cocktail.jpg';
// import logomark from '../assets/logomark-reversed.svg'
import {Image} from '@shopify/hydrogen';


export default function PatternHeader({ content }) {
  return (
     <div className="relative bg-dark">
      <div className="absolute inset-0">
        {/* <Image src={icon} width="100" height="50" className="h-full w-full object-cover" /> */}
      </div>
      <div className="relative container text-center mx-auto">
          <div className="py-36">
            <div className="h-0.5 w-20 mx-auto bg-gold"></div>
            <h1 className="capitalize py-4 text-6xl text-outline">{ content }</h1>
            <div className="h-0.5 w-20 mx-auto bg-gold"></div>
          </div>
      </div>
    </div>
  );
}