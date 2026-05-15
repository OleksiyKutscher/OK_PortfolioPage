import {Suspense, lazy, useState, useRef, useEffect} from 'react';

// Die eigentliche Seite wird asynchron geladen
import MainContent from './components/MainContent.jsx';
// Deine Ladeseite
import LoadingScreen from './components/LoadingScreen.jsx';
import gsap from "gsap";


function App() {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!showLoading) {
      document.body.classList.remove("stop-scrolling");
    }

  }, [showLoading]);
  //document.body.classList.remove("stop-scrolling");
  return (
    <>
     {/*<div style={{width: "100vw", height: "100vh", background: "red", position: "absolute", top: 0, }}></div>*/}
      <LoadingScreen
        onAnimationComplete={() => setShowLoading(false)}
      />

       <MainContent showLoading={showLoading} />
    </>


  )
}

export default App
