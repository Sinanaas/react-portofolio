import './App.css'
import Topbar from './components/Topbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Works from './components/Works.js'
import Contacts from './components/Contacts.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar/>
      </header>
      <div className="container" id='home'> 
        <Home/>
      </div>
      <div className="about-me" id='about'>
        <About/>
      </div>
      <div className="works" id='works'>
        <Works/>
      </div>
      <div className="contacs-container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
