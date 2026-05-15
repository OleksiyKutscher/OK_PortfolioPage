import './MainContent.css'
import Header from './Header.jsx';
import Portrait from "./Home/Portrait.jsx";
import Home from './Home/Home.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Abilities from './Abilities/Abilities.jsx';
import {useContext, useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText, ScrollTrigger} from "gsap/all";
import CodeImg from "../assets/images/code.png";
import TechStack from "./TechStack/TechStack.jsx";
import ProfExp from "./ProfExp/ProfExp.jsx";
import Education from "./Education/Education.jsx";
import Footer from "./Footer.jsx";
import { ReactLenis } from 'lenis/react'
import {showAnimationMarkers} from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

export default function MainContent({showLoading}) {
  const masterTl = useRef(gsap.timeline({ paused: true }));
  //const mainRef = useRef(null);//useContext(MasterTimelineContext);
  const codeRef = useRef(null);
  const spotlightRef = useRef(null);

  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    /*if (showLoading) {
      lenisRef.current?.lenis?.stop();
    } else {*/
      lenisRef.current?.lenis?.start();
      gsap.ticker.add(update)
    //}
    return () => gsap.ticker.remove(update)
  }, [showLoading])

  useGSAP(() => {
    /*let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });*/

    /*ScrollTrigger.create({
      trigger: spotlightRef.current,
      pin: true,           // Keeps it "fixed" during scroll
      start: "top top",    // When the top of element hits top of viewport
      end: "max",
      pinSpacing: false    // Prevents pushing other content down
    });*/
    //spotlightRef.current.parentElement.style.position = "fixed";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: showAnimationMarkers
      }
    });
    tl.to(codeRef.current, {
      x: 0,
      y: "-300vh",
      scale: 1,
      //rotation: 720,
      ease: 'linear',
      delay: 0.0,
      //duration: 0.3,
      //stagger: -0.07,
    },0)
    masterTl.current.add(tl);
  }, [masterTl, codeRef]);
  return (
    <>
      {/*<div className="top-glow"/>*/}
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Header />

      {/*<div id="smooth-wrapper">
        <div id="smooth-content">*/}
      <main id="content" className="content-container">
        <div className="code-img-container" style={{backgroundImage: `url(${CodeImg})`, backgroundSize: "100%"}} ref={codeRef}>

          {/*<img src={CodeImg} alt="code" ref={portraitRef}/>*/}
        </div>
        <div className="bg-spotlight" ref={spotlightRef}/>
        <Home masterTl={masterTl} />
        <Abilities masterTl={masterTl} />
         {/*<TechStack masterTl={masterTl} />*/}
        <ProfExp masterTl={masterTl} />
        <Education masterTl={masterTl} />
        <Footer masterTl={masterTl} />
        {/*<div className="technical-grid">

          <div style={{ marginTop: '100vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>
        </div>*/}
        {/*<div style={{ marginTop: '1000vh', width:'100px', height:'100px', backgroundColor: "red" }}></div>*/}
      </main>
      {/*  </div>
      </div>*/}
    </>
  )
}

