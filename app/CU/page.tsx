"use client";
import { useState } from "react";
import {  CycleText, Nav } from "../ht/page";
// import { Input } from "../ht/page";
import { ToastContainer, toast } from "react-toastify";
import { contact } from "../action/action";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [msg, setMsg] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <div>
        <Nav />
        <ToastContainer position="top-right" />
        {submit ? (
          <div className="flex flex-col items-center justify-center pb-40">
            <p className="font-bold text-yellow-500 text-3xl text-center">
              {/* Thank You For Registering */}
              <span className="text-yellow-500">Than You for COntacting</span>
            </p>
            <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
              More Opportunities for you...Click below
              {/* 6th January, 2025 on 11:59 AM */}
            </p>
            <CycleText />
          </div>
        ) : (
          <form
            className="sh-screen"
            onSubmit={(e) => {
              e.preventDefault();
              contact(name, email, phone, college, msg)
                .then(() => {
                  toast(
                    "Registered Successfully - our team will contact you soon"
                  );
                  setSubmit(true);
                })
                .catch((err) => {
                  console.error("Registration Failed:", err);
                  toast("Registration Failed - Please try again later");
                });
            }}
          >
            <div className="flex justify-center">
              <p className="text-3xl font-bold text-yellow-500">Contact Us</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="m-4">
                <input
                  placeholder="Name"
                  type="text"
                  className="w-56 md:w-96 rounded-lg text-black"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="m-4">
                <input
                  placeholder="Email"
                  type="email"
                  className="w-56 md:w-96 rounded-lg text-black"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="m-4">
                <input
                  placeholder="Number"
                  type="text"
                  className="w-56 md:w-96 rounded-lg text-black"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="m-4">
                <input
                  placeholder="College Name"
                  type="text"
                  className="w-56 md:w-96 rounded-lg text-black"
                  required
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              <div className="m-4">
                <input
                  placeholder="Message"
                  type="text"
                  className="w-56 md:w-96 rounded-lg text-black"
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="bg-yellow-500 p-2 rounded-xl font-bold"
                  aria-label="Submit contact form"
                >
                  Contact
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
