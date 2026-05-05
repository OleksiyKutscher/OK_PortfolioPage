import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {

  return (
    <>
      <Header />
      <div id="content" className="content-container">
        <Home />
        <AboutMe />
        <div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
      </div>
    </>
  )
}

export default App
