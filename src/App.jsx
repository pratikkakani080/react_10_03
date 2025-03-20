import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  console.log("movies***", movies);

  useEffect(() => {
    console.log("mounting", text);
    return () => {
      // cleanup function - used to call useEffect at the time unmounting
      console.log("running on un mounting");
    };
  }, [text]); // add blank dependency to run useEffect once

  useEffect(() => {
    fetch("https://www.freetestapi.com/api/v1/movies")
      .then((res) => res.json())
      .then((res) => setMovies(res));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {movies.map((el) => {
          return (
            <div style={{ maxWidth: "200px", border: "1px solid" }}>
              <img
                src={el.poster}
                style={{ border: "1px solid", height: "200px", width: "200px" }}
              />
              <h3>{el.title}</h3>
              <p>{el.rating}</p>
            </div>
          );
        })}
      </div>

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
