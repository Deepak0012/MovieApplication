import React from "react";
import { IMGPATH } from "../constants/api";

const imdbRating = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview } = movie;
  return (
    <div className="movie">
      <img src={IMGPATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={imdbRating(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview:</h3>
        {overview}
      </div>
    </div>
  );
};

export default MovieCard;
