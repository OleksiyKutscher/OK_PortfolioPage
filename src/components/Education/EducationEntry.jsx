import './EducationEntry.css';

export default function EducationEntry({date, studyField, location, extra}) {
  return (
    <div className="education-entry">
      <div className="edu-date-container">
        <div className="edu-point"/>
        <div className="edu-date">{date}</div>
      </div>
      <div className="edu-text-container">
        <div className="edu-study-field">{studyField}</div>
        <div className="edu-location">{location}</div>
        <div className="edu-extra">{extra}</div>
      </div>
    </div>
  );
}
