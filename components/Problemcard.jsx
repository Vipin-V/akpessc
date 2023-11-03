import { useMotionValue, useTransform, motion } from "framer-motion";

const ProblemCard = ({ title, description, imageUrl, randomRotateX, randomRotateY }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="relative w-[280px] h-[390px] bg-contain bg-no-repeat bg-center py-10 px-10"
        style={{
          backgroundImage: `url(/prize.png)`, // Change the background image
          opacity: 1,
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
        animate={{
          rotateX: randomRotateX,
          rotateY: randomRotateY,
          transition: {
            type: "spring",
            damping: 4,
            stiffness: 6,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <div>
          <motion.img
            animate={{
              rotateX: randomRotateX,
              rotateY: randomRotateY,
              transition: {
                type: "spring",
                damping: 4,
                stiffness: 6,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            src={imageUrl}
            alt="image"
            className="object-cover w-full h-1/2 border-4 border-black shadow-lg shadow-slate-800" // Change border color
          />
          <h1 className="text-3xl text-center font-bold text-black mt-2"> {/* Change text color and font weight */}
            {title}
          </h1>
          <div className="flex items-center mt-2 text-center gap-x-4 mx-auto">
            <p className="font-semibold text-gray-700 text-sm">{description}</p> {/* Change text color and font weight */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemCard;
