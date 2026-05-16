import './MainContent.css'
import Header from './Header.jsx';
import Portrait from "./Home/Portrait.jsx";
import Home from './Home/Home.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Abilities from './Abilities/Abilities.jsx';
import {useContext, useEffect, useRef, useState} from "react";
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
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'de';
  })
  const handleLanguageChange = (newLang) => {
    // 1. Sprache im Browser dauerhaft speichern
    localStorage.setItem('portfolio_lang', newLang);
    // 2. Seite neu laden (GSAP startet frisch, liest oben den gespeicherten Wert)
    window.location.reload();
  };
  const codeRef = useRef(null);
  const spotlightRef = useRef(null);

  const lenisRef = useRef()

  //const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    if (showLoading) {
      lenisRef.current?.lenis?.stop();
    } else {
      //document.body.classList.remove("stop-scrolling");
      lenisRef.current?.lenis?.start();
      gsap.ticker.add(update)
    }
    return () => gsap.ticker.remove(update)
  }, [showLoading])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: showAnimationMarkers.mainContent
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

  }, [codeRef]);
  return (
    <>
      {/*<div className="top-glow"/>*/}
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Header language={language} updateLanguage={() => handleLanguageChange(language === 'de' ? 'en' : 'de')} />

      {/*<div id="smooth-wrapper">
        <div id="smooth-content">*/}
      <main id="content" className="content-container">
        <div className="code-img-container" style={{backgroundImage: `url(${CodeImg})`, backgroundSize: "100%"}} ref={codeRef}>

          {/*<img src={CodeImg} alt="code" ref={portraitRef}/>*/}
        </div>
        <div className="bg-spotlight" ref={spotlightRef}/>
        <Home language={language} />{/*onAnimationComplete={() => setShowLoading(false)}*/}
        <Abilities language={language} />
         {/*<TechStack />*/}
        <ProfExp language={language} />
        <Education language={language} />
        <Footer language={language} />
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

