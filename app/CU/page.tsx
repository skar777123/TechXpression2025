"use client";
import { useState } from "react";
import { Nav } from "../ht/page";
import { Input } from "../ht/page";
import { ToastContainer, toast } from "react-toastify";
import { contact } from "../action/action";

export default function page() {
  const [name1, setName] = useState("");
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
        <form
          className="h-screen"
          onSubmit={(e) => {
            e.preventDefault();
            contact(name1, email, phone, college, msg)
              .then(() => {
                toast(
                  "Registered Successfully - our team will contact you soon"
                );
              })
              .then(() => {
                setSubmit(true);
              })
              .catch((err) => {
                toast("Registration Failed - Please try again later", err);
              });
          }}
        >
          <div className="flex justify-center">
            <p className="text-3xl font-bold text-yellow-500">Contact Us</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="m-4">
              <Input
                placeholder="Name"
                type="text"
                className="w-56 md:w-96"
                required
                value={name1}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="m-4">
              <Input
                placeholder="Email"
                type="email"
                className="w-56 md:w-96"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="m-4">
              <Input
                placeholder="Number"
                type="text"
                className="w-56 md:w-96"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="m-4">
              <Input
                placeholder="College Name"
                type="text"
                className="w-56 md:w-96"
                required
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
            </div>
            <div className="m-4">
              <Input
                placeholder="message"
                type="text"
                className="w-56 md:w-96"
                required
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
            </div>
            <div>
              <button className="bg-yellow-500 p-2 rounded-xl font-bold">
                Contact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}