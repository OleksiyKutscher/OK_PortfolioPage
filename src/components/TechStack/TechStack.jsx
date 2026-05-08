import './TechStack.css';
import WordCloudSrc from '../../assets/images/word_cloud.svg?react';
import FramerSpotlight from "./FramerSpotlight.jsx";
import WordCloud from "./WordCloud.jsx";
import {motion} from "framer-motion";

const RevealPath = ({ d }) => {
  return (
    <motion.path
      d={d}
      initial={{ opacity: 0.3 }}
      whileHover={{
        opacity: 1,
        // Wir nutzen einen CSS-Filter oder ein Overlay,
        // um ein Fortschreiten zu simulieren
        fill: ["#444", "#00d4ff", "#ffffff"],
      }}
      transition={{ duration: 0.4 }}
    />
  );
};

export default function TechStack({masterTl}) {
  return (
    <section id="tech" className="tech-stack-container">
      {/*<img src={WordCloudSrc} alt="word cloud" />*/}
      <WordCloud />
      <FramerSpotlight />
    </section>
  );
}
