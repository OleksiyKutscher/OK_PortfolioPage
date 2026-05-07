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
import {SplitText, ScrollTrigger, ScrollSmoother} from "gsap/all";
import CodeImg from "./assets/images/code.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const masterTl = useRef(gsap.timeline({ paused: true }));//useContext(MasterTimelineContext);
  const portraitRef = useRef(null);

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#content',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    });
    tl.to(portraitRef.current, {
      x: 0,
      y: "-10vw",
      scale: 1,
      //rotation: 720,
      ease: 'expo.out',
      delay: 0.0,
      //duration: 0.3,
      //stagger: -0.07,
    },0)
    masterTl.current.add(tl);
  }, [masterTl, portraitRef]);
  return (
    <>
      <Header />
      <main id="content" className="content-container">
        <div className="code-img-container" style={{backgroundImage: `url(${CodeImg})`, backgroundSize: "100%"}}>
          {/*<img src={CodeImg} alt="code" ref={portraitRef}/>*/}
        </div>
        <Home masterTl={masterTl} />
        <Abilities masterTl={masterTl} />
        {/*<div className="technical-grid">

          <div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
        </div>*/}
        <div style={{ marginTop: '1000vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
      </main>
    </>
  )
}

export default App
