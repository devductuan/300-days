import React from "react";
import song from "../audio/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3";
import ThreePage from "./ThreePage";

function Home() {
  return (
    <div>
      <ThreePage />
      <audio id="audio" class="outline-0" autoPlay src={song} />
    </div>
  );
}

export default Home;
