"use client";
import React from "react";
import { BoldCopy, Nav, TypingText } from "../ht/page";
import { ToastContainer } from "react-toastify";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function page() {
  return (
    <div>
      <Nav />
      <TypingText text=" Register for " className="text-yellow-400 text-2xl" />
      <BoldCopy
        text="Stalls"
        backgroundTextClassName="text-yellow-500"
        textClassName="text-yellow-100"
      />
      <ToastContainer position="top-right" hideProgressBar />
      <BackgroundBeams />
      {/* <div className="flex flex-col md:flex-row">
        <GeneralRules />
        <Flow />
      </div>
      <div>
        <BackgroundBeams />
        <Forms />
      </div> */}
    </div>
  );
}
