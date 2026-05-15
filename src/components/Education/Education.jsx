import './Education.css';
import EducationEntry from "./EducationEntry.jsx";
import {educationEntryList, showAnimationMarkers} from "../../../constants/index.js";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {createTitleAnimation} from "../../animations/index.js";
import gsap from "gsap";

export default function Education({masterTl}) {
  const titleRef  = useRef(null);

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

  }, [titleRef]);
  return (
    <section id="education" className="education-container">
      <h1 ref={titleRef}>Education</h1>
      <div className="education-entries">
        <div className="edu-line"></div>
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
