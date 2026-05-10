import './ProfExp.css';
import {useRef} from "react";
import ExpEntry from "./ExpEntry";
import {expEntryList} from "../../../constants/index.js";

export default function ProfExp({masterTl}) {
  const titleRef = useRef(null);

  return (
    <section id="prof-exp" className="prof-exp-container">
      <h1 ref={titleRef}>Professional Experience</h1>
      {expEntryList.map((entry, index) => (
        <ExpEntry
          key={index}
          location={entry.location}
          date={entry.date}
          title={entry.title}
          description={entry.description}
          techStack={entry.techStack}
          imageData={entry.imageData}
          rightAlign={entry.rightAlign}
        />
      ))}
    </section>
  );
}
