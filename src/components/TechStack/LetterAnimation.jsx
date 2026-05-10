import { motion } from "framer-motion";

export default function LetterAnimation({ text, x, y, fontSize }) {
  // Animation für den Container (das Wort)
  const wordVariants = {
    initial: {},
    hover: {

      transition: {
        staggerChildren: 0.07, // Hier passiert die Magie
      },
    },
  };

  // Animation für jeden einzelnen Buchstaben
  const letterVariants = {
    initial: {
      fill: "#929093",
      /*baselineShift: "0%"*/

    },
    hover: {
      fill: "#22D3EE",

      /*baselineShift: ["-20%", "0%"], // Kleiner Hüpfer nach oben*/

      transition: { type: "tween", ease: ["easeIn", "easeOut"] }
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
