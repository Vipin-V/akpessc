"use client";
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../font/Minecrafter.Alt.ttf" });
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/card";
import ScrollToTopButton from "@/components/top";
import Timeline from "@/components/timeline";
import AboutUs from "@/components/about";
import ContactUs from "@/components/contact";
import Tracks from "@/components/Tracks";
import Link from "next/link";

export default function Home() {
  const pixelatedAndNeonText = {
    initial: {
      textShadow:
        "10px 10px 0 rgba(255, 255, 255, 0.3), 20px 20px 0 rgba(255, 255, 255, 0.3), 3px 3px 0 rgba(255, 255, 255, 0.3), 4px 4px 0 rgba(255, 255, 255, 0.3), 5px 5px 0 rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 0, 228, 0.5), 0 0 20px rgba(255, 0, 228, 0.5), 0 0 30px rgba(255, 0, 228, 0.5), 0 0 40px rgba(255, 0, 228, 0.5), 0 0 70px rgba(255, 0, 228, 0.5), 0 0 80px rgba(255, 0, 228, 0.5), 0 0 100px rgba(255, 0, 228, 0.5), 0 0 150px rgba(255, 0, 228, 0.5)",
      transform: "translateZ(0)",
    },
    animate: {
      textShadow:
        "1px 1px 0 rgba(255, 255, 255, 0.4), 2px 2px 0 rgba(255, 255, 255, 0.4), 3px 3px 0 rgba(255, 255, 255, 0.4), 4px 4px 0 rgba(255, 255, 255, 0.4), 5px 5px 0 rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 0, 228, 0.6), 0 0 20px rgba(255, 0, 228, 0.6), 0 0 30px rgba(255, 0, 228, 0.6), 0 0 40px rgba(255, 0, 228, 0.6), 0 0 70px rgba(255, 0, 228, 0.6), 0 0 80px rgba(255, 0, 228, 0.6), 0 0 100px rgba(255, 0, 228, 0.6), 0 0 150px rgba(255, 0, 228, 0.6)",
      transform: "translateZ(5px)",
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex items-center justify-between px-8 md:px-20 py-1">
        <div className="flex items-center gap-2">
          <a href="#home">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              className="object-cover"
              alt="logo"
            />
          </a>
          <div class="border-l-2 border-white h-10" />
          <a href="https://sac.iiitnr.ac.in/">
            <Image
              src="/sac.png"
              width={50}
              height={50}
              className="object-cover"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex md:hidden">
          <a href="mailto:hackasol@iiitnr.edu.in" target="_blank">
            <button className="bg-violet-700 text-white gap-x-2 px-4 py-2">
              Contact Us
            </button>
          </a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-lg gap-x-10 text-white">
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#about-us">About Us</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#schedule">Schedule</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#prizes">Prizes</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#sponsors">Tracks & Sponsors</a>
            </li>
            <li className="cursor-pointer  hover:text-violet-600 hover:-rotate-3 hover:scale-[1.1] transition">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="fixed bottom-1 right-1 z-50 h-100 w-100">
        <ScrollToTopButton />
      </div>
      <div
        id="home"
        className=" select-none w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed px-8 md:px-20"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="h-screen w-full flex flex-col items-center justify-center z-10 ">
          <div className="mb-10">
            <AnimatePresence>
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <motion.h1
                  style={myFont.style}
                  className=" mt-20 text-5xl md:text-9xl font-semibold text-center text-purple-700/90  "
                  variants={pixelatedAndNeonText}
                  initial="initial"
                  animate="animate"
                >
                  HACK-A-SOL 3.0
                </motion.h1>
                <motion.p
                  className="text-center text-white text-lg mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  variants={pixelatedAndNeonText}
                >
                  6th - 7th April • Naya Raipur, India
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex gap-x-20 mt-4">
            <button className="bg-indigo-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/discord.svg"
                width={25}
                height={25}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-x-1 transition"
                alt="discord"
              />
              <p className="text-lg text-white font-medium">Join Our Discord</p>
            </button>
            <Link
              href="https://unstop.com/o/Ux3yg0k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
                <Image
                  src="/un.svg"
                  width={25}
                  height={25}
                  className="object-cover group-hover:-rotate-12 group-hover:scale-125  group-hover:-translate-x-1 transition"
                  alt="devfolio"
                />
                <p className="text-lg text-white font-medium">
                  Apply with Unstop
                </p>
              </button>
            </Link>
          </div>
          <div className="flex md:hidden gap-x-10 mt-6">
            <button className="bg-indigo-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/discord.svg"
                width={25}
                height={25}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-x-1 transition"
                alt="discord"
              />
              <p className="text-lg text-white font-medium">Discord</p>
            </button>
            <Link
              href="https://unstop.com/o/Ux3yg0k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
                <Image
                  src="/un.svg"
                  width={25}
                  height={25}
                  className="object-cover group-hover:-rotate-12 group-hover:scale-125  group-hover:-translate-x-1 transition"
                  alt="devfolio"
                />
                <p className="text-lg text-white font-medium">Unstop</p>
              </button>
            </Link>
          </div>
          <div className="pt-20 text-xl md:text-3xl text-center font-bold text-slate-200">
            Registration : <br className="block md:hidden" /> 2nd March - 29th
            March.
          </div>
        </div>
      </div>
      <div
        id="about-us"
        className="w-full flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="select-none py-20 px-8 md:px-20">
          <h1
            style={myFont.style}
            className="text-center text-5xl mt-6 mb-4 text-purple-700/90"
          >
            About Us
          </h1>
          <AboutUs />
        </div>
      </div>

      <div
        id="schedule"
        className="w-full flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="select-none py-20 px-8 md:px-20">
          <h1
            style={myFont.style}
            className="text-center text-5xl mt-10 mb-4 text-purple-700/90"
          >
            Timeline
          </h1>
          <Timeline />
        </div>
      </div>

      <div
        id="prizes"
        className="w-full flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed py-20 px-8 md:px-20"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="select-none">
          <h1
            style={myFont.style}
            className="text-center text-5xl mt-8  text-purple-700/90"
          >
            Prizes Worth 1.5 Lakhs{" "}
          </h1>
          <div
            className="flex flex-col md:flex-row items-center mt-10 gap-x-20"
            style={{ perspective: 2000 }}
          >
            <Card
              imageUrl="/gm.png"
              prize="1st Prize"
              post="₹XXXXX Cash Prize and Goodies"
              randomRotateY={10}
              randomRotateX={8}
            />
            <Card
              imageUrl="/silver.png"
              prize="2nd Prize"
              post="₹XXXXX Cash and Goodies"
              randomRotateY={-12}
              randomRotateX={-8}
            />
            <Card
              imageUrl="/bz.png"
              prize="3rd Prize"
              post="₹XXXXX Cash and Goodies"
              randomRotateY={8}
              randomRotateX={13}
            />
            <Card
              imageUrl="/tro.jpg"
              prize="Track Prize"
              post="₹XXXXX Cash and Goodies"
              randomRotateY={8}
              randomRotateX={13}
            />
          </div>
        </div>
      </div>
      <div
        id="sponsors"
        className="w-full py-28 flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed px-8 md:px-20"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="select-none">
          <h1
            style={myFont.style}
            className="text-center text-5xl mt-6 mb-4 text-purple-700/90"
          >
            Tracks and Sponsors
          </h1>
          <div className="my-10 mt-10 px-3">
            <Tracks />
          </div>

          {/* <Sponsors/> */}
        </div>
      </div>
      <div
        id="contact-us"
        className="w-full flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 1,
        }}
      >
        <div className="select-none py-20 px-8 md:px-20">
          <h1
            style={myFont.style}
            className="text-center text-5xl mt-10 mb-4 text-purple-700/90"
          >
            Contact Us
          </h1>
          <ContactUs />
        </div>
      </div>
    </>
  );
}
