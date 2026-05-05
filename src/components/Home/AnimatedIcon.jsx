import {useContext, useEffect, useRef, useState} from "react";
import gsap from "gsap";

import {useGSAP} from "@gsap/react";
import {MasterTimelineContext} from "../../MasterTimelineContext.jsx";

//gsap.registerPlugin(Observer)

export default function AnimatedIcon({id, iconUrl, extraStyle, ref}) {

  /*useEffect(() => {
    // Observer erstellen
    const obs = Observer.create({
      target: window,         // Lauscht auf dem gesamten Fenster
      type: "wheel,touch",    // Mausrad und Touch-Gesten
      onChange: (self) => {
        // Berechne neuen Fortschritt basierend auf Scroll-Richtung
        setProgress((prev) => {
          const delta = self.deltaY * 0.001; // Geschwindigkeit anpassen
          return Math.min(Math.max(prev + delta, 0), 4);
        });
      },
    });
    // 2. Der Acht-Loop (Unabhängig vom Scrollen)
    // Wir starten diesen Loop separat, damit er endlos läuft
    gsap.to(iconRef.current, {
      x: "+=10", // Kleine Bewegung nach rechts
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });

    // Für eine echte Acht würde man hier eine zweite Animation für die Y-Achse
    // mit doppelter Geschwindigkeit starten (wie in den vorigen Beispielen).
    gsap.to(iconRef.current, {
      y: "+=5",
      repeat: -1,
      yoyo: true,
      duration: 0.75,
      ease: "sine.inOut"
    });

    return () => obs.kill(); // Cleanup
  }, []);

    // Update der Opacity basierend auf dem State
  useEffect(() => {
    let opacityValue;

    if (progress <= 1) {
      // Phase 1: 0 bis 1 (Einblenden)
      opacityValue = progress;
    } else if (progress <= 3) {
      opacityValue = 1;
    } else {
      // Phase 2: 1 bis 2 (Ausblenden) -> 1 - (progress - 1) = 2 - progress
      opacityValue = 4 - progress;
    }

    gsap.to(iconRef.current, {
      opacity: opacityValue,
      scale: 0.5 + opacityValue * 0.5,
      duration: 0.3,
      ease: "power1.out"
    });

  }, [progress]);*/
  return (

      <div
        id={id}
        ref={ref}
        style={{
          position: "absolute",
          width: "4vw",
          height: "4vw",
          WebkitMaskImage: `url(${iconUrl})`,
          maskImage: `url(${iconUrl})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          zIndex: "200",
          opacity: 0,
          scale: 0,
          ...extraStyle
        }}
      />

  );
}
