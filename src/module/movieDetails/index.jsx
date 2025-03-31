import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { useSearchParams } from "react-router";

function MovieDetails() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  console.log("idParam**", idParam);

  // useEffect(() => {
  //   setSelectedMovie(JSON.parse(localStorage.getItem("movie")));
  // }, []);

  useEffect(() => {
    fetch(`https://www.freetestapi.com/api/v1/movies/${idParam}`)
      .then((res) => res.json())
      .then((res) => setSelectedMovie(res));
  }, [idParam]);

  return (
    <Card
      poster={selectedMovie.poster}
      rating={selectedMovie.rating}
      title={selectedMovie.title}
    />
  );
}

export default MovieDetails;
