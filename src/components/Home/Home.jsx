import './Home.css';
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import FireParticlesFramer from './FireParticlesFramer.jsx';
import FireParticles from './FireParticles.jsx';
import {useRef, useState, useEffect} from "react";
import Portrait from "./Portrait.jsx"
import AnimatedIcon from "./AnimatedIcon.jsx";
import  MoveIconSrc from "../../assets/icons/move.png";
import  ClickIconSrc from "../../assets/icons/click.png";
import ScrollDown from "./ScrollDown.jsx";

export default function Home() {
  const softTexts = ["creative", "proactive", "smart"]
  const [text, setText] = useState(softTexts[0]);
  const [count, setCount] = useState(1);
  function handleClick() {
    setCount(count + 1);
    setText(softTexts[count % softTexts.length]);
  }

  return (
    <div className="home-container">
      <div className="home-gradient"></div>
      <FireParticlesFramer n_particles={20} />
      <div className="home-sub-container">
        <span className="home-sub left">AI & ML Expert</span>
        <Portrait />
        <AnimatedIcon iconUrl={MoveIconSrc} extraStyle={{right: "2vw", backgroundColor: "var(--secondary-color-2)"}}/>
      </div>
      <span className="home-main">Oleksiy Kutscher</span>
      <div className="home-sub-container">
        <span className="home-sub highlight" onClick={handleClick}>{text}</span>
        <AnimatedIcon iconUrl={ClickIconSrc} extraStyle={{left: "29vw", backgroundColor: "var(--secondary-color-1)"}} />
        <span className="home-sub right">Software Developer</span>
      </div>
      <ScrollDown />
    </div>
  );
}
