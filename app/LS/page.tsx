"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { cn } from "@/lib/utils";
import { Tourney } from "next/font/google";
import Link from "next/link";
import { Nav } from "../ht/page";

export default function LiveStream() {
  return (
    <div className="">
      <Nav />
      <BackgroundBeams />
      <div className="mt-32">
        <Name />
        <Stream />
      </div>
    </div>
  );
}

const Name = () => {
  return (
    <BoldCopy
      text="Live Stream"
      backgroundTextClassName="text-yellow-500 "
      textClassName="text-blue-100"
    />
  );
};

// export const Nav = () => {
//   return (
//     <div className="flex flex-row justify-between items-center p-4 text-white fixed w-full z-50">
//       {/* Logo Section */}
//       <div className="ml-4">
//         <img
//           src="/TX.png"
//           alt="TechXpression"
//           className="mix-blend-difference md:w-20 w-10"
//         />
//       </div>
//       {/* Navigation Links */}
//       <nav className="flex flex-grow justify-end items-center space-x-4 md:space-x-10 pr-4">
//         <Link href="/" className="text-yellow-500 md:text-lg text-xs">
//           Home
//         </Link>
//         <Link href="/LS" className="text-yellow-500 md:text-lg text-xs">
//           Live Stream
//         </Link>
//         <Link href="/Map" className="text-yellow-500 md:text-lg text-xs">
//           Map
//         </Link>
//         <Link href="/CC" className="text-yellow-500 md:text-lg text-xs">
//           Coded Connection
//         </Link>
//       </nav>
//         
//     </div>
//   );
// };

const tourney = Tourney({
  subsets: ["latin"],
});

function BoldCopy({
  text,
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        tourney.className,
        className
      )}
    >
      <div
        className={cn(
          "text-4xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-6xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-bold uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-6xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}

const Stream = () => {
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(true);
  const [v3, setV3] = useState(true);
  const [v4, setV4] = useState(true);
  const [v5, setV5] = useState(true);
  const [v6, setV6] = useState(true);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Video 1 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video1.mp4"
        ></video>
        {v1 ? (
          <a
            onClick={() => {
              setV1(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                Hackathon
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      {/* Video 2 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video2.mp4"
        ></video>
        {v2 ? (
          <a
            onClick={() => {
              setV2(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                Geeks vs Geeks
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      {/* Video 3 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video3.mp4"
        ></video>
        {v3 ? (
          <a
            onClick={() => {
              setV3(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                Tech Treasure Hunt
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      {/* Video 4 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video4.mp4"
        ></video>
        {v4 ? (
          <a
            onClick={() => {
              setV4(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                AIcons
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      {/* Video 5 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video5.mp4"
        ></video>
        {v5 ? (
          <a
            onClick={() => {
              setV5(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                TechStar Unplugged
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      {/* Video 6 */}
      <div className="relative aspect-video">
        <video
          className="w-full h-full rounded-lg"
          controls
          src="https://www.example.com/video6.mp4"
        ></video>
        {v6 ? (
          <a
            onClick={() => {
              setV6(false);
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <span className="text-white text-lg font-bold text-center">
                AI Cyber Forensics
                <br />
                {/* <span className="text-xs">Offline</span> */}
              </span>
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
