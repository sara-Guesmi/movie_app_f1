import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, text, rate, deletMovie }) => {
  const filtred = movies
    .filter((film) => film.name.toLowerCase().includes(text.toLowerCase()))
    .filter((film) => film.rating >= rate);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {filtred.length ? (
        filtred.map((movie) => (
          <MovieCard movie={movie} key={movie.id} deletMovie={deletMovie} />
        ))
      ) : (
        <h1>There is no Movie To show</h1>
      )}
    </div>
  );
};

export default MovieList;
