import { useState } from "react";
import "./App.css";
import Entry from "./pages/Entry";
import Home from "./pages/Home";
import ThreePage from "./pages/ThreePage";

function App() {
  const [openMain, setOpenMain] = useState(false);
  return (
    <div className="App ">
      {openMain ? <Home /> : <Entry setOpenMain={setOpenMain} />}
      {/* <Home /> */}
    </div>
  );
}

export default App;
