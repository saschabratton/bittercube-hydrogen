import { useEffect } from "react";

import botanicals from '../assets/real-botanicals.svg'

import { motion, useScroll, useSpring } from "framer-motion";
import { Image } from "@shopify/hydrogen";



export default function ScrollingBanner() {
  const { scrollY } = useScroll()
  const scrollX = useSpring(scrollY, { stiffness: 8000, damping: 200 })



  return (
    <div className="py-12 overflow-x-hidden">
      <motion.div style={{ translateX: scrollX }} className="flex justify-center">
        <Image src={ botanicals } width={1990} height={30} alt="Made with real botanicals" />
        <Image src={ botanicals } width={1990} height={30} alt="Made with real botanicals" />
        <Image src={ botanicals } width={1990} height={30} alt="Made with real botanicals" />
      </motion.div>
      </div>
      );
}