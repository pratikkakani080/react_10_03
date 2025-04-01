import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { useParams, useSearchParams } from "react-router";

function MovieDetails() {
  const [selectedMovie, setSelectedMovie] = useState({});

  // if you're using query params to fetch data
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  console.log("idParam**", idParam);

  // if you're using dynamic routing
  const params = useParams()
  console.log('params**', params);
  

  // useEffect(() => {
  //   setSelectedMovie(JSON.parse(localStorage.getItem("movie")));
  // }, []);

  useEffect(() => {
    fetch(`https://www.freetestapi.com/api/v1/movies/${params.id || idParam}`)
      .then((res) => res.json())
      .then((res) => setSelectedMovie(res));
  }, [idParam, params]);

  return (
    <Card
      poster={selectedMovie.poster}
      rating={selectedMovie.rating}
      title={selectedMovie.title}
    />
  );
}

export default MovieDetails;
