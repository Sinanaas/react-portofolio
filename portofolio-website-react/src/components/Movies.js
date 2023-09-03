import React, { useState, useEffect } from 'react';
import './Movies.css';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = [];
      for (const movie of data) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=af82b2777245f926ab36c3ae51a37b9e&language=en-US&page=1&include_adult=false&query=${movie.title}`
          );
          const firstResult = response.data.results[0];
          if (firstResult) {
            movieData.push(firstResult);
          }
        } catch (error) {
          console.error("Error BOS: ", error);
        }
      }
      setMovies(movieData);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  let data = [
    {
      id: 1,
      title: 'Interstellar',
    },
    {
      id: 2,
      title: 'Parasite',
    },
    {
      id: 3,
      title: 'Babylon',
    },
  ];

  return (
    <div className="Movies">
      <h1>MOVIES BOS</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            ) : (
              <p>No poster available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
