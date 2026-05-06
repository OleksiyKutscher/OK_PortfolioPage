import {useRef} from "react";
import "./Abilities.css";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import AbilityCard from "./AbilityCard.jsx";
import {abilities} from "../../../constants/index.js";


export default function Abilities() {
  const titleRef = useRef(null);

  useGSAP(() => {

  }, []);

  return (
    <section id='Abilities' className="abilities-container">
      <h1 ref={titleRef}>Core Abilities</h1>
      <div className='card-container'>
        {abilities.map((ability) => (
          <AbilityCard key={ability.id} iconUrl={ability.iconUrl} title={ability.title} description={ability.description} />
        ))}
      </div>
    </section>
  );
}
