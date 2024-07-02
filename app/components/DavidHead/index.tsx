import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { Box3, Mesh, Vector3 } from "three";

export default function DavidHead() {
    const { scene } = useGLTF('david_head.glb');
    
    const headRef = useRef<Mesh>(null);
    const [ {rotation}, setRotation ] = useState({rotation: [0, 0, 0]}); 

    const bind = useDrag(({ offset: [x, y] }) => {
        setRotation({
          rotation: [y / 100, x / 100, 0],
        });
    });

    useEffect(() => {
        const box = new Box3().setFromObject(scene);
        const size = new Vector3();
        box.getSize(size);

        scene.position.set(0, -size.y / 2, -size.z * 1.4);
        scene.rotation.set(0, 0.5, 0);
    }, [scene]);

    useFrame(() => {
        if (headRef.current) {
          headRef.current.rotation.y = rotation[1];
        }

      });
    
      return <primitive object={scene} ref={headRef} {...bind() as any} />
       
}
