import './Home.css';
import './ScrollDown.css'
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import FireParticlesFramer from './FireParticlesFramer.jsx';
import FireParticles from './FireParticles.jsx';
import {useRef, useState, useEffect, useContext} from "react";
import Portrait from "./Portrait.jsx"
import AnimatedIcon from "./AnimatedIcon.jsx";
import  MoveIconSrc from "../../assets/icons/move.png";
import  ClickIconSrc from "../../assets/icons/click.png";
import ScrollDown from "./ScrollDown.jsx";
import {useGSAP} from "@gsap/react";
import { SplitText, ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import {MasterTimelineContext} from "../../MasterTimelineContext.jsx";
import {createLoopTimeline, createScrollDownLoop, fadeScaleInVars, fadeScaleOutVars} from "./animations.js";
import DownArrowSrc from "../../assets/icons/down_arrow.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  const softTexts = ["creative", "proactive", "smart"]
  const [text, setText] = useState(softTexts[0]);
  const [count, setCount] = useState(1);
  function handleClick() {
    setCount(count + 1);
    setText(softTexts[count % softTexts.length]);
  }
  const homeContainer = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);

  const masterTl = useContext(MasterTimelineContext);
  const scrollDownRef = useRef(null);
  const scrollDownContainerRef = useRef(null);
  const scrollDownLoopRef = useRef(null);

  const clickRef = useRef(null);
  const clickLoopRef = useRef(null);
  const moveRef = useRef(null);
  const moveLoopRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new SplitText('.home-main', {type: 'chars, words'});
    const leftSplit = new SplitText(leftText.current, {type: 'chars, words'});
    const highlightSplit = new SplitText('.highlight', {type: 'chars, words'})
    const rightSplit = new SplitText(rightText.current, {type: 'chars, words'});

    leftSplit.chars.forEach((char) => {char.classList.add("text-gradient")})

    /*gsap.from(titleSplit.chars, {
      color: 'var(--primary-color-0)',
      yPercent: -10,
      scale: 1.1,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.07,
    })

    gsap.from(leftSplit.chars, {
      yPercent: -70,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
      delay: 1,
    })

    gsap.from(highlightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'bounce.out',
      stagger: 0.07,
      opacity: 0,
      delay: 2,
    })

    gsap.from(rightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
      delay: 1,
    })

    gsap.from('.portrait-container', {
      yPercent: 15,
      duration: 1.5,
      ease: 'bounce.out',
      opacity: 0,
      delay: 3,
    })*/
    scrollDownLoopRef.current = createScrollDownLoop(scrollDownRef.current);
    scrollDownLoopRef.current.resume();

    clickLoopRef.current = createLoopTimeline(clickRef.current);
    moveLoopRef.current = createLoopTimeline(moveRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#content',
        start: 'top top',
        end: '+=1000',
        scrub: true,
        pin: true,
        anticipatePin: true,
        invalidateOnRefresh: true,
        markers: true, // 👈 Aktiviere Marker zum Debuggen!,
        onUpdate: (self) => {
          //console.log(self.progress)
          // Wenn man ganz oben ist (progress 0), sicherstellen, dass Loop aus ist
          if (self.progress <= 0.01 || self.progress >= 0.99) {
            clickLoopRef.current?.pause();
            moveLoopRef.current?.pause();
          } else {
            clickLoopRef.current?.resume();
            moveLoopRef.current?.resume();
          }
          if (self.progress >= 0.99) {
            scrollDownLoopRef.current?.pause();
          } else {
            scrollDownLoopRef.current?.resume();
          }
        },
      }
    })
    tl.to(scrollDownContainerRef.current, {...fadeScaleOutVars(), overwrite: "auto"}, 0)
    tl.to(clickRef.current, fadeScaleInVars(), 1);
    tl.to(clickRef.current, fadeScaleOutVars(), 2);
    tl.to(moveRef.current, fadeScaleInVars(), 1);
    tl.to(moveRef.current, fadeScaleOutVars(), 2);


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: '+=1000',
        end: '+=1000',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    })
    tl2.to(leftSplit.chars, {
      x: -600,
      ease: 'power2.out',
      //stagger: 0.07,
    },0)
    tl2.to(rightSplit.chars, {
      x: 600,
      ease: 'power2.out',
      //stagger: -0.07,
    },0)
      //.to(rightText.current, {x: 100},0)

    //const masterTL = gsap.timeline({})
    masterTl.add(tl);
    masterTl.add(tl2);
  }, [
    masterTl,
    clickRef, clickLoopRef,
    moveRef, moveLoopRef,
    scrollDownRef, scrollDownLoopRef, scrollDownContainerRef
  ], {scope: homeContainer});

  /*useGSAP(() => {
    clickLoopRef.current = gsap.timeline({
      paused: true,
    })
    clickLoopRef.current.to(clickRef.current, {
      x: "+=10", // Kleine Bewegung nach rechts
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
      overwrite: 'auto',
    }, 0);

    // Für eine echte Acht würde man hier eine zweite Animation für die Y-Achse
    // mit doppelter Geschwindigkeit starten (wie in den vorigen Beispielen).
    clickLoopRef.current.to(clickRef.current, {
      y: "+=5",
      repeat: -1,
      yoyo: true,
      duration: 0.75,
      ease: "sine.inOut",
      overwrite: 'auto',
    }, 0);
    console.log("Davor: ", clickLoopRef.current.paused());
    if (startClickAnimation) {
      clickLoopRef.current.resume();
    } else {
      clickLoopRef.current.pause();
      //gsap.killTweensOf('#click');
    }
    console.log("Danach: ", clickLoopRef.current.paused());
  }, {dependencies: [startClickAnimation, clickLoopRef, clickRef]});*/

  return (
    <section id="home" className="home-container" ref={homeContainer}>
      {/*<div className="home-gradient"></div>*/}
      {/*<FireParticlesFramer n_particles={20} />*/}
      <div className="home-section">
        <div className="home-sub-container">

          <span className="home-sub left" ref={leftText}>AI & ML Expert</span>
          {/*<Portrait />*/}


          {/*<div id="box" style={{display: "block", width: "100px", height:"100px", backgroundColor: "red"}}></div>*/}
        </div>
        <span className="home-main">Oleksiy <br/> Kutscher</span>
        <div className="home-sub-container bottom-sub">
          <span className="home-sub highlight" onClick={handleClick}>{text}</span>
          <AnimatedIcon id="click" iconUrl={ClickIconSrc}
                        extraStyle={{left: "16vw", top: "3vw", backgroundColor: "var(--secondary-color-1)"}}
                        ref={clickRef}/>
          {/*<div id="click2" style={{width: "40px", height: "40px",backgroundColor: "red", opacity: 0, scale: 0}} ref={clickRef}/>*/}
          <span className="home-sub right" ref={rightText}>Software Developer</span>
        </div>
        {/*<ScrollDown containerRef={scrollDownContainerRef} ref={scrollDownRef} />
        <div className="scroll-container" ref={scrollDownContainerRef}>
          <div className="scroll-elements" ref={scrollDownRef}>
            <div className="scroll-icon" style={{"--icon-url": `url(${DownArrowSrc})`}}></div>
            <span className="text">Scroll down</span>
          </div>
        </div>*/}

      </div>
      <Portrait/>
      <AnimatedIcon
        id="move"
        iconUrl={MoveIconSrc}
        extraStyle={{right: "7vw", top: "30vw", backgroundColor: "var(--secondary-color-2)"}}
        ref={moveRef}
      />
      <div className="scroll-indicator animate-float">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"><div className="scroll-ping animate-line-draw" /></div>
      </div>
    </section>
  );
}
