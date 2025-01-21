import React from "react";
import { BoldCopy, CycleText, Nav, TypingText } from "../ht/page";

export default function page() {
  return (
    <div>
      <Nav />
      {/* <TypingText
        text=" Prizes upto 10K"
        className="text-yellow-400 text-2xl"
      /> */}
      <BoldCopy
        text="E-Sports"
        backgroundTextClassName="text-yellow-500"
        textClassName="text-yellow-100"
      />
      <div className="flex flex-col items-center justify-center ">
        <CycleText />
      </div>
      <div className="md:flex md:flex-row ">
        <GeneralRules />
        <Forms />
      </div>
    </div>
  );
}

const GeneralRules = () => {
  return <></>;
};

const Forms = () => {
  return <></>;
};
