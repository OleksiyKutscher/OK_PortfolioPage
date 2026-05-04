import {useEffect, useRef, useState} from "react";
import {Observer} from "gsap/Observer";
import gsap from "gsap";
import DownArrowSrc from "../../assets/icons/down_arrow.png";
import "./ScrollDown.css";

export default function ScrollDown() {
  const scrollDownRef = useRef(null);
  const loopRef = useRef(null);

  const [progress, setProgress] = useState(0); // 0 bis 1

  useEffect(() => {
    // 1. Loop-Animation erstellen und in Ref speichern
    loopRef.current = gsap.to(scrollDownRef.current, {
      scale: 1.1,
      opacity: 1, // Pulsiert innerhalb der vom Parent gegebenen Sichtbarkeit
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    // Observer erstellen
    const obs = Observer.create({
      target: window,         // Lauscht auf dem gesamten Fenster
      type: "wheel,touch",    // Mausrad und Touch-Gesten
      onChange: (self) => {
        // Berechne neuen Fortschritt basierend auf Scroll-Richtung
        setProgress((prev) => {
          return Math.min(Math.max(prev + self.deltaY * 0.001, 0), 5);
        });
      },
    });

    return () => {
      obs.kill();
      if (loopRef.current) loopRef.current.kill();
    };
  }, []);

    // Update der Opacity basierend auf dem State
  useEffect(() => {
    let opacityValue;
    if (progress >= 4) {
      opacityValue = 5 - progress;
    } else {
      opacityValue = 1;
    }

    gsap.to(scrollDownRef.current, {
      opacity: opacityValue,
      scale: 0.5 + opacityValue * 0.5,
      duration: 0.3,
      ease: "power1.out"
    });

    if (opacityValue <= 0.2) {
      loopRef.current.pause();
      //gsap.set(scrollDownRef.current, { opacity: 0, display: "none" });
    } else {
      loopRef.current.play();
    }

  }, [progress]);
  return (
    <div className="scroll-container" ref={scrollDownRef}>
      <div className="scroll-icon" style={{"--icon-url": `url(${DownArrowSrc})`}}></div>
      <span className="text">Scroll down</span>
    </div>
  );
}
