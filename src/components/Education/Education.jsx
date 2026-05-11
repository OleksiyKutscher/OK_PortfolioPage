import './Education.css';
import EducationEntry from "./EducationEntry.jsx";
import {educationEntryList} from "../../../constants/index.js";

export default function Education({masterTl}) {
  return (
    <section id="education" className="education-container">
      <h1>Education</h1>
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
