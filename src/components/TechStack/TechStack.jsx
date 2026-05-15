import './TechStack.css';
import WordCloudSrc from '../../assets/images/word_cloud.svg?react';
import FramerSpotlight from "./FramerSpotlight.jsx";
import WordCloud from "./WordCloud.jsx";
import {motion} from "framer-motion";
import {useRef} from "react";

export default function TechStack() {
  const techContainerRef = useRef(null);
  return (
    <section id="tech" className="vh-section tech-stack-container" ref={techContainerRef}>
      {/*<img src={WordCloudSrc} alt="word cloud" />*/}
      <WordCloud />
      <FramerSpotlight techContainerRef={techContainerRef}/>
    </section>
  );
}
