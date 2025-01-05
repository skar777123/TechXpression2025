"use client";
import prisma from "@/app/db/db";
import React, { useEffect, useState } from "react";

export default function Hackathon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const hackathon = await fetch("/api/hackathon").then((res) => res.json());
      setData(hackathon);
    }
    fetchData();
  }, []);

  return (
    <div className="hackathon">
      <h1>Hackathon</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.Leader}</h2>
        </div>
      ))}
    </div>
  );
}
