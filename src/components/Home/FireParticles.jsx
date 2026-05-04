import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./FireParticles.css";

export default function FireParticles({n_particles}) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Lädt nur die nötigsten Funktionen für Performance
        }).then(() => setInit(true));
    }, []);

    const options = {
      fullScreen: { enable: false },
        particles: {
          number: {value: n_particles, density: {enable: true},},
          position: {
            x: 50, // Horizontale Mitte (wird durch move.random verteilt)
            y: 100 // Startet exakt bei 100% der Container-Höhe (also ganz unten)
          },
           // SHAPE: Hier definierst du mehrere Formen
          shape: {
            type: "circle", // Wir starten mit einem Kreis...
          },
          // ROLL & TILT machen aus dem Kreis eine Ellipse
          roll: {
            enable: true,
            speed: { min: 5, max: 15 },
            enlighten: { enable: true, value: 30 } // Simuliert Lichtreflexion auf der Glut
          },
          tilt: {
            enable: true,
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 10 }
          },
          // WICHTIG: Die Z-Achse verzerren, um die Ellipsenform zu erzwingen
          wobble: {
            enable: true,
            distance: 5,
            speed: { min: -5, max: 5 }
          },
          /*color: {value: ["#E0FCFF", "#22D3EE", "#0891B2"]},*/
           // FARB-ANIMATION: Wechselt zwischen Cyan und Weiß
          color: {
            value: ["#22D3EE", "#0891B2", "#064E5B"],
            animation: {
              h: {
                enable: true, // Enable hue animation
                speed: 20, // Speed of transition
                sync: false // Sync animation for all particles
              }
            }
          },
          // BOX-SHADOW (Glow) ANIMATION
          shadow: {
            enable: true,
            color: ["#22D3EE",  "#06B6D4", "#2d3739"],
            blur: 10,
            offset: { x: 0, y: 0 }
          },
          move: {
            enable: true,
            direction: "top",
            speed: {min: 1, max: 3},
            outModes: {
              default: "destroy", // Geht oben raus
              bottom: "none"  // Kann unten nicht raus
            }
          },
          opacity: {
            value: {min: 0, max: 0.7},
            animation: {
              enable: true,
              speed: 1,
              startValue: "min" // Blendet unten ein
            }
          },
          size: {
            value: {min: 1, max: 4},
            animation: {
              enable: true,
              speed: 2,
              startValue: "max",
              destroy: "min" // Wird beim "Sterben" kleiner
            }
          },
          life: {
            duration: {value: {min: 1, max: 3}} // Partikel sterben nach x Sekunden
          }
        }
    };

    return init ? <Particles id="tsparticles" options={options} /> : null;
};
