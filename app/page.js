import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../font/Minecrafter.Reg.ttf" });

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex  px-10 py-1">
        <div>
          <Image src="/logo.png" width={70} height={70} className="object-cover" />
        </div>
      </nav>
      <div
        className="w-full min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/bg.png)",
          opacity: 0.5,
        }}
      >
        <div className="h-screen w-full  border-2 flex items-center justify-center ">
          <h1
            style={myFont.style}
            className="text-5xl md:text-9xl  text-purple-800/90"
          >
            HACK-A-SOL
          </h1>
        </div>
      </div>
      <div className="h-screen w-full border-2 bg-fixed"style={{
          backgroundImage: "url(/bg2.png)",
          opacity: 0.5,
        }}>

      </div>
      <div className="h-screen w-full border-2 bg-fixed" style={{
          backgroundImage: "url(/bg3.png)",
          opacity: 0.5,
        }}>

      </div>
    </>
  );
}
