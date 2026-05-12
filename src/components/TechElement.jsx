import './TechElement.css';
import {techMap} from "../../constants/index.js";

export default function TechElement({name}) {
  return (
    <div className="tech-element">
      <img src={techMap[name].iconUrl} alt={techMap[name].label + " icon"} />
      <span className="tech-label">{techMap[name].label}</span>
    </div>
  );
}
