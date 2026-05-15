import gsap from "gsap";
import {SplitText} from "gsap/all";
import {showAnimationMarkers} from "../../constants/index.js";

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

export function createTitleAnimation(titleRef, showMarkers, showOutro) {
   if (showOutro) {
    // move title on scroll
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        //pin: true,
        start: 'top 90%',
        end: 'top 5%',
        scrub: true,
        markers: showMarkers,
        id: "title-movement"
      },
      y: "-10vh",
      ease: 'linear',
      delay: 0,
      //stagger: 0.04,
    },0)

    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        //pin: true,
        start: 'top 30%',
        end: 'bottom 20%',
        scrub: true,
        markers: showMarkers,
        id: 'title-opacity-end',
      },
      opacity: 0,
      ease: 'linear',
      delay: 0,
      //stagger: 0.04,
    },0)
  }

  /*tl.to(titleRef.current, {
    opacity: 0,
    ease: 'linear',
    delay: 10,
    //stagger: 0.04,
  },0)*/
  // Reveal title animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleRef.current,
      //pin: true,
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,
      markers: showMarkers,
      id: "title-visibility"
    }
  });
  const titleSplit = new SplitText(titleRef.current, {type: 'chars, words'});
  // Reveal letter (Opacity + Position)
  tl.from(titleSplit.chars, {
    opacity: 0,
    yPercent: 20,
    stagger: 0.05,
    ease: "expo.out",
  });

  // short pause inbetween animations
  tl.to({}, { duration: 0.5 });

  // light the letters in come back
  tl.to(titleSplit.chars, {
    color: "var(--primary-color-0)",
    stagger: {
      each: 0.05,
      yoyo: true,           // animates back to original color
      repeat: 1,            // once
    },
    ease: "sine.inOut",
  });
}
