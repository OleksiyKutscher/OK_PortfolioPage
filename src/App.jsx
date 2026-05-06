import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Portrait from "./components/Home/Portrait.jsx";

function App() {

  return (
    <>
      <Header />
      <div id="content" className="content-container">
        <div className="technical-grid">

          <Home />
          <AboutMe />
          <div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
        </div>
      </div>
    </>
  )
}

export default App
