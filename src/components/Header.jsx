import './Header.css';
import {navLinks, headerButtonData} from '../../constants/index.js'

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
        {headerButtonData.map((data, index) => (
          <a key={index} href={data.iconUrl.includes('mail') ? `mailto:${data.userName}@${data.domainName}` : data.href} target={"_blank"} rel="noreferrer">
            <button className="header-button">
              <div className="header-icon" style={{ '--icon-url': `url(${data.iconUrl})`}} />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
