import { motion, useScroll, useSpring } from "framer-motion";
import { Image } from "@shopify/hydrogen";

export default function ScrollingBanner() {
  const { scrollY } = useScroll()
  const scrollX = useSpring(scrollY, { stiffness: 8000, damping: 200 })

  return (
    <div className="py-12 overflow-x-hidden">
      <div className="sr-only">Made with real botanicals</div>
      <motion.div style={{ translateX: scrollX }} className="flex justify-center gap-4">
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
        <Image src='/emblems/made-with-real-botanicals.svg' width={258} height={30} alt=" " role='presentation' />
      </motion.div>
      </div>
      );
}