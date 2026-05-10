import './ExpEntry.css';
import {techMap} from "../../../constants/index.js";

export default function ExpEntry(
  {location, date, title, description, techStack, imageData, rightAlign}
) {
  return (
    <div className={rightAlign ? "experience-card right-align" :  "experience-card"}>
      <div className="exp-img-container">
        {imageData.map((data, index) => (
          <img key={index} alt={data.alt} src={data.imgUrl} className={data.extraClass ? data.extraClass : ""}/>
        ))}
      </div>
      <div className="exp-text-container">
        <div className="exp-header">{location + " • " + date}</div>
        <h2 className="exp-title">{title}</h2>
        <ul className="exp-description">
          {description.map((sentence, index) => (
            <li key={index}>{sentence}</li>
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
