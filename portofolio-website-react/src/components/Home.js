import React from 'react'
import './Home.css'
import foto from './foto.png'

function Home() {
  return (
    <div className='home-container'>
      <div className="left-container">
        <h1 className='greetings-text'>Hello There!</h1>
        <h2 className='intro-text'>My name is Muhammad Sinan Abdussyakur, an undergraduate student at Bina Nusantara University majoring in Computer Science and currently living in Jakarta, Indonesia. Hope you like my portfolio:)</h2>
      </div>
      <div className="right-container">
        <img src={foto} alt="Photo" width={"570px"}/>
      </div>
    </div>
  )
}

export default Home