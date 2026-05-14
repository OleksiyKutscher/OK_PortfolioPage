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
import PortraitImg from "../../assets/images/portrait_cut.jpg";
import PortraitEditImg from "../../assets/images/portrait_cut_edit.png";
import CodeImg from "../../assets/images/code.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home({masterTl}) {
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
    const tl = gsap.timeline({delay: initialLoadingDelay});
    tl.from(leftSplit.chars, {
      yPercent: -70,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
      //delay: 1,
    }, 1)
    tl.from(rightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.07,
      opacity: 0,
      //delay: 1 + initialLoadingDelay,
    }, 1)
    tl.from(highlightSplit.chars, {
      yPercent: 70,
      duration: 1.5,
      ease: 'bounce.out',
      stagger: 0.07,
      opacity: 0,
      //delay: 2,
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
      }
    }, 3);

    // let icons disappear on click or touch
    const handleClick = (eleRef, loopRef) => {
      gsap.to(eleRef.current, fadeScaleOutVars());
      loopRef.current?.pause();
    }
    hightlightText.current.addEventListener('click', () => {handleClick(clickRef, clickLoopRef)});
    portraitRef.current.addEventListener('click', () => {handleClick(moveRef, moveLoopRef)});
    portraitRef.current.addEventListener('touchstart', () => {handleClick(moveRef, moveLoopRef)});

    // let icons disappear if they leave viewport
    const createViewPortHandler = (eleRef, loopRef) => {
      ScrollTrigger.create({
        trigger: eleRef.current,
        start: "top bottom", // Startet die Überwachung
        end: "bottom top",   // Endet, wenn das Element oben den Viewport verlässt
        onLeave: () => {
          handleClick(eleRef, loopRef);
        },
        onEnterBack: () => {
          // show them when coming back to home page? always?
          /*gsap.to(eleRef.current, {
            ...fadeScaleInVars(),
            onComplete: () => {
              loopRef.current?.resume();
            }
          });*/
        }
      });
    }
    createViewPortHandler(clickRef, clickLoopRef);
    createViewPortHandler(moveRef, moveLoopRef);
    // TODO: only activate body scrolling after this point
    /*gsap.from('.portrait-container', {
      yPercent: 15,
      duration: 1.5,
      ease: 'bounce.out',
      opacity: 0,
      delay: 3 + initialLoadingDelay,
    })*/


    /*clickLoopRef.current = createLoopTimeline(clickRef.current);
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
        },
      }
    })
    tl.to(clickRef.current, fadeScaleInVars(), 1);
    tl.to(clickRef.current, fadeScaleOutVars(), 2);
    tl.to(moveRef.current, fadeScaleInVars(), 1);
    tl.to(moveRef.current, fadeScaleOutVars(), 2);*/


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: homeContainer.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    })
    const scrollUpAnimation = {
      y: "-8vh",
      opacity: 0,
      ease: 'linear',
    }
    tl2.to(leftSplit.chars, {
      ...scrollUpAnimation,
      //stagger: 0.04,
    },0)
    tl2.to(portraitRef.current, {
      ...scrollUpAnimation,
      delay: 0.2,
    }, 0)
    tl2.to(titleSplit.chars, {
      ...scrollUpAnimation,
      delay: 0.2,
    }, 0)
    tl2.to(hightlightText.current, {
     ...scrollUpAnimation,
      delay: 0.6,
    }, 0)
    tl2.to(rightSplit.chars, {
      ...scrollUpAnimation,
      delay: 0.7,
      //stagger: -0.07,
    },0)

    //const masterTL = gsap.timeline({})
   // masterTl.current.add(tl);
    //masterTl.current.add(tl2);
  }, [
    masterTl,
    clickRef, clickLoopRef,
    moveRef, moveLoopRef,
    portraitRef, leftText, rightText, titleText, hightlightText, homeContainer
  ]);

  return (
    <section id="home" className="home-container" ref={homeContainer}>

      {/*<FireParticlesFramer n_particles={20} />*/}
      <div className="home-top">
        <div className="home-top-text">
          <span className="home-sub left" ref={leftText}>AI & ML Expert</span>
          <span className="home-title" ref={titleText}>Oleksiy <br/> Kutscher</span>
        </div>
        <motion.div className="home-top-portrait" drag={true} dragSnapToOrigin={true} whileHover="hover" ref={portraitRef}>
          <img src={PortraitImg} alt="Portrait" draggable="false" />
          <motion.div
            className="portrait-highlight"
            style={{backgroundImage: `url(${PortraitEditImg})`}}
            variants={{
              rest: { backgroundColor: "rgba(255, 255, 255, 0.0)" }, // Unsichtbar wenn die Maus nicht drüber ist
              hover: { backgroundColor: "var(--primary-color-0)", display: "block" }  // Sichtbar beim Hover
            }}
          />
          <AnimatedIcon
            id="move"
            iconUrl={MoveIconSrc}
            extraStyle={{right: "7vw", top: "30vw", backgroundColor: "var(--secondary-color-2)"}}
            ref={moveRef}
          />
        </motion.div>
      </div>
      <div className="home-bottom">
        <div className="creative-text-container">
          <span className="home-sub highlight" onClick={handleClick} ref={hightlightText}>{text}</span>
          <AnimatedIcon
            id="click"
            iconUrl={ClickIconSrc}
            extraStyle={{left: "16vw", top: "3vw", backgroundColor: "var(--secondary-color-1)"}}
            ref={clickRef}
          />
        </div>
        <span className="home-sub right" ref={rightText}>Software Developer</span>
      </div>
      <div className="scroll-indicator animate-float">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"><div className="scroll-ping animate-line-draw" /></div>
      </div>

    </section>
  );
}
