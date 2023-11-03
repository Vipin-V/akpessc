import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "../app/effects.css"
const AboutUs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // Slower animation
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 }, // Smoother entrance animation
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="  py-12">
      <div className="mx-auto p-4 md:p-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center justify-center"
        >
          <motion.div variants={item} className="md:w-1/2 text-center relative floating-photo-container">
          <div className="border-3d rounded-lg p-4 shadow-md">

            <Image
              src="/IIIT_-1.jpg" 
              alt="Institute"
              className="rounded-md shadow-lg mb-6 md:mb-0"
              width={600}
              height={400}
            />
            </div>
          </motion.div>
          <motion.div variants={item} className="md:w-1/2 md:ml-6">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png" 
                alt="Hackathon Logo"
                className="w-14 h-14 mr-4 rounded-full cursor-pointer"
                width={80}
                height={80}
              />
              <h2 className="text-xl md:text-4xl font-bold text-purple-700 cursor-pointer">
                About the Hackathon
              </h2>
            </div>
            <p className=" text-white text-left mb-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              iaculis lobortis quam, nec elementum ipsum convallis ac.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/college_logo.png" 
                alt="IIIT NR Logo"
                className="w-12 h-12 mr-4 rounded-full cursor-pointer"
                width={60}
                height={60}
              />
              <h2 className="text-xl md:text-4xl font-bold text-purple-700 cursor-pointer">
                About IIIT Naya Raipur
              </h2>
            </div>
            <p className=" mb-6 font-medium text-white">
              IIIT NR is dedicated to promoting technology and innovation. We
              take pride in organizing events like this hackathon to foster
              creativity and learning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
