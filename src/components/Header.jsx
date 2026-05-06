import './Header.css';
import DownloadIcon from '../assets/icons/download.png';
import EmailIcon from '../assets/icons/email.png';
import LinkedInIcon from '../assets/icons/logos/linkedin.png';
import {navLinks} from '../../constants/index.js'

export default function Header() {
  return (
    <div className="header">
      <a href="/"><span className="header-name">Oleksiy Kutscher</span></a>
      <ul className="header-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} >{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="header-buttons">
        <a href="/CV_Kutscher.pdf" download={true}>
          <button className="header-button" >
            <div className="header-icon" style={{ '--icon-url': `url(${DownloadIcon})`}} />
          </button>
        </a>
        <a href="mailto:olekisy.kutscher@gmail.com" target={"_blank"}>
          <button className="header-button">
            <div className="header-icon" style={{ '--icon-url': `url(${EmailIcon})`}} />
          </button>
        </a>
        <a href="https://linkedin.com/in/oleksiy-kutscher-4303913a4" target="_blank" rel="noreferrer">
          <button className="header-button">
            <div className="header-icon" style={{ '--icon-url': `url(${LinkedInIcon})`}} />
          </button>
        </a>
      </div>
    </div>
  );
}
