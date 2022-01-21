import { Rating } from "@mui/material";
import React from "react";

const MovieCard = ({ movie, deletMovie }) => {
  return (
    <div
      style={{
        width: 300,
        border: "2px black solid",
      }}
    >
      <img src={movie.image} alt={movie.name} width={300} />
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <Rating name="read-only" value={movie.rating} readOnly />
      <button onClick={() => deletMovie(movie.id)}>X</button>
    </div>
  );
};

export default MovieCard;
