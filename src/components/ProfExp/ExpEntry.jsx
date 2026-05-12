import './ExpEntry.css';
import TechElement from "../TechElement.jsx";

export default function ExpEntry(
  {location, date, title, description, techStack, imageData, rightAlign, extraClass}
) {
  return (
    <div className={extraClass ? "experience-card " + extraClass : "experience-card"}>
      <div className={rightAlign ? "exp-img-container right-align" :  "exp-img-container"}>
        {imageData.map((data, index) => {
          if (data.imgUrl.includes("screen")) {
            return (
              <a href="https://www.kunstverein-dali.de/" key={index} target="_blank" rel="noopener noreferrer"
                 className={data.extraClass ? data.extraClass + " dali-ref" : "dali-ref"}>
                <img key={index} alt={data.alt} src={data.imgUrl} />
              </a>
            )
          } else {
            return <img key={index} alt={data.alt} src={data.imgUrl} className={data.extraClass ? data.extraClass : ""}/>
          }
        })}
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
            <TechElement key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
