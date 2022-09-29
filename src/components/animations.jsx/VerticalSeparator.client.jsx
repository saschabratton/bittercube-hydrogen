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
    <figure className="z-0 w-full h-full center-absolute" ref={ref}>
      <svg width="100%" height="100%" viewBox="0 0 20 800" fill="none" className="inline-block">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="1000"
          strokeWidth={2}
          stroke="#B48039"
          style={{ pathLength: scrollY }}
        />
        {/* <motion.line
          x1="1"
          y1="1"
          x2="800"
          y2="1"
          pathLength={1}
          strokeWidth={2}
          stroke="#B48039"
          className="absolute"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.line
          x1="-800"
          y1="1"
          x2="1"
          y2="1"
          pathLength={1}
          strokeWidth={2}
          stroke="#B48039"
          className="absolute"
          style={{ pathLength: scrollYProgress }}
        /> */}

      </svg>
    </figure>
    <div className="inline-block p-2 mx-auto font-bold tracking-widest text-white uppercase bg-gold h-fit">
            some title text
          </div>
          </>
  )
}