import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/GoldArrow.json'



export default function Sandbox() {

const [playing, setPlaying] = useState(false);


  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    // <div className="flex items-center justify-center rounded-lg bg-paper w-60 h-96"
    // onMouseEnter={() => setPlaying(true)}
    // onMouseLeave={() => setPlaying(false)}
    // >
    <div className="w-10">
      <Lottie id="lottie" options={defaultOptions} height="100%" width="auto" play={playing}/>
    </div>

  )
}
