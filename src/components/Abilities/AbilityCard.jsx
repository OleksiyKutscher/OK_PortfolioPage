import './AbilitiyCard.css';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {isMobile, showAnimationMarkers} from "../../../constants/index.js";

export default function AbilityCard({iconUrl, title, description, ref}) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  useGSAP(() => {
    const textAnimation = (eleRef, startAnimation, endAnimation) => {
      const eleSplit = new SplitText(eleRef.current, {type: 'chars, words'});
      gsap.to(eleSplit.words, {
        scrollTrigger: {
          trigger: eleRef.current,
          //pin: true,
          start: 'top ' + startAnimation,
          end: 'top ' + endAnimation,
          scrub: true,
          markers: showAnimationMarkers.abilities,
          id: 'card-title',
        },
        color: "var(--primary-color-0)",
        stagger: {
          each: 0.05,
          yoyo: true,           // animates back to original color
          repeat: 1,            // once
        },
        ease: "sine.inOut",
      });
    }
    let titleStart;
    let titleEnd;
    let descStart;
    let descEnd;
    if (isMobile) {
      titleStart = "60%";
      titleEnd = "40%";
      descStart = "40%";
      descEnd = "20%";
    } else {
      titleStart = "75%";
      titleEnd = "55%";
      descStart = "55%";
      descEnd = "35%";
    }
    textAnimation(titleRef, titleStart , titleEnd)
    textAnimation(descriptionRef, descStart , descEnd)

  }, [titleRef, descriptionRef]);

  return (
    <div className='card' ref={ref}>
      <div
        className='icon'
        style={{
          WebkitMaskImage: `url(${iconUrl})`,
          maskImage: `url(${iconUrl})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <h2 ref={titleRef}>{title}</h2>
      <p ref={descriptionRef}>{description}</p>
    </div>
  );
}
