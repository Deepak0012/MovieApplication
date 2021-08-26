import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({ movies, a }) => {
  return (
    <>
      <main id="main">
        {movies.length &&
          movies.map((movie) => (
            <MovieCard a={a} movie={movie} key={movie.id} />
          ))}
      </main>
    </>
  );
};

export default MovieCardList;
