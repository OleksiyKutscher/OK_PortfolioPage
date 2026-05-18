import './ProfExp.css';
import {useRef} from "react";
import ExpEntry from "./ExpEntry";
import {expEntryList, navLinks, showAnimationMarkers} from "../../../constants/index.js";
import {useGSAP} from "@gsap/react";
import {createTitleAnimation} from "../../animations/index.js";

export default function ProfExp({language}) {
  const titleRef = useRef(null);

  useGSAP(() => {
    createTitleAnimation(titleRef, showAnimationMarkers.exp, true);
  }, [titleRef]);

  return (
    <section id="prof-exp" className="prof-exp-container">
      <h1 ref={titleRef}>{navLinks[1].title[language]}</h1>
      {expEntryList.map((entry, index) => (
        <ExpEntry
          key={index}
          location={entry.location[language]}
          date={entry.date}
          title={entry.title[language]}
          description={entry.description[language]}
          techStack={entry.techStack}
          imageData={entry.imageData}
          rightAlign={entry.rightAlign}
          extraClass={entry.extraClass}
        />
      ))}
      {/*<iframe src="https://www.kunstverein-dali.de/" />*/}
    </section>
  );
}
