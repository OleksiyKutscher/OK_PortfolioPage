import './LoadingScreen.css';
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function LoadingScreen({ onAnimationComplete }) {
  const bannerRef = useRef(null);
  const surnameRef = useRef(null);
  const familyRef = useRef(null);
  const oRef = useRef(null);
  const kRef = useRef(null);
  const loadingRef = useRef(null);
  const knockoutTextRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({paused: false});
    tl.set(bannerRef.current.children, {
      y: "100vh",
      duration: 1,
    }, 0)
    tl.fromTo(bannerRef.current.children, {
      y: "100vh",
      stagger: 0.1,
    }, {
      y: "0",
      duration: 2,
      stagger: 0.1,
      ease: "expo.out",
    }, 1)

    const surnameSplit = new SplitText(surnameRef.current, {type: 'chars, words'});
    const familySplit = new SplitText(familyRef.current, {type: 'chars, words'});

    const staggerNameDuration = 0.06
    tl.from(surnameSplit.chars, {
      y: "1vw",
      //duration: 2,
      opacity: 0,
      stagger: staggerNameDuration,
    }, 2)
    tl.from(familySplit.chars, {
      y: "1vw",
      //duration: 2,
      opacity: 0,
      stagger: staggerNameDuration,
      delay: 7 * staggerNameDuration,
    }, 2)

    tl.set(oRef.current, {
      opacity: 1,
    }, 3)
    tl.set(kRef.current, {
      opacity: 1,
    }, 3)
    tl.to(surnameSplit.chars, {
      //y: "1vw",
      //duration: 2,
      opacity: 0,
      stagger: staggerNameDuration,
    }, 3)
    tl.to(familySplit.chars, {
      //y: "1vw",
      //duration: 2,
      opacity: 0,
      stagger: staggerNameDuration,
      delay: 7 * staggerNameDuration,
    }, 3)
    tl.to(oRef.current, {
      x: "18vw",
      delay: 15 * staggerNameDuration,
      ease: "expo.out",
    }, 3)
    tl.to(kRef.current, {
      x: "1vw",
      delay: 15 * staggerNameDuration,
      ease: "expo.out",
    }, 3)
    tl.to(loadingRef.current, {
      delay: 0,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        loadingRef.current.style.display = "none";
        },
    }, 4)
    const isMobile = window.screen.width <= 520
    if (isMobile) {
      tl.set(knockoutTextRef.current, {
        y: "-3em",
      }, 4)
    }
    tl.to(knockoutTextRef.current, {
      scale: 200,
      y: isMobile? "7em": 0,
      //letterSpacing: "-1px",
      duration: 3,
      ease: "power2.inOut",
    }, 4)
    tl.to(knockoutTextRef.current, {
      opacity: 0,
      delay: 0,
      onComplete: () => {
        onAnimationComplete();
        knockoutTextRef.current.style.display = "none";
      },
    }, 5);
  }, [bannerRef, surnameRef, familyRef, oRef, kRef, loadingRef, knockoutTextRef, onAnimationComplete,]);

  return (
    <>
      <div className="knockout-text-container" ref={knockoutTextRef}>
        <svg className="knockout-svg" width="100%" height="100%">
          <defs>
            {/*<!-- Die Maske: Weiß füllt aus, Schwarz schneidet aus -->*/}
            <mask id="hole-mask">
             {/* <!-- Der weiße Hintergrund bedeckt den ganzen Bildschirm -->*/}
              <rect width="100%" height="100%" fill="white"/>
              {/*<!-- Der schwarze Text schneidet das Loch in die Maske -->*/}
              <text x="50%" y="50%" fill="black">OK</text>
            </mask>
          </defs>

          {/*<!-- Dieses Rechteck greift sich die Maske und bekommt deine Wunschfarbe -->*/}
          <rect width="100%" height="100%" mask="url(#hole-mask)" className="mask-color-rect"/>
        </svg>
      </div>
      <div
        className="loading-container"
        ref={loadingRef}
      >
        <div className="banner-container" ref={bannerRef}>
          <div className="banner"></div>
          <div className="banner"></div>
          <div className="banner"></div>
          <div className="banner"></div>
        </div>
        <div className="name-container">
          <div className="name-sub-container">
            <div className="surname-name" ref={surnameRef}>Oleksiy</div>
            <div className="short-name" ref={oRef}>O</div>
          </div>
          <div className="name-sub-container">
          <div className="family-name" ref={familyRef}>Kutscher</div>
          <div className="short-name" ref={kRef}>K</div>
        </div>
      </div>
      {/*<div className="spinner"></div>
      <p>Lädt...</p>*/}
    </div>
      </>
  );
}
