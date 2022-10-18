import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function HorizontalSeperator() {
  gsap.registerPlugin(ScrollTrigger);

// TODO: stagger trigger if multiple seportors on a page
ScrollTrigger.create({
  trigger: "#scrollTrigger",
  start: "top 90%",
  once: true,
  toggleClass: {targets: ".hr", className: "grow-outward"}
});


  return(
    <div className="relative w-full h-0.5 bg-gold hr" id="scrollTrigger">
      <div className="ornament-arrow-left"></div>
      <div className="ornament-arrow-right"></div>
    </div>
  )

}