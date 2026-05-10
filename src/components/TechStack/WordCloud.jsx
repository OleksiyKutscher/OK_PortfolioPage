import { motion } from "framer-motion";
import { wordCloudData } from "../../../constants/index.js";
import LetterAnimation from "./LetterAnimation.jsx";


export default function WordCloud() {
  return (
    <svg width="877" height="553" viewBox="0 0 877 553" style={{ width: '100%', height: 'auto', fontFamily: "var(--red-hat-font)", fill: "#929093"}}>
      {wordCloudData.map((data, index) => (
        <LetterAnimation key={index} text={data.text} x={data.x} y={data.y} fontSize={data.fontSize} />
      ))}
    </svg>
  );
};
