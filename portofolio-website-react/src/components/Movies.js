import React from 'react'
import axios from 'axios'
import './Movies.css'

function Movies() {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'game of thr'},
        headers: {
            'X-RapidAPI-Key': '04f4da376dmshc549d074dfc80f6p13e950jsnf567d7aa887d',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
      
    try {
        const response = axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    return (
        <div className="Movies">
            <h1>MOVIES BOS</h1>
        </div>
    )
}

export default Movies