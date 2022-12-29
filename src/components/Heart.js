import { useFrame } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { DoubleSide, ExtrudeGeometry, MathUtils, Shape } from "three";

function Heart() {
  const [heartPosition, setHeartPosition] = useState([0, 0, 0]);
  const heartRef = React.useRef();
  useEffect(() => {
    const [x, y, z] = Array(3)
      .fill()
      .map(() => MathUtils.randFloatSpread(30));
    setHeartPosition([x, y, z]);
  }, []);

  useFrame(({ clock }) => {
    heartRef.current.rotation.y = clock.getElapsedTime() / 10;
    if (heartRef.current.position.y < 10) {
      heartRef.current.position.y += 0.002;
    } else {
      heartRef.current.position.y -= 0.002;
    }
  });

  const heartShape = new Shape();

  heartShape.moveTo(25, 25);
  heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
  heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
  heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
  heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
  heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
  heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

  const extrudeSettings = {
    depth: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

  return (
    <mesh
      scale={[0.01, 0.01, 0.01]}
      rotation={[0, 0, 97.4]}
      position={heartPosition}
      ref={heartRef}
    >
      <extrudeBufferGeometry
        attach="geometry"
        args={[heartShape, extrudeSettings]}
      />
      <meshStandardMaterial color="#FF0055" side={DoubleSide} />
    </mesh>
  );
}

export default Heart;
