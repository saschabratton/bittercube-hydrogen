import botanicals from '../assets/real-botanicals.svg'

import { Image } from "@shopify/hydrogen";

export default function ScrollingBanner() {
  return (
      <div className=" overflow-hidden py-12">
        <Image src={ botanicals } width={1990} height={30} />
      </div>
      );
}