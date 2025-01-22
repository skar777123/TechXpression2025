"use client";
import React, { useState } from "react";
import { BarLoader, CycleText, Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ToastContainer, toast } from "react-toastify";
import { BoldCopy, TypingText } from "../ht/page";
import { gvgAction } from "../action/action";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Scanner from "../ht/ui/scanner";

export default function page() {
  return (
    <div>
      <Nav />
      <ToastContainer position="top-right" hideProgressBar />
      <BackgroundBeams />
      <TypingText
        text=" Prizes upto 15K"
        className="text-yellow-400 text-2xl"
      />
      <BoldCopy
        text="Geeks vs Geeks"
        backgroundTextClassName="text-yellow-500"
        textClassName="text-blue-100"
      />
      <div className="mb-14 mt-6 flex justify-center">
        <CycleText />
      </div>
      <div className="flex flex-col md:flex-row ">
        <GeneralRules />
        <Forms />
      </div>
    </div>
  );
}

const GeneralRules = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 w-[90%] ml-6 md:w-[40%] md:ml-20">
      <p className="text-lg font-bold">
        Rules and <span className="text-yellow-500">Regulations</span>
      </p>
      <div className="text-start mt-4">
        <p className="text-lg pb-2">
          General <span className="text-yellow-500">Rules</span>
        </p>
        <div className="ml-6">
          <p className="pb-1">
            1. Teams can consist of{" "}
            <span className="text-yellow-500">2 or 3 members</span> mandatory.
            Each team must appoint a captain who will be the main point of
            contact.
          </p>{" "}
          <p className="mb-1">
            <b>2. </b> Entry fee of Rs.
            <span className="text-yellow-500">49</span> /- per Team.
          </p>
          <p className="mb-1">
            <b>3. </b> All the Participants will be presented with
            <span className="text-yellow-500">E-Certificate</span>  .
          </p>
          <p className="pb-1">
            4. All teams must register by{" "}
            <span className="text-yellow-500">25th January 2025</span>. Late
            registrations will not be accepted.
          </p>{" "}
          <p className="pb-1">
            5. All participants must ensure{" "}
            <span className="text-yellow-500">
              respectful and fair behavior
            </span>
            .
          </p>
          <p className="pb-1">
            6. First <span className="text-yellow-500">30 teams</span> only will
            get the opportunity in the AIcons.
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-lg pb-2">
          Event <span className="text-yellow-500">Rules</span>
        </p>
        <div className="ml-6">
          <p className="pb-1">
            1. The quiz show will be held from{" "}
            <span className="text-yellow-500">11:30 am to 4:00 pm</span> each
            day on{" "}
            <span className="text-yellow-500">
              31st Jan 2025 <span className="text-white">and</span> 1st Feb 2025
            </span>
            .
          </p>{" "}
          <p className="pb-1">
            2. Event questions will be themed on{" "}
            <span className="text-yellow-500">
              Cybersecurity and Artificial Intelligence
            </span>
            . Using Ai tools or Search Engines will strictly disqualification.
          </p>{" "}
          <p className="pb-1">
            3. There will be <span className="text-yellow-500">4 rounds</span>:{" "}
            <br />
            <span className="pl-4">
              <span className="text-yellow-500">Day 1</span>:
            </span>
            <br />
            <span className="pl-8">
              1st Round :{" "}
              <span className="text-yellow-500">Fundamentals Quiz</span>{" "}
            </span>
            <br />
            <span className="pl-8">
              2nd Round :{" "}
              <span className="text-yellow-500">Basic Level Quiz</span>{" "}
            </span>
            <br />
            <span className="pl-4">
              <span className="text-yellow-500">Day 2</span>:
            </span>
            <br />
            <span className="pl-8">
              3rd Round :{" "}
              <span className="text-yellow-500">Intermediate Level Quiz</span>{" "}
            </span>
            <br />
            <span className="pl-8">
              4th Round :{" "}
              <span className="text-yellow-500">Hard Level Quiz</span>
            </span>
          </p>{" "}
        </div>
      </div>

      <div className="text-start mt-4">
        <p className="text-lg pb-2">
          Quiz <span className="text-yellow-500">Rules :</span>
        </p>
        <div className="ml-6">
          <p>
            1. Teams must press the buzzer to answer. The first to press the
            buzzer gets the chance to answer first.{" "}
            <span className="text-yellow-500">Unnecessary buzzer presses</span>
            {""}
            will result in disqualification.{" "}
          </p>
          <p>
            2. Correct answers earn points, and there are{" "}
            <span className="text-yellow-500">no minus points</span>.
          </p>
          <p>
            3. In case of a tie, additional{" "}
            <span className="text-yellow-500">tie-breaker</span> questions will
            be asked until the tie is broken.
          </p>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [secondMember, setSecondMember] = useState("");
  const [thirdMember, setThirdMember] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  // const [transactionScreenshot, setTransactionScreenshot] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center justify-center pb-40">
          <div className="flex justify-center">
            <p className="font-bold text-yellow-500 text-3xl text-center">
              {/* Thank You For Registering */}
              <span className="text-yellow-500">
                Registration will be starting on
              </span>
            </p>
          </div>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            {/* More Opportunities for you...Click below */}
            6th January, 2025 on 11:59 AM
          </p>
          <CycleText />
        </div>
      ) : (
        <form
          className="ml-10 md:ml-40 mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSpinner(true);
            gvgAction(
              teamName,
              leaderName,
              mobileNumber,
              secondMember,
              thirdMember,
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
                    <span className="text-yellow-500">20th Jan,2025</span>
                    <br />
                    <span className="text-yellow-500">
                      On spot Registration not acceptable
                    </span>
                  </span>
                  <p className="text-3xl font-bold">Registration Form:</p>
                </div>
                <br />
                <div className="flex flex-wrap  md:flex-nowrap gap-4 ">
                  <div className="flex flex-col items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Team Name"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Leaders Name"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Name of second Member  "
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={secondMember}
                        onChange={(e) => setSecondMember(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Name of third Member  "
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={thirdMember}
                        onChange={(e) => setThirdMember(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="College Name"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Transaction ID"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
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
                      <button className="group cursor-pointer rounded-xl border-4 border-blue-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
                        <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg text-black bg-blue-500 p-2 font-bold text-white">
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
