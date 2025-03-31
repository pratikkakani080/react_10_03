import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

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

  const handleClick = (movie) => {
    console.log('movie**', movie);
    // localStorage.setItem('movie', JSON.stringify(movie))
    navigate(`/movie-details?id=${movie.id}`);
  };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {movies.map((movie) => {
          return (
            <Card
              poster={movie.poster}
              rating={movie.rating}
              title={movie.title}
              handleClick={() => handleClick(movie)}
            />
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

export default Dashboard;
