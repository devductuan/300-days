import { Html } from "@react-three/drei";
import React from "react";
import song from "../audio/noo.mp3";

function AudioPlayer() {
  return (
    <Html position={[0, -6, 0]}>
      <audio class="outline-0" autoPlay controls src={song} />
    </Html>
  );
}

export default AudioPlayer;
