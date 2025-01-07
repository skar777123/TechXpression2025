"use client";
import React, { useEffect, useState } from "react";

export default function HackathonPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("api/hackathon");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hackathon</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.Leader}</h2>
        </div>
      ))}
    </div>
  );
}