import React from 'react'
import './Topbar.css'

function Topbar() {
  return (
    <div className='topbar'>
        <div className="first-container">
            <h1>SINANAAS</h1>
        </div>
        <div className="second-container">
            
        </div>
        <div className="third-container">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar