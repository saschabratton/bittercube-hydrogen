import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function VerticalSeparator({content}) {

ScrollTrigger.create({
  trigger: "#vertTrigger",
  start: "top 85%",
  once: true,
  toggleClass: {targets: ".path", className: "active"}
});
ScrollTrigger.create({
  trigger: "#vertTrigger",
  start: "top 85%",
  once: true,
  toggleClass: {targets: ".h-path-left", className: "active"}
});
ScrollTrigger.create({
  trigger: "#vertTrigger",
  start: "top 85%",
  once: true,
  toggleClass: {targets: ".h-path-right", className: "active"}
});
ScrollTrigger.create({
  trigger: "#vertTrigger",
  start: "top 85%",
  once: true,
  toggleClass: {targets: ".bg-reveal", className: "active"}
});
ScrollTrigger.create({
  trigger: "#vertTrigger",
  start: "top 85%",
  once: true,
  toggleClass: {targets: ".ornament-arrow", className: "active"}
});


  return (
  <>
    <div className="w-0.5 h-full center-absolute hidden md:flex overflow-hidden" id="vertTrigger" >
      <div className="w-0.5 h-full 5 bg-gold path"></div>
    </div>
    <div className="relative grid w-full grid-cols-2">
      <div className="z-10 flex justify-end overflow-hidden">
        <div className="w-full h-0.5 bg-gold h-path-left"></div>
        <div className="ornament-arrow ornament-arrow-left"></div>
      </div>
      <div className="z-10 flex justify-start overflow-hidden">
        <div className="w-full h-0.5 bg-gold h-path-right"></div>
        <div className="ornament-arrow ornament-arrow-right"></div>
      </div>
      <div className="absolute top-0 px-6 py-2 text-sm tracking-widest text-white uppercase -translate-x-1/2 left-1/2 h-fit bg-gold ">
        {content}
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-paper bg-reveal"></div>
      </div>
    </div>
  </>
  )
}