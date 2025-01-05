"use client";
import React, { use, useEffect, useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import prisma from "@/app/db/db";
import Image from "next/image";
import Link from "next/link";
import { Hackathon as HackathonType } from "@prisma/client";
import Hackathon from "./hackathon/page";
import GeeksVsGeeks from "./gvg/page";
import Tth from "./tth/page";
import Tsu from "./tsu/page";
import Aic from "./aic/page";
import Aicf from "./aicf/page";
import DataSprint from "./ds/page";

export default function page({ params }) {
  const [hackathon, setHackathon] = useState(true);
  const [gvg, setGvg] = useState(false);
  const [tth, setTth] = useState(false);
  const [tsu, setTsu] = useState(false);
  const [aic, setAic] = useState(false);
  const [aicf, setAicf] = useState(false);
  const [ds, setDs] = useState(false);
  const unwrappedParams: any = use(params);
  const id = unwrappedParams.id;
  return (
    <>
      {id === "Sanskar" || "Aditya" || "Akash" ? (
        <div>
          <div className="flex flex-row p-4">
            <div>
              <Image src="/TX.png" alt="logo" width={80} height={80} />
            </div>
            <div className="flex flex-row justify-around w-full p-8 opacity-70">
              <Link
                href="#"
                onClick={() => {
                  setHackathon(true);
                  setGvg(false);
                  setTth(false);
                  setTsu(false);
                  setAic(false);
                  setAicf(false);
                  setDs(false);
                }}
              >
                Hackathon
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(true);
                  setTth(false);
                  setTsu(false);
                  setAic(false);
                  setAicf(false);
                  setDs(false);
                }}
              >
                GeeksVsGeeks
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(false);
                  setTth(true);
                  setTsu(false);
                  setAic(false);
                  setAicf(false);
                  setDs(false);
                }}
              >
                Tech Treasure Hunt
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(false);
                  setTth(false);
                  setTsu(true);
                  setAic(false);
                  setAicf(false);
                  setDs(false);
                }}
              >
                TechStar Unplugged
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(false);
                  setTth(false);
                  setTsu(false);
                  setAic(true);
                  setAicf(false);
                  setDs(false);
                }}
              >
                AIcons
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(false);
                  setTth(false);
                  setTsu(false);
                  setAic(false);
                  setAicf(true);
                  setDs(false);
                }}
              >
                AI Cyber Forensics
              </Link>
              <Link
                href="#"
                onClick={() => {
                  setHackathon(false);
                  setGvg(false);
                  setTth(false);
                  setTsu(false);
                  setAic(false);
                  setAicf(false);
                  setDs(true);
                }}
              >
                Data Sprint
              </Link>
            </div>
          </div>
          <div>
            {hackathon && <Hackathon />}
            {gvg && <GeeksVsGeeks />}
            {tth && <Tth />}
            {tsu && <Tsu />}
            {aic && <Aic />}
            {aicf && <Aicf />}
            {ds && <DataSprint />}
            <BackgroundBeams />
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-5xl font-bold text-center">
                You are not authorized to view this page
              </h1>
            </div>
          </div>
        </>
      )}
    </>
  );
}
