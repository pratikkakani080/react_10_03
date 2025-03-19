import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [text, setText] = useState("");
  console.log("out side log", text);

  useEffect(() => {
    console.log("mounting", text);
    return () => {
      // cleanup function - used to call useEffect at the time unmounting
      console.log("running on un mounting");
    };
  }, [text]); // add blank dependency to run useEffect once

  return (
    <>
      <Input
        ph={"Please type ..."}
        type={"text"}
        buttonColor={"red"}
        handleButtonClick={() => setText(text + "test")}
      />
      <Input
        type={"number"}
        buttonText={"this is another one"}
        buttonColor={"pink"}
        hideButton={true}
      />
      <Button
        buttonText={"button from app"}
        fontSize={"12px"}
        handleClick={() => setData(data + 1)}
      />
    </>
  );
}

export default App;
