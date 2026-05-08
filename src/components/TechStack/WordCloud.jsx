import { motion } from "framer-motion";
import { cloudPaths } from "../../../constants/index.js";

const wordVariants = {
  initial: { fill: "#333", opacity: 0.4 },
  hover: {
    fill: "#00d4ff",
    opacity: 1,
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  }
};

export default function WordCloud() {
  return (
    <svg viewBox="0 0 1000 1000" style={{ width: '100%', height: 'auto' }}>
      {cloudPaths.map((pathData, index) => (
        <motion.path
          key={index}
          d={pathData}
          variants={wordVariants}
          initial="initial"
          whileHover="hover"
          // Wichtig für Performance bei vielen Elementen:
          style={{ originX: "50%", originY: "50%" }}
        />
      ))}
    </svg>
  );
};
