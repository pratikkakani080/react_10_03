import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  return (
    <>
      <Input ph={"Please type ..."} type={"text"} buttonColor={"red"} />
      <Input
        type={"number"}
        buttonText={"this is another one"}
        buttonColor={"pink"}
        hideButton={true}
      />
      <Button
        buttonText={"button from app"}
        fontSize={"12px"}
        handleClick={() => window.alert("button clicked from app")}
      />
    </>
  );
}

export default App;
