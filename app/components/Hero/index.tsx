import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DavidHead from "../DavidHead";

import "./styles.scss";

export default function Hero() {
    return (
        <div className="hero">
            <div className="background-text">
                David
            </div>

            <Canvas  camera={{position: [0, 0, 0], fov: 75}} >
                <Suspense fallback={<Html center>Loading...</Html>}>
                    <directionalLight position={[0, -2, -0.1,]} intensity={2} />
                    <DavidHead />
                </Suspense>
            </Canvas>
        </div>
    );
}