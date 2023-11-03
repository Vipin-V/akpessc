import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Devfolio", logoUrl: "/devfolio.png", link: "https://devfolio.co" },
  { name: "Polygon", logoUrl: "/polygonsvg.svg", link: "https://polygon.technology" },
  { name: "Sponsor 3", logoUrl: "/replit.svg", link: "https://www.replit.com" },
];

const Sponsors = () => {
  return (
    <>
    <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-lg text-gray-200 mb-8"
        >
          We are grateful to our sponsors for their generous support. Their
          contributions make this hackathon possible.
        </motion.p>
    <Marquee direction="left" speed={60} gradientWidth={200} autoFill={false}
    className=" mt-6 p-4 rounded-md shadow-md">

      {sponsors.map((sponsor, index) => (
        <div key={index} className="mr-16 w-90 h-90 flex items-center justify-center hover:shadow-xl hover:scale-105 transform transition-transform">
          <Link passHref href={sponsor.link}>
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="w-82 h-82 object-contain "
                width={200}
                height={200}
              />
          </Link>
        </div>
      ))}
    </Marquee>
    </>
  );
};
export default Sponsors;
