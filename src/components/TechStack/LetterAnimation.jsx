import { motion } from "framer-motion";

export default function LetterAnimation({ text, x, y, fontSize }) {
  // Animation für den Container (das Wort)
  const wordVariants = {
    initial: {},
    hover: {

      transition: {
        staggerChildren: 0.1, // Hier passiert die Magie
      },
    },
  };

  // Animation für jeden einzelnen Buchstaben
  const letterVariants = {
    initial: {
      fill: "#929093",
      y: 0,
      opacity: 1,
      /*baselineShift: "0%"*/

    },
    hover: {
      fill: ["#929093", "#22D3EE", "#929093"],
      y: [-10, 0],
      opacity: [1, 0.5, 1],
      /*baselineShift: ["-20%", "0%"], // Kleiner Hüpfer nach oben*/

      transition: { type: "spring", stiffness: 300, damping: 100}
    },

  };

  return (
    <motion.text
      x={x}
      y={y}
      variants={wordVariants}
      initial="initial"
      whileHover="hover"
      style={{ cursor: "pointer", fontSize: fontSize + "px", fontWeight: "bold"}}
    >
      {text.split("").map((char, index) => (
        <motion.tspan key={index} variants={letterVariants}>
          {char}
        </motion.tspan>
      ))}
    </motion.text>
  );
};
