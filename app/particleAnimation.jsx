import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ParticleAnimation = () => {
  const controls = useAnimation();
  const animateParticles = async () => {
    while (true) {
      await controls.start({ opacity: 1, x: 0, y: 0 });
      await controls.start({
        opacity: 0,
        x: getRandomInt(-50, 50),
        y: getRandomInt(-50, 50),
      });
    }
  };
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    animateParticles();
  }, []);
  return (
    <div className="h-screen w-screen absolute top-0 left-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={controls}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-2 bg-violet-500 rounded-full absolute"
        ></motion.div>
      ))}
    </div>
  );
};

export default ParticleAnimation;
