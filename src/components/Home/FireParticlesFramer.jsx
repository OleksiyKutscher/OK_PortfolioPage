import { motion } from "framer-motion";
import './FireParticlesFramer.css';

export default function FireParticlesFramer({n_particles}) {
  // Array mit 20 Partikeln erstellen
  const particles = Array.from({ length: n_particles });

  return (
    <div className="fire-container">
      <div className="fire">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="fire-particle"
            style={{
              left: `${Math.random() * 100}%`, // Zufällige horizontale Position
              width: Math.random() * 6 + 2 + 'px', // Zufällige Größe
              height: Math.random() * 6 + 2 + 'px',
              backgroundColor: '#22D3EE', // Glut-Orange
              boxShadow: "0 0 10px #22D3EE",
            }}
            animate={{
              y: [0, -250], // Steigt nach oben
              x: [0, (Math.random() - 0.5) * 50], // Driftet leicht zur Seite
              opacity: [0, 1, 0.8, 0], // Taucht auf und verschwindet oben
              scale: [1, 1.5, 0.2], // Wird erst dicker, dann winzig (verbrennt)
              backgroundColor: ["#22D3EE", "#0891B2", "#064E5B"], // Verfärbt sich von Gelb zu Dunkelrot
              boxShadow: [
                "0 0 10px #22D3EE", // Leuchten am Anfang
                "0 0 20px #06B6D4", // Stärkeres Leuchten in der Mitte
                "0 0 0px rgba(0,0,0,0)" // Kein Leuchten am Ende
              ]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};
