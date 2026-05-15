import './ExpEntry.css';
import TechElement from "../TechElement.jsx";
import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {showAnimationMarkers} from "../../../constants/index.js";
import {SplitText} from "gsap/all";

// 1. Helfer-Funktion zum Vorabladen und Dekodieren
const preloadImages = (imageUrls) => {
  const promises = imageUrls.map((data) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = data.imgUrl;
      img.onload = () => {
        // WICHTIG: Erzwingt die Dekodierung in der GPU vorab
        img.decode()
          .then(() => resolve(data.imgUrl))
          .catch(() => resolve(data.imgUrl)); // Fallback, falls decode fehlschlägt
      };
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
};


export default function ExpEntry(
  {location, date, title, description, techStack, imageData, rightAlign, extraClass}
) {
  const cardContainerRef = useRef(null);
  const imgContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionContainerRef = useRef(null);
  const techStackRef = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  /*useEffect(() => {
    preloadImages(imageData)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Fehler beim Laden der Bilder", err));
  }, [imageData]);*/


  useGSAP(() => {
    const isMobile = window.screen.width <= 520;
    // image animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        //pin: true,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        markers: showAnimationMarkers.exp,
        id: "img-visibility"
      }
    });
    tl.from(imgContainerRef.current.children, {
      opacity: 0,
      scale: isMobile ? 0.5 : 0.1,
      stagger: isMobile ? 0.5: 0,
      ease: "linear"
    })
    // text animation
    const headerSplit = new SplitText(headerRef.current, {type: 'chars, words'});
    const titleSplit = new SplitText(titleRef.current, {type: 'chars, words'});
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        markers: showAnimationMarkers.exp,
        id: "text-visibility"
      }
    });
    const textAnimation = {
      opacity: 0.3,
      scale: 0.9,
      //yPercent: -10,
      //color: "var(--primary-color-0)",
      ease: "expo.out",
      stagger: {
        each: 0.1,
        ease: "linear",
      },
    }
    tl2.from(headerSplit.words, {
      ...textAnimation,
    })
    tl2.from(titleSplit.words, {
      ...textAnimation,
    })
    const marker = Array.from(descriptionContainerRef.current.querySelectorAll('.marker'));
    const liElements =  Array.from(descriptionContainerRef.current.querySelectorAll('li'));
    const descElements = marker.flatMap((element, index) => [element, liElements[index]]);
    descElements.forEach((ele, index) => {
      if (index % 2 === 0) {
        tl2.from(ele, {
          yPercent: 10,
          opacity: 0,
          ease: "expo.out",
          //duration: 2,
          //delay: index,
        })
      } else {
        const split = new SplitText(ele, {type: 'words, lines'});
        tl2.from(split.words, {
          ...textAnimation,
        })
      }
    })
    //tl2.to({}, {duration: 0.5});
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: techStackRef.current,
        //pin: true,
        start: "top 85%",
        end: "top 75%",
        scrub: true,
        markers: showAnimationMarkers.exp,
        id: "tech-stack-visibility"
      }
    });
    techStackRef.current.querySelectorAll('.tech-element').forEach(ele => {
      tl3.from(ele, {
        ...textAnimation
      })
    })
    if (window.screen.width >= 767) {
        gsap.to({},{
        scrollTrigger: {
          trigger: cardContainerRef.current,
          //pin: true,
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: true,
          markers: showAnimationMarkers.exp,
          id: "card-pin"
        }
      });
    }

  }, [
    imagesLoaded,
    imgContainerRef, textContainerRef,
    headerRef, titleRef, descriptionContainerRef, techStackRef]);
  return (
    <div className={extraClass ? "experience-card " + extraClass : "experience-card"} ref={cardContainerRef}>
      <div className={rightAlign ? "exp-img-container right-align" :  "exp-img-container"} ref={imgContainerRef}>
        {imageData.map((data, index) => {
          if (data.imgUrl.includes("screen")) {
            return (
              <a href="https://www.kunstverein-dali.de/" key={index} target="_blank" rel="noopener noreferrer"
                 className={data.extraClass ? data.extraClass + " dali-ref" : "dali-ref"}>
                <div className="img-container">
                  <img alt={data.alt} src={data.imgUrl} rel="preload"/>
                </div>
              </a>
            )
          } else {
            return (
              <div key={index} className={data.extraClass ? "img-container " + data.extraClass : "img-container"}>
                <img  alt={data.alt} src={data.imgUrl}  rel="preload"/>
              </div>
            )
          }
        })}
      </div>
      <div className="exp-text-container" ref={textContainerRef}>
        <div className="exp-header" ref={headerRef}>{location + " • " + date}</div>
        <h2 className="exp-title" ref={titleRef}>{title}</h2>
        <ul className="exp-description" ref={descriptionContainerRef}>
          {description.map((sentence, index) => {
            return (
              <div className="line" key={index}>
                <span key={index} className="marker"></span>
                <li key={index + description.length}>{sentence.split("##").map((subSentence, index) => {
                  if (subSentence.includes('*~')) {
                    return <span key={index}>{subSentence.replace('*~', '')}</span>;
                  } else {
                    return subSentence
                  }
                })}</li>
              </div>
              )
        })}
        </ul>
        <div className="exp-tech-container" ref={techStackRef}>
          {techStack.map((name, index) => (
            <TechElement key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
