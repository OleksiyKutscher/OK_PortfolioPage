import './App.css'
import Header from './components/Header';
import Portrait from "./components/Home/Portrait.jsx";
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Abilities from './components/Abilities/Abilities.jsx';
import {useContext, useRef} from "react";
import {MasterTimelineContext} from "./MasterTimelineContext.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

function App() {
  const masterTl = useContext(MasterTimelineContext);
  const portraitRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: '+=1000',
        end: '+=1000',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    });
    tl.to(portraitRef.current, {
      x: -100,
      y: "55vw",
      scale: 1.15,
      //rotation: 720,
      ease: 'expo.out',
      delay: 0.0,
      //duration: 0.3,
      //stagger: -0.07,
    },0)
    masterTl.add(tl);
  }, [masterTl, portraitRef]);
  return (
    <>
      <Header />
      <div id="content" className="content-container">
        <div className="technical-grid">
          <Portrait ref={portraitRef}/>
          <Home />
          <AboutMe />
          <Abilities />
          {/*<div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>*/}
        </div>
      </div>
    </>
  )
}

export default App
