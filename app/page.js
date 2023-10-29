import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../font/Minecrafter.Alt.ttf" });

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex items-center justify-between  px-20 py-1">
        <div>
          <Image
            src="/logo.png"
            width={70}
            height={70}
            className="object-cover"
          />
        </div>
        <div className="">
          <ul className="flex text-lg gap-x-10">
            <li className="hover:-rotate-3 hover:scale-[1.1] transition">
              About Us
            </li>
            <li className="hover:-rotate-3 hover:scale-[1.1] transition">
              Schedule
            </li>
            <li className="hover:-rotate-3 hover:scale-[1.1] transition">
              Prizes
            </li>
            <li className="hover:-rotate-3 hover:scale-[1.1] transition">
              Sponsors
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg4.png)",
          opacity: 0.9,
        }}
      >
        <div className="h-screen w-full flex flex-col items-center justify-center z-10 ">
          <div className="mb-10">
            <h1
              style={myFont.style}
              className="text-5xl md:text-9xl font-semibold  text-purple-700/90"
            >
              HACK-A-SOL
            </h1>
            <p className="text-center text-lg mt-4">20th - 21st Nov, 2023 • Naya Raipur, India</p>
          </div>

          <div className="flex gap-x-20 mt-10">
            <button className="bg-indigo-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/discord.svg"
                width={25}
                height={25}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Join Our Discord</p>
            </button>
            <button className="bg-blue-500 flex items-center gap-x-2 px-4 py-2 hover:scale-105 group transition">
              <Image
                src="/dev.svg"
                width={20}
                height={20}
                className="object-cover group-hover:-rotate-12 group-hover:scale-125  group-hover:-translate-x-1 transition"
              />
              <p className="text-lg font-semibold">Apply with Devfolio</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg3.png)",
          opacity: 1,
        }}
      ></div>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg2.png)",
          opacity: 1,
        }}
      ></div>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg.png)",
          opacity: 1,
        }}
      ></div>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg5.png)",
          opacity: 1,
        }}
      ></div>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg6.png)",
          opacity: 1,
        }}
      ></div>
    </>
  );
}
