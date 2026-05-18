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
import {ReactLenis, useLenis} from 'lenis/react'
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
  const mainRef = useRef(null);

  const lenisRef = useRef()
  //const lenis = useLenis();
  //const [scrolledToEnd, setScrolledToEnd] = useState(false);
   // 1. Zustand steuert, ob der Loop aktiv ist oder nicht
  //const [isInfinite, setIsInfinite] = useState(false);
  //const [scrollMode, setScrollMode] = useState("normal"); // "normal" oder "infinite"


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
      //lenisRef.current?.lenis?.on('scroll', ScrollTrigger.update);
    }
    return () => gsap.ticker.remove(update)
  }, [showLoading, lenisRef])

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

    // 2. GSAP anweisen, die Höhenberechnung neu zu starten
    /*ScrollTrigger.refresh();
    // Maximale Scroll-Distanz der Seite ermitteln
    const maxScroll = ScrollTrigger.maxScroll(window);

    // 3. Den ScrollTrigger Loop erstellen
    const loop = ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "bottom bottom",
      onLeave: () => {
        if (lenisRef.current?.lenis) {
          // Sprung zu Pixel 1 ohne Animation (instant: true)
          lenisRef.current?.lenis?.scrollTo(1, {
            immediate: true,
            lock: true,
            force: true
          });
          setScrolledToEnd(true);
        } else {
          window.scrollTo(0, 1);
        }
        ScrollTrigger.update();
      },
      onLeaveBack: () => {
        if (scrolledToEnd) {
           //const maxScroll = ScrollTrigger.maxScroll(window);
          if (lenisRef.current?.lenis) {
            // Sprung ans Ende ohne Animation
            lenisRef.current?.lenis?.scrollTo(maxScroll - 1, {
              immediate: true,
              lock: true,
              force: true
            });
          } else {
            window.scrollTo(0, maxScroll - 1);
          }
          ScrollTrigger.update();
        }
      }
    });*/

    /*ScrollTrigger.refresh();

    // 1. Wenn der Loop durch das Erreichen des Endes freigeschaltet wird
    const endTrigger = ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "bottom bottom",
      onLeave: () => {
        setScrolledToEnd(true); // Schaltet das freie Scrollen in alle Richtungen frei
        endTrigger.kill();
      }
    });
    const blockScrollUp = (e) => {
      if (scrolledToEnd) return;

      // Erkennt, ob der Nutzer nach oben scrollen will (Mausrad oder Touch-Geste)
      const isScrollingUp = e.deltaY < 0 || (e.touches && e.changedTouches[0]?.clientY > 0);

      // Wenn man sich am Start (Pixel 0) befindet und nach oben will -> Event killen!
      if (window.scrollY <= 1 && isScrollingUp) {
        console.log("test")
        e.preventDefault();
        e.stopPropagation();
        lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
        document.body.classList.add("stop-scrolling");
      } else {
        document.body.classList.remove("stop-scrolling");
      }
    };

    // Native Browser-Events abfangen (muss { passive: false } sein, um preventDefault zu erlauben)
    window.addEventListener('wheel', blockScrollUp, { passive: false });
    window.addEventListener('touchmove', blockScrollUp, { passive: false });
    console.log(scrolledToEnd);
    //lenisRef.current?.lenis?.on('scroll', handleScroll);
    return () => {
      endTrigger.kill();
      //lenisRef.current?.lenis?.off('scroll', handleScroll);
      window.removeEventListener('wheel', blockScrollUp);
      window.removeEventListener('touchmove', blockScrollUp);
    }*/
  }, [codeRef, mainRef]);


  return (
    <>
      {/*<div className="top-glow"/>*/}
      <ReactLenis
        root
        options={{
          //infinite: true, // Schaltet den unendlichen Seiten-Loop nativ ein!
          //syncTouch: true, // Erlaubt den Loop auch auf Smartphones/Touch-Geräten
          autoRaf: false,
        }}
        ref={lenisRef}
      />
      <Header language={language} updateLanguage={() => handleLanguageChange(language === 'de' ? 'en' : 'de')} />

      {/*<div id="smooth-wrapper">
        <div id="smooth-content">*/}
      <main id="content" className="content-container" ref={mainRef}>
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

