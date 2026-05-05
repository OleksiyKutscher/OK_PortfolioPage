import gsap from "gsap";

/* ScrollDown */
export function createScrollDownLoop(target) {
  return gsap.to(target, {
      scale: 1.1,
      opacity: 1, // Pulsiert innerhalb der vom Parent gegebenen Sichtbarkeit
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
}

/* AnimationIcon */
export function createLoopTimeline(target) {
  const loopTl = gsap.timeline({
      paused: true,
    })
  loopTl.to(target, {
    x: "+=10", // Kleine Bewegung nach rechts
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut",
    overwrite: 'auto',
  }, 0);

  // Für eine echte Acht würde man hier eine zweite Animation für die Y-Achse
  // mit doppelter Geschwindigkeit starten (wie in den vorigen Beispielen).
  loopTl.to(target, {
    y: "+=5",
    repeat: -1,
    yoyo: true,
    duration: 0.75,
    ease: "sine.inOut",
    overwrite: 'auto',
  }, 0);
  return loopTl
}

export function fadeScaleInVars() {
  return {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "power1.out",
  }
}

export function fadeScaleOutVars() {
  return {
    opacity: 0,
    scale: 0,
    duration: 0.3,
    ease: "power1.out",
  }
}
