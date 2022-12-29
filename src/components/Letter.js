import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import PaperImg from "../textures/paper.jpg";
import letterContent from "../textures/letter.png";

function Letter() {
  const paperTexture = useLoader(TextureLoader, PaperImg);
  const letterTexture = useLoader(TextureLoader, letterContent);
  return (
    <group>
      <mesh position={[0, 0, 10]}>
        <boxBufferGeometry attach="geometry" args={[3.7, 4.7, 0.2]} />
        <meshLambertMaterial attach="material" map={paperTexture} />
      </mesh>
      <mesh position={[0, 0, 10.1]}>
        <boxBufferGeometry attach="geometry" args={[3, 4, 0.2]} />
        <meshLambertMaterial attach="material" map={letterTexture} />
      </mesh>
    </group>
  );
}

export default Letter;
