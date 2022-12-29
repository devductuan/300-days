import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import brickWall from "../textures/brickwall.jpg";

function Entry({ setOpenMain }) {
  useEffect(() => {}, []);

  const handleClick = (e) => {
    setOpenMain(true);
  };

  return (
    <div
      id="container"
      className="h-screen flex relative overflow-hidden"
      onClick={handleClick}
    >
      <img src={brickWall} className="w-full h-full" alt="brick" />
      <div id="cursor" class="special-cursor"></div>

      <Helmet>
        <script src="https://use.typekit.net/foobar.js"></script>
        <script>
          {` 
          console.log("reached code");
          var cursorOffset = {
        left : -30
        , top  : -20
        }

        document.getElementById('container').addEventListener("mousemove", function (e) {
        var $cursor = document.getElementById('cursor')

        $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
        $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';

        }, false);`}
        </script>
      </Helmet>
    </div>
  );
}

export default Entry;
