import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import KissImg from "../textures/love2.jpg";

function LoveBox2() {
  const buildingTexture = useLoader(TextureLoader, KissImg);
  const love2Ref = React.useRef();
  useFrame(({ clock }) => {
    love2Ref.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <mesh ref={love2Ref} position={[-3, -3, -1]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial attach="material" map={buildingTexture} />
    </mesh>
  );
}

export default LoveBox2;
