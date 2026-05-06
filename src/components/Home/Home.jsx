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
  const hightlightText = useRef(null);
  const titleText = useRef(null);

  const masterTl = useContext(MasterTimelineContext);
  /*const scrollDownRef = useRef(null);
  const scrollDownContainerRef = useRef(null);
  const scrollDownLoopRef = useRef(null);*/

  const clickRef = useRef(null);
  const clickLoopRef = useRef(null);
  const moveRef = useRef(null);
  const moveLoopRef = useRef(null);

  const portraitRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleText.current, {type: 'chars, words'});
    const leftSplit = new SplitText(leftText.current, {type: 'chars, words'});
    const highlightSplit = new SplitText(hightlightText.current, {type: 'chars, words'})
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
    /*scrollDownLoopRef.current = createScrollDownLoop(scrollDownRef.current);
    scrollDownLoopRef.current.resume();*/

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
          /*if (self.progress >= 0.99) {
            scrollDownLoopRef.current?.pause();
          } else {
            scrollDownLoopRef.current?.resume();
          }*/
        },
      }
    })
    /*tl.to(scrollDownContainerRef.current, {...fadeScaleOutVars(), overwrite: "auto"}, 0)*/
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
      opacity: 0,
      ease: 'power2.out',
      //stagger: 0.07,
    },0)
    tl2.to(titleSplit.chars, {
      x: -600,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.1,
    }, 0)
    tl2.to(highlightSplit.chars, {
      x: -600,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.2,
    }, 0)
    tl2.to(rightSplit.chars, {
      x: -700,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.3,
      //stagger: -0.07,
    },0)

    //const masterTL = gsap.timeline({})
    masterTl.add(tl);
    masterTl.add(tl2);
  }, [
    masterTl,
    clickRef, clickLoopRef,
    moveRef, moveLoopRef,
    /*scrollDownRef, scrollDownLoopRef, scrollDownContainerRef,*/
    portraitRef, leftText, rightText, titleText, hightlightText
  ]);

  return (
    <section id="home" ref={homeContainer}>
      {/*<div className="home-gradient"></div>*/}
      {/*<FireParticlesFramer n_particles={20} />*/}
      <div className="home-section">
        <div className="home-sub-container">
          <span className="home-sub left" ref={leftText}>AI & ML Expert</span>
        </div>
        <span className="home-main" ref={titleText}>Oleksiy <br/> Kutscher</span>
        <div className="home-sub-container bottom-sub">
          <span className="home-sub highlight" onClick={handleClick} ref={hightlightText}>{text}</span>
          <AnimatedIcon
            id="click"
            iconUrl={ClickIconSrc}
            extraStyle={{left: "16vw", top: "3vw", backgroundColor: "var(--secondary-color-1)"}}
            ref={clickRef}
          />
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
      {/*<Portrait ref={portraitRef}/>*/}
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
