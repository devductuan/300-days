import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import TextureOfficeImg from "../textures/lotte.jpg";

function Building() {
  const buildingTexture = useLoader(TextureLoader, TextureOfficeImg);

  const buildingRef = React.useRef();
  useFrame(({ clock }) => {
    buildingRef.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <mesh position={[5, -5, -4]} ref={buildingRef}>
      <boxBufferGeometry attach="geometry" args={[1, 3, 1]} />
      <meshLambertMaterial attach="material" map={buildingTexture} />
    </mesh>
  );
}

export default Building;
