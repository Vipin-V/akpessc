import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const timelineData = [
  {
    year: "2020",
    event: "Minecraft Release",
    description:
      "Minecraft officially released to the public, becoming a global sensation.",
  },
  {
    year: "2021",
    event: "Minecraft Updates",
    description: "Several major updates introduced new features and content.",
  },
  {
    year: "2022",
    event: "Minecraft Community",
    description:
      "A thriving community of players and creators continues to grow.",
  },
];

const Timeline = () => {
  const lineControl = useAnimation();

  useEffect(() => {
    lineControl.start({ width: "100%" });
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="timeline-container flex flex-col items-start space-y-4 p-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item bg-green-500 p-4 rounded-lg max-w-md shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="year text-2xl font-semibold">{item.year}</div>
            <div className="event text-xl font-bold">{item.event}</div>
            <div className="description text-lg">{item.description}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.svg
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1"
        initial={{ width: 0 }}
        animate={lineControl}
      >
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="blue"
          strokeWidth="2"
        />
      </motion.svg>
    </div>
  );
};

export default Timeline;
