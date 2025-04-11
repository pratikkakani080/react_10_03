import "./App.css";
import Routing from "./Routing";
import ContextProvider from "./components/providers/contextProvider";
import Context2Provider from "./components/providers/context2Provider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ContextProvider>
        <Context2Provider>
          <Routing />
          <ToastContainer theme="colored" />
        </Context2Provider>
      </ContextProvider>
    </>
  );
}

export default App;
