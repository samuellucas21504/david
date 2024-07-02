import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import DavidHead from "../DavidHead";
import { useSpring, animated } from "@react-spring/three";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    const [isLightMode, setIsLightMode] = useState(false);
    const lightSpring = useSpring({
        position: (isLightMode ? [0, 2, 1.4] : [0, -2, -1]) as [number, number, number],
        intensity: isLightMode ? 2 : 0.5,
        config: {duration: 1200},
    });

    useEffect(() => {console.log(isLightMode);}, [isLightMode]);

    function handleIsLightMode() {
        setIsLightMode(prevState => !prevState);
    }

    return (
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
                    <Suspense fallback={<Html center>Loading...</Html>}>
                        <animated.directionalLight {...lightSpring} />
                        <DavidHead />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}