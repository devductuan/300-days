import { extend } from "@react-three/fiber";
import React, { useState } from "react";
import { Text } from "troika-three-text";
import fonts from "../fonts/fonts";

extend({ Text });

const fixedText = "Happy 300 days together!";

function Text3d({ position, font, text, size, color }) {
  const [opts, setOpts] = useState({
    font: font ?? "Philosopher",
    fontSize: size ?? 1,
    color: color ?? "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      {...opts}
      text={text ?? fixedText}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      position={position ?? [0, 0, 0]}
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

export default Text3d;
