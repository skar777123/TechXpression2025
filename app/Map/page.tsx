import React from "react";
import { Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function page() {
  return (
    <div>
      <Nav />
      <BackgroundBeams/>
      <div className="flex justify-center h-screen">
        <p className="text-4xl font-bold">Page under Work</p>
      </div>
    </div>
  );
}
