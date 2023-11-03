import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = ({ imageUrl, prize, post, randomRotateX, randomRotateY  }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="relative w-[280px] h-[390px] bg-contain bg-no-repeat bg-center py-10 px-10 "
        style={{
          backgroundImage: `url(/prize.png)`, // Use the imageUrl prop here
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
          rotateX: randomRotateX, // You can set the initial rotation values here
          rotateY: randomRotateY,
          transition: {
            type: "spring", // You can adjust the type of animation (e.g., "spring", "tween")
            damping: 4, // Adjust the damping for a slow and steady movement
            stiffness: 6, // Adjust the stiffness for a slow and steady movement
            repeat: Infinity, // Will repeat the animation infinitely
            repeatType: "reverse", // Will reverse the animation after each repeat
          },
        }}
      >
        <div className="">
          <motion.img
            animate={{
              rotateX: randomRotateX, // You can set the initial rotation values here
              rotateY: randomRotateY,
              transition: {
                type: "spring", // You can adjust the type of animation (e.g., "spring", "tween")
                damping: 4, // Adjust the damping for a slow and steady movement
                stiffness: 6, // Adjust the stiffness for a slow and steady movement
                repeat: Infinity, // Will repeat the animation infinitely
                repeatType: "reverse", // Will reverse the animation after each repeat
              },
            }}
            src={imageUrl} // Use the imageUrl prop here
            alt="image"
            className="object-cover w-full h-1/2 border-4 border-black shadow-lg shadow-slate-800"
          />
          <h1 className="text-3xl text-center font-extrabold text-black mt-2">
            {prize} {/* Use the prize prop here */}
          </h1>
          <div className="flex items-center mt-2 text-center gap-x-4 mx-auto">
            <p className="font-bold text-violet-900/80 text-lg">{post} {/* Use the post prop here */}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
