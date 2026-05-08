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
import TechStack from "./components/TechStack/TechStack.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const masterTl = useRef(gsap.timeline({ paused: true }));//useContext(MasterTimelineContext);
  const codeRef = useRef(null);
  const spotlightRef = useRef(null);

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });

    ScrollTrigger.create({
      trigger: spotlightRef.current,
      pin: true,           // Keeps it "fixed" during scroll
      start: "top top",    // When the top of element hits top of viewport
      end: "max",
      pinSpacing: false    // Prevents pushing other content down
    });
    //spotlightRef.current.parentElement.style.position = "fixed";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#content',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    });
    tl.to(codeRef.current, {
      x: 0,
      y: "-20vw",
      scale: 1,
      //rotation: 720,
      ease: 'expo.out',
      delay: 0.0,
      //duration: 0.3,
      //stagger: -0.07,
    },0)
    masterTl.current.add(tl);
  }, [masterTl, codeRef]);
  return (
    <>
      {/*<div className="top-glow"/>*/}

      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="content" className="content-container">
            <div className="code-img-container" style={{backgroundImage: `url(${CodeImg})`, backgroundSize: "100%"}} ref={codeRef}>

              {/*<img src={CodeImg} alt="code" ref={portraitRef}/>*/}
            </div>
            <div className="bg-spotlight" ref={spotlightRef}/>
            <Home masterTl={masterTl} />
            <Abilities masterTl={masterTl} />
            <TechStack maasterTl={masterTl} />
            {/*<div className="technical-grid">

              <div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
            </div>*/}
            <div style={{ marginTop: '1000vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
