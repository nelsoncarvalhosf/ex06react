import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setFavoritos } from "../../actions/addMovies";

export const MovieList = ({movies}) => {
    const dispatch = useDispatch();
    return (
        <ul className="listMovies">
          {movies.data.results.map(movie => (
            <li><Link className="linkMovie" to={`/movie/${movie.id}`}>{movie.title}</Link> <button onClick={() => dispatch(setFavoritos(movie))}>+ Like</button><button>- Dislike</button></li>
          ))}
        </ul>
      );
}
