'use client';

import { useRef, useState } from "react";
import About from "./components/about";
import Hero from "./components/hero";
import './components/styles.scss';
import Loader from "./components/loader";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTheme } from "next-themes";
import { Themes } from "./components/themes";


export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  
  const {theme} = useTheme();
  const isLightMode = theme === Themes.light;
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  const stackRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.hero',
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    })
  }, {scope: stackRef})


  return (
    <div ref={stackRef}>
      {isLoading && <Loader />}
      <Hero handleLoad={handleLoad}/>
      {!isLoading && isLightMode && (
        <About />
      )}
    </div>

  );
}
