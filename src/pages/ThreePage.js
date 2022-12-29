import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import Building from "../components/Building";
import Countdown from "../components/Countdown";
import Heart from "../components/Heart";
import Text3d from "../components/Text3d";
import Hue from "../components/Hue";
import LoveBox from "../components/LoveBox";
import LoveBox2 from "../components/LoveBox2";
import AudioPlayer from "../components/AudioPlayer";
import Letter from "../components/Letter";

function ThreePage() {
  const [muted, setMuted] = useState(false);
  return (
    <div class="h-screen">
      <Canvas
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(255,218,237,1) 100%)",
        }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {/* <gridHelper /> */}

        {/* Objects */}
        {Array(100)
          .fill()
          .map((_, index) => (
            <Heart key={index} />
          ))}

        <Building />
        <Countdown />
        <Hue />
        <LoveBox />
        <LoveBox2 />
        <Text3d />
        <Letter />
        <Html position={[0, -6, 0]}>
          <button
            class="transform scale-150"
            onClick={() => {
              if (document.querySelector("#audio").muted) {
                document.querySelector("#audio").muted = false;

                setMuted(false);
              } else {
                document.querySelector("#audio").muted = true;

                setMuted(true);
              }
            }}
          >
            {muted ? (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zm7.137 2.096a.5.5 0 010 .708L12.207 8l1.647 1.646a.5.5 0 01-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 01-.708-.708L10.793 8 9.146 6.354a.5.5 0 11.708-.708L11.5 7.293l1.646-1.647a.5.5 0 01.708 0z" />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M9 4a.5.5 0 00-.812-.39L5.825 5.5H3.5A.5.5 0 003 6v4a.5.5 0 00.5.5h2.325l2.363 1.89A.5.5 0 009 12V4zm3.025 4a4.486 4.486 0 01-1.318 3.182L10 10.475A3.489 3.489 0 0011.025 8 3.49 3.49 0 0010 5.525l.707-.707A4.486 4.486 0 0112.025 8z" />
              </svg>
            )}
          </button>
        </Html>
      </Canvas>
    </div>
  );
}

export default ThreePage;
