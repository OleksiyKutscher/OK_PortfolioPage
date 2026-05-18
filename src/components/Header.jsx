import './Header.css';
import {navLinks, headerButtonData} from '../../constants/index.js'
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";


gsap.registerPlugin(SplitText)

export default function Header({language, updateLanguage}) {
  const homeLinkContainerRef = useRef(null);
  const homeLinkOriginalRef = useRef(null);
  const homeLinkCloneRef = useRef(null);
  const headerLinkContainerRef = useRef(null);

  const [count, setCount] = useState(1);
  const flagRef = useRef(false);
  const handleLanguageClick = () => {
    updateLanguage();
    /*setCount(count + 1);
    if (count % 2 === 0) {
      //flagRef.current.style.setProperty('--icon-url', `url(${GermanFlagIcon})`);
      updateLanguage("de");
    } else {
      //flagRef.current.style.setProperty('--icon-url', `url(${GbFlagIcon})`);
      updateLanguage("en");
    }
    //window.location.reload();*/
  }

  useGSAP(() => {
    /*
    TITLE 3D ANIMATION
     */
    const homeLinkOriginalSplit = new SplitText(homeLinkOriginalRef.current, {type: 'chars'});
    const homeLinkCloneSplit = new SplitText(homeLinkCloneRef.current, {type: 'chars'});

    const tl = gsap.timeline({paused:true});

		//global tween settings
		let duration = 0.4
		let stagger = {each:0.02, ease:"power2", from:"start"}

		//initial position of clones
		gsap.set(homeLinkCloneSplit.chars, {
      rotationX: -90,
      yPercent: 50,
      opacity: 0,
    })
		//build animation
		tl.to(homeLinkOriginalSplit.chars, {
      duration:duration,
      yPercent: -50,
      rotationX: 90,
      stagger:stagger
    })
		tl.to(homeLinkOriginalSplit.chars, {
      duration: 1,
      opacity: 0,
      stagger: stagger,
      ease:"power4.out"
    }, 0)
		//reveal the clones
		tl.to(homeLinkCloneSplit.chars, {
      duration: 0.05,
      opacity: 1,
      stagger: stagger
    }, 0.001)
    //animate the clones
		tl.to(homeLinkCloneSplit.chars, {
      duration: duration,
      yPercent: 0,
      rotationX: 0,
      stagger: stagger
    }, 0)

    // Normal Javascript, add event listener to a specific element
    homeLinkContainerRef.current.addEventListener('mouseenter', () => {
      tl.play(); // play the timeline
    });
    homeLinkContainerRef.current.addEventListener('mouseleave', () => {
      tl.reverse(); // reverse the timeline
    });
    /*
      HEADER LINKS LANDO NORRIS TEXT ANIMATION
     */
    headerLinkContainerRef.current.querySelectorAll('li').forEach((link) => {
      const split = new SplitText(link, {type: 'chars, words'});
      const tl = gsap.timeline({paused:true});
      tl.to(split.chars, {
        y: "-1.5em",
        stagger: 0.01,
        ease: "power1.inOut",
      });
      link.addEventListener('mouseenter', () => {
      tl.play(); // play the timeline
      });
      link.addEventListener('mouseleave', () => {
        tl.reverse(); // reverse the timeline
      });
    })
  }, [homeLinkContainerRef, homeLinkOriginalRef, homeLinkCloneRef, headerLinkContainerRef]);
  return (
    <div className="header">
      <a href="/" className="header-name-container" ref={homeLinkContainerRef}>
        <span className="header-name" ref={homeLinkOriginalRef}>Oleksiy Kutscher</span>
        <span className="header-name header-name-2" ref={homeLinkCloneRef}>Oleksiy Kutscher</span>
      </a>
      <ul className="header-links" ref={headerLinkContainerRef}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} >{link.title[language]}</a>
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
        <button className="header-button" onClick={handleLanguageClick}>
           <span className="header-text">{language === 'de' ? 'DE' : 'EN'}</span>
        </button>
      </div>
    </div>
  );
}
