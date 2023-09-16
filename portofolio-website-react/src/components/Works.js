import React from 'react'
import './Works.css'
import Gallery from './Gallery.js'
import Projects from './Projects.js'
import Movies from './Movies.js'
import Anime from './Anime.js'

function Works() {
  return (
    <div className="works-container" id='works'>
        <div className="upper-container">
            <h1>MY RECENT WORKS</h1>
            <Projects/>
        </div>
        <div className="lower-container">
          <h1>MY GALLERY</h1>
          <Gallery/>
        </div>
        <div className="movies-container">
          <Movies/>
        </div>
        <div className="anime-container">
          {/* <Anime/> */}
        </div>
    </div>
  )
}

export default Works