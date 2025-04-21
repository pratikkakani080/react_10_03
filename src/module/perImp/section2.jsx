import React, { memo } from "react";

function Section2({ count, increment, calculation }) {
  console.log('re-rendering');
  
  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
  );
}

export default memo(Section2);
