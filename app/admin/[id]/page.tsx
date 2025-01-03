import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import prisma from "@/app/db/db";

export default async function page({ params }) {
  const Hackthon = await prisma.hackathon.findFirst();
  if (params.id == "Sanskar" || params.id == "Akash" || params.id == "Aditya") {
    return (
      <div>
            <div >
              <h1>{Hackthon?.TeamName}</h1>
              <p>{Hackthon?.Leader}</p>
            </div>
         
        <BackgroundBeams />
      </div>
    );
  }
}
