import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";


export const Movie = (props) => {
  const [movie, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getMovie(props.match.params.id);
    setMovies(moviesResult);
  };


  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <div>
        {movie.data.title}
        <br/>
        {movie.data.poster_path}
        <br/>
        {movie.data.overview}

    </div>
  );
};