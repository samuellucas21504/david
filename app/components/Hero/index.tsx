"use client"

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import DavidHead from "../DavidHead";
import { useSpring, animated } from "@react-spring/three";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Loader from "@/app/components/Loader";

export default function Hero() {
    const [isLightMode, setIsLightMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const lightSpring = useSpring({
        position: (isLightMode ? [0, 2, 1.4] : [0, -2, -1]) as [number, number, number],
        intensity: isLightMode ? 2 : 0.5,
        config: {duration: 1200},
    });

    function handleIsLightMode() {
        setIsLightMode(prevState => !prevState);
    }
    const handleLoad = () => {
        setIsLoading(false);
      };

    return (
        <>{isLoading && <Loader/>}
            <div className={`hero ${isLightMode ? 'hero-light' : 'hero-dark'}`}>
                <div className={`background-text ${isLightMode ? 'text-light' : 'text-dark' }`}>
                    <p>D</p>
                    <p>a</p>
                    <p>v</p>
                    <p>i</p>
                    <p>d</p>
                </div>
                
                <button type="button" className={`theme-button ${isLightMode ? 'button-light' : 'button-dark'}`} onClick={handleIsLightMode}>
                    <FontAwesomeIcon icon={faLightbulb}  size="xl" color={isLightMode ? '#000' : '#fff'}/>
                </button>

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