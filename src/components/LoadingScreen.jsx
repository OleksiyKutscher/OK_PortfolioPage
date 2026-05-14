import './LoadingScreen.css';
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function LoadingScreen() {
  const bannerRef = useRef(null);
  const surnameRef = useRef(null);
  const familyRef = useRef(null);
  const oRef = useRef(null);
  const kRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({

    });
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

  }, [bannerRef])

  return (
    <div className="loading-container">
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
  );
}
