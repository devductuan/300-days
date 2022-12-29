import { useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { TextureLoader } from "three";
import WoodTextureImg from "../textures/wood.jpg";
import Text3d from "./Text3d";

function Countdown() {
  const woodTexture = useLoader(TextureLoader, WoodTextureImg);
  const [time, setTime] = useState({
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
  });

  useEffect(() => {
    var end = new Date("05/03/2023 0:00 AM");

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED!";

        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      setTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }

    timer = setInterval(showRemaining, 1000);
  }, []);

  return (
    <group>
      <mesh position={[0, 3, -0.2]}>
        <boxBufferGeometry attach="geometry" args={[4, 2, 0.25]} />
        <meshLambertMaterial attach="material" map={woodTexture} />
      </mesh>
      <mesh position={[0, 3, -0.15]}>
        <boxBufferGeometry attach="geometry" args={[3.7, 1.7, 0.25]} />
        <meshLambertMaterial attach="material" color="#04053f" />
      </mesh>
      <Text3d
        position={[0, 3.5, 0]}
        size={0.2}
        text="Time to 1st Anniversary:"
        font="Wallpoet"
      />
      <Text3d
        position={[0, 3, 0]}
        size={0.25}
        text={`${time.days} : ${time.hours} : ${time.minutes} : ${time.seconds}`}
        font="Wallpoet"
      />
    </group>
  );
}

export default Countdown;
