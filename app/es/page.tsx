"use client";
import React, { useState } from "react";
import { BarLoader, BoldCopy, CycleText, Nav, TypingText } from "../ht/page";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Scanner from "../ht/ui/scanner";
import { toast, ToastContainer } from "react-toastify";
import { esports } from "../action/action";

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
      <ToastContainer position="top-right" hideProgressBar />
      <div className="flex flex-row justify-center">
        <BoldCopy
          text="BGMI"
          backgroundTextClassName="text-yellow-500 "
          textClassName="text-yellow-100"
        />
        <BoldCopy
          text="FreeFire"
          backgroundTextClassName="text-yellow-500"
          textClassName="text-yellow-100"
        />
      </div>
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
  return (
    <div className="flex flex-col items-center justify-center py-10 w-[90%] ml-4 md:w-[40%] md:ml-20">
      <p className="text-lg font-bold">
        Rules and <span className="text-yellow-500">Regulations</span>
      </p>
      <div className="text-start mt-4 ">
        <p className="text-s font-bold mb-1">
          General <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>Teams can consist of{" "}
            <span className="text-yellow-500">4 members</span> mandatory. Each
            team must appoint a leader who will be the main point of contact.
          </p>
          <p className="mb-1">
            <b>2. </b> Entry fee of Rs.
            <span className="text-yellow-500">100</span> /- per Team.
          </p>
          <p className="mb-1">
            <b>3. </b> All teams must register by{" "}
            <span className="text-yellow-500">28th of January</span>. Late
            registrations will not be accepted.
          </p>
          <p className="mb-1">
            <b>6. </b> All participants must ensure{" "}
            <span className="text-yellow-500">
              respectful and fair behaviour
            </span>
            .
          </p>
          <p className="mb-1">
            <b>7. </b> First come{" "}
            <span className="text-yellow-500">First serve</span> .
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Event <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>The e-sports will be at{" "}
            <span className="text-yellow-500">
              11:00 am to 4:00 pm <span className="text-white">each day –</span>{" "}
              <br />
            </span>{" "}
            <span className="pl-6 font-bold">
              FreeFire - <span className="text-yellow-500">31st Jan</span>
              <br />
              <span className="pl-6">
                Bgmi - <span className="text-yellow-500">1st Feb</span>
              </span>
            </span>
          </p>
          <p className="mb-1">
            <b>2. </b>All the{" "}
            <span className="text-yellow-500">participants </span>
            should be present before entring the LAN.
          </p>
          <p className="mb-1">
            <b>3. </b> <span className="text-yellow-500">Groups</span> will
            decided before hand.
          </p>
          <p className="mb-1">
            <b>4. </b> <span className="text-yellow-500">Points</span> will be
            allocated by official rules.{" "}
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Participants <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b> All Participants should bring{" "}
            <span className="text-yellow-500">Mobiles </span> and{" "}
            <span className="text-yellow-500">Accessories</span>, Organizers
            will be not responsible for any causes and absense of devices.
          </p>
          <p className="mb-1">
            <b>2. </b> Tables and Seats will be{" "}
            <span className="text-yellow-500"> provided</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const [teamName, setTeamName] = useState("");
  const [name1, setLeaderName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [name2, setSecondMember] = useState("");
  const [name3, setThirdMember] = useState("");
  const [name4, setFourthMember] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [enroll, setEnroll] = useState("");
  // const [transactionScreenshot, setTransactionScreenshot] = useState("");
  const [submit, setSubmit] = useState(false);
  const [spinner, setSpinner] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center justify-center pb-40">
          <p className="font-bold text-yellow-500 text-3xl text-center">
            Thank You For Registering
            {/* <span className="text-yellow-500">Registration is been closed</span> */}
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            More Opportunities for you...Click below
            {/* 6th January, 2025 on 11:59 AM */}
          </p>
          <div className="text-lg md:text-2xl flex flex-col items-center mb-10">
            <a
              className="text-green-500"
              href="https://chat.whatsapp.com/LuD8nTdESVGKAXQHJtzHsU"
            >
              Join BGMI Whatsapp Group
            </a>
            <br />
            <a
              className="text-green-500"
              href="https://chat.whatsapp.com/HB2SnGSpVtLIeTTJtOuA9c"
            >
              Join FreeFire Whatsapp Group
            </a>
          </div>
          <CycleText />
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSpinner(true);
            esports(
              enroll,
              teamName,
              name1,
              name2,
              name3,
              name4,
              mobileNumber,
              collegeName,
              transactionId
            )
              .then(() => {
                toast(
                  "Registered Successfully - our team will contact you soon"
                );
              })
              .then(() => {
                setSpinner(false);
                setSubmit(true);
              })
              .catch((err) => {
                toast("Registration Failed - Please try again later", err);
              });
          }}
        >
          <div className="flex flex-col items-center pb-10">
            {spinner ? (
              <div className="h-screen flex flex-col items-center mt-10">
                <BarLoader />
                <p className="text-yellow-500 font-bold">Registering...</p>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center">
                  <span>
                    Last Date for Registration:{" "}
                    <span className="text-yellow-500">28th Jan,2025</span>
                    <br />
                    <span className="text-yellow-500">
                      {/* On spot Registration wil  accepted */}
                    </span>
                  </span>
                  <p className="text-3xl font-bold">Registration Form:</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-4 ">
                  <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row  items-center m-2">
                      <div>
                        <div className="flex flex-row ">
                          <label>Enroll in: </label>
                          <div className="flex flex-row items-center">
                            <input
                              type="radio"
                              name="type"
                              // placeholder="Team Name"
                              className="mx-4 w-30 m-4"
                              required
                              value="BGMI"
                              onChange={(e) => setEnroll(e.target.value)}
                            />
                            <p>BGMI</p>
                          </div>
                          <div className="flex flex-row items-center">
                            <input
                              type="radio"
                              name="type"
                              // placeholder="Team Name"
                              className="mx-4 w-30 m-4"
                              required
                              value="FreeFire"
                              onChange={(e) => setEnroll(e.target.value)}
                            />
                            <p>FreeFire</p>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Team Name"
                          className="mx-4 w-56 p-1 rounded-lg  text-black"
                          required
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="IGL name"
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={name1}
                        onChange={(e) => setLeaderName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row   items-center m-2">
                      <input
                        type="text"
                        placeholder="Name of second Member  "
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={name2}
                        onChange={(e) => setSecondMember(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Name of third Member  "
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={name3}
                        onChange={(e) => setThirdMember(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Name of fourth Member  "
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={name4}
                        onChange={(e) => setFourthMember(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row  items-center m-2 justify-center">
                      <input
                        type="text"
                        placeholder="College Name"
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Transaction ID"
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center p-4">
                      <Scanner />
                    </div>
                    <div className="flex  justify-center mt-4">
                      <input type="checkbox" className="mx-4 w-3" required />I
                      have read and agree to the all rules, terms and conditions
                    </div>
                    <div className="flex flex-col items-center mt-4">
                      <button className="group cursor-pointer rounded-xl border-4 border-yellow-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
                        <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg text-black bg-yellow-500 p-2 font-bold text-white">
                          Register
                          <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
                          <div
                            className={cn(
                              "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
                            )}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      )}
    </section>
  );
};
