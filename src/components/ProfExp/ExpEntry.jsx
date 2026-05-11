import './ExpEntry.css';
import {techMap} from "../../../constants/index.js";

export default function ExpEntry(
  {location, date, title, description, techStack, imageData, rightAlign}
) {
  return (
    <div className="experience-card">
      <div className={rightAlign ? "exp-img-container right-align" :  "exp-img-container"}>
        {imageData.map((data, index) => (
          <img key={index} alt={data.alt} src={data.imgUrl} className={data.extraClass ? data.extraClass : ""}/>
        ))}
      </div>
      <div className="exp-text-container">
        <div className="exp-header">{location + " • " + date}</div>
        <h2 className="exp-title">{title}</h2>
        <ul className="exp-description">
          {description.map((sentence, index) => (
            <li key={index}>{sentence.split("##").map((subSentence, index) => {
              if (subSentence.includes('*~')) {
                return <span key={index}>{subSentence.replace('*~', '')}</span>;
              } else {
                return subSentence
              }
            })}</li>
          ))}
        </ul>
        <div className="exp-tech-container">
          {techStack.map((name, index) => (
            <div key={index} className="tech-element">
              <img src={techMap[name].iconUrl} alt={techMap[name].label + " icon"} />
              <span className="tech-label">{techMap[name].label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
