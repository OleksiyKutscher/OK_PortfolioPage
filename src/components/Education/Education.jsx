import './Education.css';
import EducationEntry from "./EducationEntry.jsx";
import {educationEntryList, showAnimationMarkers} from "../../../constants/index.js";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {createTitleAnimation, scrambleRevealAnimation} from "../../animations/index.js";
import gsap from "gsap";
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import {SplitText} from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin, SplitText)

export default function Education() {
  const titleRef  = useRef(null);
  const eduContainerRef = useRef(null);
  const entriesContainerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    createTitleAnimation(titleRef, showAnimationMarkers.edu, false);
    /*
    unique education title animation
     */
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        //pin: true,
        start: 'top 90%',
        end: 'top 5%',
        scrub: true,
        markers: showAnimationMarkers.edu,
        id: "title-movement"
      },
      y: "-10vh",
      ease: 'linear',
      delay: 0,
      yoyo: true,
      repeat: 1,
    },0)

    /*
    Edu animation
     */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: entriesContainerRef.current,
        start: "top 95%",
        end: "top 20%",
        scrub: true,
        markers: showAnimationMarkers.edu,
        id: "edu-line"
      }
    });
    // line animation
    tl.from(lineRef.current, {
      yPercent: -60,
      scaleY: 0,
    })
    // point animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: entriesContainerRef.current,
        start: "top 85%",
        end: "top 40%",
        scrub: true,
        markers: showAnimationMarkers.edu,
        id: "edu-point"
      }
    });
    eduContainerRef.current.querySelectorAll('.edu-point').forEach(element => {
      tl2.from(element, {
        opacity: 0,
        scale: 0,
        y: "-5vh",
      });
    });
    // date animation
    scrambleRevealAnimation(
      entriesContainerRef,
      "top 95%",
      "top 40%",
      "edu-date",
      '.edu-date',
      'chars, words'
    )

    // text animation
    const media767 = window.screen.width <= 767;
    const startTrigger = "top " + (media767 ? "85%" : "95%");
    const endTrigger = "top " + (media767 ? "30%" : "40%")
    scrambleRevealAnimation(
      entriesContainerRef,
      startTrigger,
      endTrigger,
      "edu-text",
      '.edu-text-container',
      'words, lines'
    );

  }, [titleRef, eduContainerRef]);
  return (
    <section id="education" className="education-container" ref={eduContainerRef}>
      <h1 ref={titleRef}>Education</h1>
      <div className="education-entries" ref={entriesContainerRef}>
        <div className="edu-line" ref={lineRef}></div>
        {educationEntryList.map((education, index  ) => (
          <EducationEntry
            key={index}
            date={education.date}
            studyField={education.studyField}
            location={education.location}
            extra={education.extra}
          />
        ))}
      </div>
    </section>
  );
}
