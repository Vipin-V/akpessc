import React from "react";
import { motion, useAnimation } from "framer-motion";
import Block from "./Block";

const BlockBreakAnimation = ({ onAnimationComplete }) => {
  const controls = useAnimation();

  const animateBlockBreak = async () => {
    await controls.start({
      scale: 1.4,
      rotate: 45,
      transition: { duration: 0.4 },
    });
    await controls.start({
      scale: 2,
      rotate: 90,
      transition: { duration: 0.4 },
    });
    onAnimationComplete();
  };

  React.useEffect(() => {
    animateBlockBreak();
  }, [animateBlockBreak]);

  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Block />
    </motion.div>
  );
};

export default BlockBreakAnimation;
