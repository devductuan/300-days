import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import KissImg from "../textures/kiss.jpg";

function LoveBox() {
  const buildingTexture = useLoader(TextureLoader, KissImg);

  const loveRef = React.useRef();
  useFrame(({ clock }) => {
    loveRef.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <mesh position={[5, 4, -2]} ref={loveRef}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial attach="material" map={buildingTexture} />
    </mesh>
  );
}

export default LoveBox;
