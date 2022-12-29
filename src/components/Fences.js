import React from "react";

function Fences() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="#B70D0D" />
    </mesh>
  );
}

export default Fences;
