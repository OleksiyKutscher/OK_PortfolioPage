import './Home.css';
import PortraitImg from '../assets/images/portrait.jpg';
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="home-container">
      <motion.div className="portrait-container" drag={true} dragSnapToOrigin={true} whileHover="animate">
        <img src={PortraitImg} alt="Portrait" draggable="false" />
        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" >
          <motion.rect
            x="1" y="1" width="98" height="98" rx="10"
            fill="transparent"
            stroke="#22D3EE" // Color
            strokeWidth="8"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"

            initial={{ pathLength: 0, pathOffset: 0 }}
            // Animations-Variante für Hover
            variants={{
              animate: {
                pathLength: [0, 0.3, 0], //
                pathSpacing: [4], // because width /height is 4 times smaller than original ,even though its relative... 2 start points if spacing smaller
                pathOffset: [0, 4], // has to do double the distance for same reason
                transition: {
                  duration: 3,         // Duration for one round
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              }
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
