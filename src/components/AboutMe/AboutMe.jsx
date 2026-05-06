import "./AboutMe.css";
import {useContext, useRef} from "react";
import {MasterTimelineContext} from "../../MasterTimelineContext.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

export default function AboutMe() {
  const masterTl = useContext(MasterTimelineContext);
  const spreadTextRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    const spreadSplit = new SplitText(spreadTextRef.current, {type: 'chars, words'});
    const titleSplit = new SplitText(titleRef.current, {type: 'chars, words'});
    const descriptionSplit = new SplitText(descriptionRef.current, {type: 'words, lines'});
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: spreadTextRef.current,
        start: 'top top',
        end: '+=800',
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    });
    tl.from(spreadSplit.chars, {
      //x: -100,
      y: 10,
      opacity: 0,
      //rotation: 720,
      ease: 'power2.out',
      delay: 0.0,
      //duration: 0.3,
      stagger: 0.07,
    },0)
    tl.from(titleSplit.chars, {
      //x: -100,
      y: 50,
      opacity: 0,
      //rotation: 720,
      ease: 'power2.out',
      delay: 0.5,
      //duration: 0.3,
      stagger: 0.07,
    },1)
    tl.from(descriptionSplit.words, {
      //x: -100,
      y: 10,
      opacity: 0,
      //rotation: 720,
      ease: 'power2.out',
      delay: 1.0,
      //duration: 0.3,
      stagger: 0.07,
    },2)
    masterTl.add(tl);
  }, [masterTl, spreadTextRef,  titleRef, descriptionRef]);
  return (
    <section id="about-me" className="about-me-container">
      <span className="spread-text" ref={spreadTextRef}>CRAFTING DIGITAL EXCELLENCE</span>
      <h1 ref={titleRef}>Software <br /> Developer</h1>
      <p className="description" ref={descriptionRef}>
        I am a software developer specialized in creating
        the next generation of cutting edge AI models and
        developing an optimized web experience for everyone
      </p>
    </section>
  );

}
