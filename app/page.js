
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../font/Minecrafter.Reg.ttf" });

export default function Home() {
  return (
    <>
      <div className="absolute h-screen">
        <div
          className="fixed  w-full h-full bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url(/bg.png)",
            opacity: 0.5,
          }}
        />
      </div>
      <div className="-z-10 flex my-auto  flex-col items-center">
        <Image src="/logo.png" width={300} height={300} alt="logo" />
        <div
          className="flex items-center mt-8 justify-center font-bold text-9xl text-[#8b06c5] text-center "
          style={myFont.style}
        >
          Hack-A-Sol
        </div>
        <p style={myFont.style} className="text-center mt-4 font-medium font-monospace text-slate-400 text-2xl ">coming soon</p>
        <div className="flex gap-x-28 mt-16">
          <button className="bg-blue-600 px-6 py-2 rounded">Register with Devfolio</button>
          <button className="bg-indigo-400 px-6 py-2 rounded">Join our Discord Server</button>
        </div>
      </div>
    </>
  );
}
