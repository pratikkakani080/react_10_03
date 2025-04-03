import React, { useState } from "react";
import Context2 from "../../configs/context2";

function Context2Provider(props) {
  const [count, setCount] = useState(0);

  return (
    <Context2.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      {props.children}
    </Context2.Provider>
  );
}

export default Context2Provider;
