import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <div className="movie-card">
            <h2>{movie.title}</h2>
            <div className="movie-director">
              Director: <em>{movie.director}</em>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
