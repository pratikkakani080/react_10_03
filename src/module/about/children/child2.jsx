import React, { useContext } from "react";
import Context from "../../../configs/context";
import { useSelector } from "react-redux";

function Child2(props) {
  const count = useSelector((state) => state.my.count);
  const todos = useSelector((state) => state.my.data);
  const loading = useSelector((state) => state.my.loading);
  console.log(count, "state*********");

  const data = "this variable is from child 2";
  const store = useContext(Context);
  // console.log('store**', store);
  // console.log('console from child 2', store.globalData)
  return (
    <>
      <div onClick={() => props.setState(data)}>Child2 count is = {count}</div>
      {loading === 'loading' ? (
        <span>Loading.............</span>
      ) : (
        todos.map((el) => {
          return <span key={el.id}>{el.todo}</span>;
        })
      )}
    </>
  );
}

export default Child2;
