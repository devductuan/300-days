import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import HueImg from "../textures/hue.webp";

function Hue() {
  const buildingTexture = useLoader(TextureLoader, HueImg);

  const hueRef = React.useRef();
  useFrame(({ clock }) => {
    hueRef.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <mesh position={[-6, 4, -5]} ref={hueRef}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial attach="material" map={buildingTexture} />
    </mesh>
  );
}

export default Hue;
