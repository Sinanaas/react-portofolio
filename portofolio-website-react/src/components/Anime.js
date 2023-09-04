import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Anime.css'


function Anime() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          const animeData = [];
      
          for (const anime of data) {
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=af82b2777245f926ab36c3ae51a37b9e&language=en-US&page=1&include_adult=false&query=${anime.title}`
              );
      
              const results = response.data.results;
      
              const matchingResults = results.filter(result => result.release_date === anime.release_date);
              const matchingTitle = matchingResults.filter(result => result.title === anime.title)
      
              if (matchingTitle.length > 0) {
                animeData.push(...matchingTitle);
              }
            } catch (error) {
              console.error("Error:", error);
            }
            console.log(animeData)
          }
      
          setAnimes(animeData);
          setLoading(false);
        };
      
        fetchData();
      }, []); 

    useEffect(() => 
        {
            const fetchData = async () => {
                const movieData = [];
                for (const movie of data) {
                    try {
                        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=af82b2777245f926ab36c3ae51a37b9e&language=en-US&page=1&include_adult=false&query=${movie.title}`);
                        const results = response.data.results;
                        if (results.length > 0) {
                            movieData.push(...results);
                        }
                    } catch (error) {
                        console.error("Error:", error);
                    }
                    console.log(movieData)
                }
                setAnimes(movieData);
                setLoading(false);
            };
        fetchData();
    }, []); // Empty dependency array to run only once


      let data = [
        {
          id: 1,
          title: 'Fullmetal Alchemist: Brotherhood',
          release_date: '2009-04-09'
        },
        {
          id: 2,
          title: 'Kimi ni Todoke: From Me to You',
          release_date: '2009-10-06'
        },
        {
          id: 3,
          title: 'JoJo\'s Bizarre Adventure',
          release_date: '2012-10-04'
        },
        {
          id: 4,
          title: 'Dragon Ball Z',
          release_date: '1996-09-13'
        },
        {
          id: 5,
          title: 'Naruto',
          release_date: '2005-09-10'
        },
        {
          id: 6,
          title: 'Mushoku Tensei: Jobless Reincarnation',
          release_date: '2022-03-29'
        },
        {
          id: 7,
          title: 'Cyberpunk: Edgerunners',
          release_date: '2022-09-13'
        },
        {
          id: 8,
          title: 'Mob Psycho 100',
          release_date: '2018-10-27'
        },
        {
          id: 9,
          title: 'Kaguya-sama: Love is War',
          release_date: '2019-01-12'
        },
        {
          id: 10,
          title: 'Vinland Saga',
          release_date: '2019-07-06'
        },
        {
          id: 11,
          title: 'Perfect Blue',
          release_date: '1998-02-28'
        },
        {
          id: 12,
          title: 'I Want to Eat Your Pancreas',
          release_date: '2018-09-01'
        },
        {
            id: 13,
            title: 'Death Note',
            release_date: '2007-10-21'
          },
          {
            id: 14,
            title: 'Your Lie in April',
            release_date: '2014-10-09'
          },
          {
            id: 15,
            title: 'A Silent Voice: The Movie',
            release_date: '2016-09-17'
          },
          {
            id: 14,
            title: 'Paprika',
            release_date: '2007-07-22'
          },
      ];

      return (
        <div className="anime-container">
          <h1>FAVOURITE ANIME</h1>
          <div className="Animes">
            {animes.map((anime) => (
              <div key={anime.id} className="anime-card">
                {/* <a href={`https://www.imdb.com/title/${movie.id}/`}> */}
                  {anime.poster_path ? (
                    
                    <img
                      src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`}
                      alt={`${anime.title} Poster`}
                    />
                  ) : (
                    <p>No poster available</p>
                  )}
                {/* </a> */}
                <h2>{anime.title}</h2>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Anime