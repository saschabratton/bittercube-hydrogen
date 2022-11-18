// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// ----------------------------------------------------------------------
// gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSeperator() {

// ScrollTrigger.create({
//   trigger: "#scrollTrigger",
//   start: "top 90%",
//   once: true,
//   toggleClass: {targets: ".hr", className: "grow-outward"}
// });


  return(
    <div className="relative  grow-outward w-full h-0.5 bg-gold hr" id="scrollTrigger">
      <div className="ornament-arrow-left"></div>
      <div className="ornament-arrow-right"></div>
    </div>
  )

}