import {useEffect, useRef, useState} from "react";
import "./Abilities.css";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import AbilityCard from "./AbilityCard.jsx";
import {abilities, isMobile, navLinks, showAnimationMarkers} from "../../../constants/index.js";

import {createTitleAnimation} from "../../animations/index.js";


export default function Abilities({language}) {
  const abilityContainerRef = useRef(null);
  const titleRef = useRef(null);
  const cardContainerRef = useRef(null);

  const [titleText, setTitleText] = useState(() => {
    const isMobile = window.innerWidth <= 520;
    if (language === "de") {
      return isMobile ? "Kern- kompetenzen" : navLinks[0].title[language];
    } else {
      return navLinks[0].title[language];
    }
  });

  useGSAP(() => {
    /*
      TITLE ANIMATION
     */
    createTitleAnimation(titleRef, showAnimationMarkers.abilities, true);

    /*
     CARD ANIMATIONS
     */
    // Alle Cards im Grid auswählen
    const cardElements = cardContainerRef.current.querySelectorAll('.card');

    cardElements.forEach((card, index) => {
      const computedStyle = window.getComputedStyle(cardContainerRef.current);

      // Gibt einen String wie "200px 200px 200px" oder "300px 300px" zurück
      const gridColumns = computedStyle.getPropertyValue('grid-template-columns');

      // Teilt den String auf und zählt die Elemente
      const columnCount = gridColumns.split(' ').length;

      let rotationIndex;
      if (columnCount === 3) {
        rotationIndex = (index % 3) - 1;
      } else if (columnCount === 2) {
        rotationIndex = (index % 2 === 0) ? -1 : 1;
      } else {
        rotationIndex = 0;
      }

      gsap.fromTo(card,
        {
          opacity: 0.7,
          rotationX: -45,     // Neigung nach hinten
          rotationY: rotationIndex * -15,      // Leichte Seitendrehung
          rotationZ: rotationIndex * -2,
          y: 100,             // Startposition weiter unten
          z: -100,            // Startposition in die Tiefe versetzt
        },
        {
          opacity: 1,
          rotationX: 0,       // Ziel-Rotation (flach)
          rotationY: 0,
          rotationZ: 0,
          y: 0,
          z: 0,
          ease: "linear",
          scrollTrigger: {
            trigger: card,     // Jede Card triggert sich selbst
            start: "top 80%",  // Animation startet, wenn die Card 85% im Viewport ist
            end: "top 60%",    // Animation endet, wenn sie weiter oben ist
            scrub: 1,          // 1 Sekunde sanftes Nachlaufen beim Scrollen
            markers: showAnimationMarkers.abilities,
            id: "card-rotation"
          }
        }
      );
    });
  }, [abilityContainerRef, titleRef,  cardContainerRef]);

  return (
    <section id='abilities' className="vh-section abilities-container" ref={abilityContainerRef}>
      <h1 ref={titleRef}>{titleText}</h1>
      <div className='card-container' ref={cardContainerRef}>
        {abilities.map((ability) => (
          <AbilityCard key={ability.id} iconUrl={ability.iconUrl} title={ability.title[language]} description={ability.description[language]} />
        ))}
      </div>
    </section>
  );
}
