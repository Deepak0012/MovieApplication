import React, { useEffect, useState, useLayoutEffect } from "react";
import MovieCardList from "./MovieCardList";
import { APIURL } from "../constants/api";

const MovieMain = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(APIURL)
      .then((movies) => {
        return movies.json();
      })
      .then((moviesList) => {
        setMovies(moviesList.results);
        setLoading(false);
      })
      .catch((error) => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
   return <div className="loader">Searching for movies</div>;
  }

  if (error) {
    return <div className="loader">{error}</div>;
  }

  return (
    <div>
      <MovieCardList a="a" movies={movies} />
    </div>
  );
};

export default MovieMain;
