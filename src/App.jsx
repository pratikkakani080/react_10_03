import { useState } from "react";
import "./App.css";
import Routing from "./Routing";
import Context from "./configs/context";
import Header from "./module/header";

function App() {
  const [globalData, setGlobalData] = useState({})
  return (
    <>
      <Context.Provider value={{ globalData: globalData, setGlobalData: setGlobalData }}>
        <Routing />
      </Context.Provider>
    </>
  );
}

export default App;
