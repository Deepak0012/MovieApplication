import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({ movies }) => {
  return (
    <>
      <main id="main">
        {movies.length &&
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </main>
    </>
  );
};

export default MovieCardList;
