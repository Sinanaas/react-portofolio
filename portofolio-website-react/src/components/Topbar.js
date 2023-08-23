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
                <li><a href="./component/App.js">About</a></li>
                <li><a href="./component/App.js">Works</a></li>
                <li><a href="./component/App.js">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar