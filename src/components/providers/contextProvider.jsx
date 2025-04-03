import React, { useState } from "react";
import Context from "../../configs/context";

function ContextProvider(props) {
  const [globalData, setGlobalData] = useState({});

  return (
    <Context.Provider
      value={{
        globalData: globalData,
        setGlobalData: setGlobalData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
