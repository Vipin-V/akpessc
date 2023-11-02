import React from "react";
import { motion } from "framer-motion";

const Sponsors = () => {
    const sponsors = [
    {
        tier: "Platinum",
        name: "Sponsor 1",
        logoUrl: "/platinum-sponsor-logo1.png",
    },
    {
        tier: "Platinum",
        name: "Sponsor 2",
        logoUrl: "/platinum-sponsor-logo2.png",
    },
    {
        tier: "Platinum",
        name: "Sponsor 3",
        logoUrl: "/platinum-sponsor-logo3.png",
    },
    {
        tier: "Gold",
        name: "Sponsor 3",
        logoUrl: "/gold-sponsor-logo1.png",
    },
    {
        tier: "Gold",
        name: "Sponsor 4",
        logoUrl: "/gold-sponsor-logo2.png",
    },
    {
        tier: "Gold",
        name: "Sponsor 5",
        logoUrl: "/gold-sponsor-logo3.png",
    },
    {
        tier: "Silver",
        name: "Sponsor 5",
        logoUrl: "/silver-sponsor-logo1.png",
    },
    {
        tier: "Silver",
        name: "Sponsor 6",
        logoUrl: "/silver-sponsor-logo2.png",
    },
    {
        tier: "Silver",
        name: "Sponsor 7",
        logoUrl: "/silver-sponsor-logo3.png",
    },
];

    const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        },
    },
};

    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

    const platinumSponsors = sponsors.filter(
    (sponsor) => sponsor.tier === "Platinum"
);
const goldSponsors = sponsors.filter((sponsor) => sponsor.tier === "Gold");
const silverSponsors = sponsors.filter(
    (sponsor) => sponsor.tier === "Silver"
    );

    return (
    <div className="py-12 ">
        <div className="container mx-auto">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" text-lg text-center mb-8"
        >
            We are grateful to our sponsors for their generous support. Their
            contributions make this hackathon possible.
        </motion.p>
        <div className="mb-12 mx-4 px-auto">
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold text-center mb-4"
            >
            Platinum Sponsors
            </motion.h3>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
            {platinumSponsors.map((sponsor, index) => (
                <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105"
                >
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} Logo`}
                    className="w-48 h-48 object-contain mb-4"
                />
                <motion.h3
                    whileHover={{ color: "#805ad5" }}
                    className="text-2xl font-semibold text-center"
                >
                    {sponsor.name}
                </motion.h3>
                <motion.p
                    whileHover={{ color: "#805ad5" }}
                    className="text-gray-600 text-center"
                >
                    {sponsor.tier} Sponsor
                </motion.p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        <div className="mb-12 mx-4 px-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold text-center mb-4"
          >
            Gold Sponsors
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} Logo`}
                  className="w-48 h-48 object-contain mb-4"
                />
                <motion.h3
                  whileHover={{ color: "#805ad5" }}
                  className="text-2xl font-semibold text-center"
                >
                  {sponsor.name}
                </motion.h3>
                <motion.p
                  whileHover={{ color: "#805ad5" }}
                  className="text-gray-600 text-center"
                >
                  {sponsor.tier} Sponsor
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mb-12 mx-4 px-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold text-center mb-4"
          >
            Silver Sponsors
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {silverSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} Logo`}
                  className="w-48 h-48 object-contain mb-4"
                />
                <motion.h3
                  whileHover={{ color: "#805ad5" }}
                  className="text-2xl font-semibold text-center"
                >
                  {sponsor.name}
                </motion.h3>
                <motion.p
                  whileHover={{ color: "#805ad5" }}
                  className="text-gray-600 text-center"
                >
                  {sponsor.tier} Sponsor
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
