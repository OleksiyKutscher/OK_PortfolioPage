import './TechStack.css';
import WordCloudSrc from '../../assets/images/word_cloud.svg?react';
import FramerSpotlight from "./FramerSpotlight.jsx";
import WordCloud from "./WordCloud.jsx";
import {motion} from "framer-motion";

export default function TechStack({masterTl}) {

  return (
    <section id="tech" className="vh-section tech-stack-container">
      {/*<img src={WordCloudSrc} alt="word cloud" />*/}
      <WordCloud />
      <FramerSpotlight />
    </section>
  );
}
