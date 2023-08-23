import './App.css'
import Topbar from './components/Topbar.js'
import Home from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar/>
      </header>
      <div className="container"> 
        <Home/>
      </div>
      <div className="about-me">
        <About/>
      </div>
    </div>
  );
}

export default App;
