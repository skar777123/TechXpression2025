"use client";
import React, { use, useEffect, useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import prisma from "@/app/db/db";
import Image from "next/image";
import Link from "next/link";
import {
  fetchAic,
  fetchAicf,
  fetchDs,
  fetchEs,
  fetchGvg,
  fetchHt,
  fetchTsu,
  fetchTth,
} from "@/app/action/action";

export default function page({ params }) {
  useEffect(() => {
    fetchHt().then((data) => setHackathon(data));
    fetchGvg().then((data) => setGvg(data));
    fetchAic().then((data) => setAic(data));
    fetchAicf().then((data) => setAicf(data));
    fetchTsu().then((data) => setTsu(data));
    fetchTth().then((data) => setTth(data));
    fetchDs().then((data) => setDs(data));
    fetchEs().then((data) => setEs(data));
  }, []);
  const [hackathon, setHackathon] = useState([]);
  const [gvg, setGvg] = useState([]);
  const [tth, setTth] = useState([]);
  const [tsu, setTsu] = useState([]);
  const [aic, setAic] = useState([]);
  const [aicf, setAicf] = useState([]);
  const [ds, setDs] = useState([]);
  const [es, setEs] = useState([]);
  const [list, setList] = useState([]);
  const unwrappedParams: any = use(params);
  const id = unwrappedParams.id;
  return (
    <>
      {id === "SanskarCo" ||
      id === "SakshiCo" ||
      id === "RushikaM" ||
      id === "ChetnaM" ||
      id === "Akash" ||
      id === "Mayuri" ? (
        <div className="h-screen">
          <div className="flex flex-col p-4">
            <div className="flex justify-center">
              <Image src="/TX.png" alt="logo" width={80} height={80} />
            </div>
            <div className=" pt-10 flex  justify-center">
              <div>
                <h1 className="font-bold text-center pb-4">Participation</h1>
                <h3>
                  {" "}
                  Hackathon :{" "}
                  <span className="text-yellow-500">{hackathon.length}</span>
                </h3>
                <h3>
                  {" "}
                  Geeks Vs Geeks :{" "}
                  <span className="text-yellow-500">{gvg.length}</span>
                </h3>
                <h3>
                  Tech Treasure Hunt :{" "}
                  <span className="text-yellow-500">{tth.length}</span>
                </h3>
                <h3>
                  {" "}
                  TechStar Unplugged :{" "}
                  <span className="text-yellow-500">{tsu.length}</span>
                </h3>
                <h3>
                  AIcons : <span className="text-yellow-500">{aic.length}</span>
                </h3>
                <h3>
                  AI Cyber Forensics :{" "}
                  <span className="text-yellow-500">{aicf.length}</span>
                </h3>
                <h3>
                  Data Sprint :{" "}
                  <span className="text-yellow-500">{ds.length}</span>
                </h3>
                <h3>
                  Esports : <span className="text-yellow-500">{es.length}</span>
                </h3>
                <h1 className="font-bold text-center pb-4">
                  Total Participation Teams:{" "}
                  {hackathon.length +
                    gvg.length +
                    tth.length +
                    tsu.length +
                    ds.length +
                    es.length +
                    aic.length +
                    aicf.length}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setList(hackathon);
                  }}
                  className="p-1 m-2  bg-yellow-500 rounded-lg"
                >
                  Hackathon
                </button>
                <button
                  onClick={() => {
                    setList(gvg);
                  }}
                  className="p-1 m-2  bg-yellow-500 rounded-lg"
                >
                  GvG
                </button>
                <button
                  onClick={() => {
                    setList(aic);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  Aicons
                </button>
                <button
                  onClick={() => {
                    setList(aicf);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  AI Cyber Forensics
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setList(tth);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  Tech Treasure hunt
                </button>
                <button
                  onClick={() => {
                    setList(tsu);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  TechStar Unplugged
                </button>
                <button
                  onClick={() => {
                    setList(es);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  Esports
                </button>
                <button
                  onClick={() => {
                    setList(ds);
                  }}
                  className="p-1 m-2 bg-yellow-500 rounded-lg"
                >
                  Data Sprint
                </button>
              </div>
            </div>
            {list &&
              list.map((l, item) => {
                return (
                  <div
                    key={item}
                    className="h-[100%] flex justify-center m-2 p-2 bg-gray"
                  >
                    <div className="h-screen ">
                      <h1 className="text-ml text-center p-2">{l.TeamName}</h1>
                    </div>
                  </div>
                );
              })}
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
