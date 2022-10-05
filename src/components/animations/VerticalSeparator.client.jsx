import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function VerticalSeparator() {
  // const { scrollY } = useScroll()
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end end"]
    offset: ["50% 200%", "start start"]
    // offset: ["1 1", "0 .15"]
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 500, damping: 50 })

  return (
    // <motion.div style={{ translateY: scrollYProgress }}
    //   className="w-0.5 h-full bg-gold center-absolute"
    // />

<>

<div className="w-0.5 h-full center-absolute bg-gold">

</div>

          </>
  )
}