import "./App.css";
import Routing from "./Routing";
import ContextProvider from "./components/providers/contextProvider";
import Context2Provider from "./components/providers/context2Provider";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./configs/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ContextProvider>
          <Context2Provider>
            <Routing />
            <ToastContainer theme="colored" />
          </Context2Provider>
        </ContextProvider>
      </Provider>
    </>
  );
}

export default App;
