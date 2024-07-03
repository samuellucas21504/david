"use client"

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import DavidHead from "../david_head";
import { useSpring, animated } from "@react-spring/three";
import "./styles.scss";
import { ThemeSwitch } from "../theme_switch";
import { useTheme } from "next-themes";
import { Themes } from "../themes";
import Loader from "../Loader";

export default function Hero() {
    const [isLoading, setIsLoading] = useState(true);

    const { theme } = useTheme();
    const isLightMode = theme == Themes.light;

    const lightSpring = useSpring({
        position:  (isLightMode ? [0, 2, 1.4] : [0, -2, -1]) as [number, number, number],
        intensity: isLightMode ? 2 : 0.5,
        config: {duration: 1200},
    });

    const handleLoad = () => {
        setIsLoading(false);
      };

    return (
        <>{isLoading && <Loader/>}
            <div className={`hero`}>
                <div className={`background-text`}>
                    <p>D</p>
                    <p>a</p>
                    <p>v</p>
                    <p>i</p>
                    <p>d</p>
                </div>
                
                <ThemeSwitch className={ `theme-button` } />

                <div className="canvas-wrapper">
                    <Canvas  camera={{position: [0, 0, 0], fov: 75}} >
                            <animated.directionalLight {...lightSpring} />
                            <DavidHead onLoad={handleLoad}/>
                    </Canvas>
                </div>
            </div>
        </>
    );
}