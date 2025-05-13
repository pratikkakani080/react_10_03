import React, { useEffect } from "react";
import Child2 from "./children/child2";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../../reducers/mySlice";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      About
      <div>
        <Child2 />
      </div>
    </div>
  );
}

export default About;
