import React from "react";
import { Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function page() {
  return (
    <div>
      <Nav />
      <BackgroundBeams />
      <div className="flex flex-col items-center h-screen">
        <p className="text-4xl font-bold pt-8">Coded Connections</p>
        <p className="w-[90%] md:w-2/4 text-center text-xl pt-8 ">
          <span className="text-yellow-500">Coded Connection</span> is an AI and
          ML-powered dating app that utilizes a unique token system to match
          compatible singles. Our advanced algorithms analyze user data and
          preferences to identify potential partners who share your interests
          and values. Discover your match, engage in insightful conversations,
          and build meaningful connections.
        </p>
        <p className="w-3/4 md:w-2/4 text-center text-xl pt-8">
          QR for the app will be available on the Entry point of our{" "}
          <span className="text-yellow-500">TechXpression 2025</span> .
        </p>
      </div>
    </div>
  );
}
