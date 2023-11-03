import ProblemCard from "./Problemcard";
import Image from "next/image";

const problemStatements = [
  {
    title: "Web Dev",
    description: "Build a web application with the latest technologies.",
    imageUrl: "/web1.jpeg",
    randomRotateX: 10,
    randomRotateY: 8,
  },
  {
    title: "IoT ",
    description: "Create innovative IoT solutions with hardware integration.",
    imageUrl: "/iot.jpeg",
    randomRotateX: -12,
    randomRotateY: -8,
  },
  {
    title: "AI&ML",
    description: "Develop machine learning models for real-world problems.",
    imageUrl: "/AI.jpeg",
    randomRotateX: 8,
    randomRotateY: 13,
  },
  {
    title: "Blockchain",
    description: "Explore the potential of blockchain technology.",
    imageUrl: "/crypto.jpeg",
    randomRotateX: -15,
    randomRotateY: -10,
  },
];

const Tracks = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center mt-10 gap-x-20"
      style={{ perspective: 2000 }}
    >
      {problemStatements.map((problem, index) => (
        <ProblemCard
          key={index}
          title={problem.title}
          description={problem.description}
          imageUrl={problem.imageUrl}
          randomRotateX={problem.randomRotateX}
          randomRotateY={problem.randomRotateY}
        />
      ))}
    </div>
  );
};

export default Tracks;
