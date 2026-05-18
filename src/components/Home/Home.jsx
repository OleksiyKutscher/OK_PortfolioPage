import './Home.css';
import './ScrollDown.css'
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import FireParticlesFramer from './FireParticlesFramer.jsx';
import FireParticles from './FireParticles.jsx';
import {useRef, useState, useEffect, useContext} from "react";
import AnimatedIcon from "./AnimatedIcon.jsx";
import  MoveIconSrc from "../../assets/icons/move.png";
import  ClickIconSrc from "../../assets/icons/click.png";
import {useGSAP} from "@gsap/react";
import { SplitText, ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import {createLoopTimeline, fadeScaleInVars, fadeScaleOutVars} from "../../animations/index.js";
import PortraitImg from "../../assets/images/portrait_cut.jpg";
import PortraitEditImg from "../../assets/images/portrait_cut_edit.png";
import {homeHighlightWords, homeSubTitles, showAnimationMarkers} from "../../../constants/index.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home({language}) {
  const highlightTexts = homeHighlightWords[language] || [];
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % highlightTexts.length);
  }
  const currentText = highlightTexts[index] || "";

  const homeContainerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const highlightTextRef = useRef(null);
  const titleTextRef = useRef(null);

  const highlightTextContainerRef = useRef(null);

  const clickRef = useRef(null);
  const clickLoopRef = useRef(null);
  const moveRef = useRef(null);
  const moveLoopRef = useRef(null);

  const portraitRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useGSAP(() => {
    const titleSplit = new SplitText(titleTextRef.current, {type: 'chars, words'});
    const leftSplit = new SplitText(leftTextRef.current, {type: 'chars, words'});
    const highlightSplit = new SplitText(highlightTextRef.current, {type: 'chars, words'})
    const rightSplit = new SplitText(rightTextRef.current, {type: 'chars, words'});

    leftSplit.chars.forEach((char) => {char.classList.add("text-gradient")})

    const initialLoadingDelay = 5
    /*gsap.from(titleSplit.chars, {
      color: 'var(--primary-color-0)',
      yPercent: -10,
      scale: 1.1,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.07,
      delay: initialLoadingDelay,
    })*/
    /* text split animation */
    const tl = gsap.timeline({
      /*scrollTrigger: {
        trigger: homeContainerRef.current,
        start: 'top top',
        end: '+=1000',
        pin: true,
        scrub: true,
        markers: showAnimationMarkers.home
      },*/
      delay: initialLoadingDelay
    });
    tl.from(leftSplit.chars, {
      yPercent: -70,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
    }, 1)
    tl.from(rightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
    }, 1)
    tl.from(highlightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'bounce.out',
      stagger: 0.07,
      opacity: 0,
    }, 2)

    /* icon animations */
    // start loops
    clickLoopRef.current = createLoopTimeline(clickRef.current);
    moveLoopRef.current = createLoopTimeline(moveRef.current);

    // let icons appear
    tl.to(clickRef.current, {
      ...fadeScaleInVars(),
      onComplete: () => {
        clickLoopRef.current?.resume();
      }
    }, 3);
    tl.to(moveRef.current, {
      ...fadeScaleInVars(),
      onComplete: () => {
       moveLoopRef.current?.resume();
       //onAnimationComplete();
      }
    }, 3);

    // let icons disappear on click or touch
    const fadeOut = (eleRef, loopRef) => {
      gsap.to(eleRef.current, fadeScaleOutVars());
      loopRef.current?.pause();
    }
    const fadeIn = (eleRef, loopRef) => {
      gsap.to(eleRef.current, fadeScaleInVars());
      loopRef.current?.resume();
    }
    highlightTextRef.current.addEventListener('click', () => {fadeOut(clickRef, clickLoopRef)});
    portraitRef.current.addEventListener('click', () => {fadeOut(moveRef, moveLoopRef)});
    portraitRef.current.addEventListener('touchstart', () => {fadeOut(moveRef, moveLoopRef)});

    // let icons disappear if they leave viewport
    const createViewPortHandler = (eleRef, loopRef) => {
      ScrollTrigger.create({
        trigger: eleRef.current,
        start: "top bottom", // Startet die Überwachung
        end: "bottom top",   // Endet, wenn das Element oben den Viewport verlässt
        onLeave: () => {
          fadeOut(eleRef, loopRef);
        },
        onEnterBack: () => {
          fadeIn(eleRef, loopRef);
        }
      });
    }
    createViewPortHandler(clickRef, clickLoopRef);
    createViewPortHandler(moveRef, moveLoopRef);

    // outro scroll up animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: homeContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: showAnimationMarkers.home
      }
    })
    const scrollUpAnimation = {
      y: "-8vh",
      opacity: 0,
      ease: 'linear',
    }
    const media767 = window.screen.width <= 767;
    tl2.to(leftTextRef.current, {
      ...scrollUpAnimation,
       delay: media767 ? 0.2 : 0,
      //stagger: 0.04,
    },0)
    tl2.to(portraitRef.current, {
      ...scrollUpAnimation,
      delay: media767 ? 0 : 0.2,
    }, 0)
    tl2.to(titleTextRef.current, {
      ...scrollUpAnimation,
      delay: 0.2,
    }, 0)
    tl2.to(highlightTextContainerRef.current, {
     ...scrollUpAnimation,
      delay: 0.5,
    }, 0)
    tl2.to(rightTextRef.current, {
      ...scrollUpAnimation,
      delay: 0.7,
      //stagger: -0.07,
    },0)

  }, [
    //language,
    clickRef, clickLoopRef,
    moveRef, moveLoopRef,
    portraitRef, leftTextRef, rightTextRef, titleTextRef, highlightTextRef, homeContainerRef, highlightTextContainerRef
  ]);

  return (
    <section id="home" className="home-container" ref={homeContainerRef}>

      {/*<FireParticlesFramer n_particles={20} />*/}
      <div className="home-top">
        <div className="home-top-text">
          <span className="home-sub left" ref={leftTextRef}>{homeSubTitles.left[language]}</span>
          <span className="home-title" ref={titleTextRef}>Oleksiy <br/> Kutscher</span>
        </div>
        <motion.div
          className="home-top-portrait"
          drag={true}
          dragSnapToOrigin={true}
          whileHover="hover"
          ref={portraitRef}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <img src={PortraitImg} alt="Portrait" draggable="false" />
          <motion.div
            className="portrait-highlight"
            style={{backgroundImage: `url(${PortraitEditImg})`}}
            variants={{
              rest: { backgroundColor: "rgba(255, 255, 255, 0.0)" }, // Unsichtbar wenn die Maus nicht drüber ist
              hover: { backgroundColor: "var(--primary-color-0)", display: "block" } // Sichtbar beim Hover
            }}
          />
          <AnimatedIcon
            id="move"
            iconUrl={MoveIconSrc}
            extraStyle={{right: window.screen.width <= 1024 ? "3vw" : "1vw", top: "25vh", backgroundColor: "var(--secondary-color-2)"}}
            ref={moveRef}
          />
        </motion.div>
      </div>
      <div className="home-bottom">
        <div className="creative-text-container" ref={highlightTextContainerRef}>
          <span className="home-sub highlight" onClick={handleClick} ref={highlightTextRef}>{currentText}</span>
          <AnimatedIcon
            id="click"
            iconUrl={ClickIconSrc}
            extraStyle={{right: "-2vw", top: "2vh", backgroundColor: "var(--secondary-color-1)"}}
            ref={clickRef}
          />
        </div>
        <span className="home-sub right" ref={rightTextRef}>{homeSubTitles.right[language]}</span>
      </div>
      <div className="scroll-indicator animate-float">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"><div className="scroll-ping animate-line-draw" /></div>
      </div>

    </section>
  );
}
