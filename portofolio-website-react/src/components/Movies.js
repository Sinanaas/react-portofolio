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
  
          const results = response.data.results;
  
          // Check if any of the results have the same release_date as the current movie
          const matchingResults = results.filter(result => result.release_date === movie.release_date);
          const matchingTitle = matchingResults.filter(result => result.title === movie.title)
  
          if (matchingTitle.length > 0) {
            movieData.push(...matchingTitle);
          }
        } catch (error) {
          console.error("Error:", error);
        }
        // console.log(movieData)
      }
  
      setMovies(movieData);
      setLoading(false);
    };
  
    fetchData();
  }, []); 
  

  // useEffect(() => {const fetchData = async () => {const movieData = [];for (const movie of data) {try {const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=af82b2777245f926ab36c3ae51a37b9e&language=en-US&page=1&include_adult=false&query=${movie.title}`);const results = response.data.results;if (results.length > 0) {movieData.push(...results);}} catch (error) {console.error("Error:", error);}console.log(movieData)}setMovies(movieData);setLoading(false);};fetchData();}, []); // Empty dependency array to run only once

  let data = [
    {
      id: 1,
      title: 'Parasite',
      release_date: '2019-05-30'
    },
    {
      id: 2,
      title: 'Interstellar',
      release_date: '2014-11-05'
    },
    {
      id: 3,
      title: 'Fallen Angels',
      release_date: '1995-09-06'
    },
    {
      id: 4,
      title: 'Black Swan',
      release_date: '2010-12-03'
    },
    {
      id: 5,
      title: 'Whiplash',
      release_date: '2014-10-10'
    },
    {
      id: 6,
      title: 'Good Will Hunting',
      release_date: '1997-12-05'
    },
    {
      id: 7,
      title: 'Inception',
      release_date: '2010-07-15'
    },
    {
      id: 8,
      title: 'La La Land',
      release_date: '2016-11-29'
    },
    {
      id: 9,
      title: 'Django Unchained',
      release_date: '2012-12-25'
    },
    {
      id: 10,
      title: 'Inglourious Basterds',
      release_date: '2009-08-19'
    },
    {
      id: 11,
      title: 'Chungking Express',
      release_date: '1994-07-14'
    },
    {
      id: 12,
      title: 'Fantastic Mr. Fox',
      release_date: '2009-10-23'
    },
  ];

  return (
    <div className="movie-container">
      <h1>FAVOURITE MOVIES</h1>
      <div className="Movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {/* <a href={`https://www.imdb.com/title/${movie.id}/`}> */}
              {movie.poster_path ? (
                
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              ) : (
                <p>No poster available</p>
              )}
            {/* </a> */}
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
