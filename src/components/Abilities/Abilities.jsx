import {useRef} from "react";
import "./Abilities.css";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import AbilityCard from "./AbilityCard.jsx";
import {abilities} from "../../../constants/index.js";


export default function Abilities({masterTl}) {
  const titleRef = useRef(null);

  /*useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#abilities',
        pin: true,
        start: "center center",
        end: "+=300",
        scrub: true,
        markers: true // 👈 Aktiviere Marker zum Debuggen!
      }
    });
    masterTl.current.add(tl);
  }, []);*/

  return (
    <section id='abilities' className="vh-section abilities-container">
      <h1 ref={titleRef}>Core Abilities</h1>
      <div className='card-container'>
        {abilities.map((ability) => (
          <AbilityCard key={ability.id} iconUrl={ability.iconUrl} title={ability.title} description={ability.description} />
        ))}
      </div>
    </section>
  );
}
