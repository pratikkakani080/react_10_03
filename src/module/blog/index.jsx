import React, { useState } from "react";
import Child1 from "./children/child1";
import Child2 from "../about/children/child2";

function Blog() {
  const [state1, setState1] = useState('blog to child1')
  const [state2, setState2] = useState('blog to child2')

  const callbkFn = (parms) => {
    setState1(parms)
  }
  
  return (
    <div>
      Blog{" "}
      <div>
        <Child1 state={state2} setState={setState1} callbkFn={callbkFn} />
      </div>
      <div>
        <Child2 state={state1} setState={setState2} />
      </div>
    </div>
  );
}

export default Blog;
