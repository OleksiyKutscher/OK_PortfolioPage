import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';



export default function FramerSpotlight({techContainerRef}) {
  // 1. Motion Values für die Roh-Koordinaten
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring-Physik für die Trägheit (Smoothing) hinzufügen
  // stiffness: Härte der Feder, damping: Widerstand/Abbremsung
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Den radialen Verlauf als Template zusammenbauen
  const background = useMotionTemplate`radial-gradient(circle 200px at ${smoothX}px ${smoothY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const current = techContainerRef.current;
    current.addEventListener('mousemove', handleMouseMove);
    return () => current.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, techContainerRef]);
  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        "--x": useMotionTemplate`${smoothX}px`,
        "--y": useMotionTemplate`${smoothY}px`,
        background: "radial-gradient(circle 300px at var(--x) var(--y), rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)"
      }}
    />
  );
}
