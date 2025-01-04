"use client";
import React, { useState } from "react";
import { Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ArrowRight } from "lucide-react";
import { BoldCopy, TypingText } from "../ht/page";
import { tthAction } from "../action/action";
import { toast, ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <div>
      <Nav />
      <ToastContainer position="top-right" hideProgressBar />
      <BackgroundBeams />
      <TypingText
        text=" Prizes upto 10K"
        className="text-yellow-400 text-2xl"
      />
      <BoldCopy
        text="Tech Treasure Hunt"
        backgroundTextClassName="text-yellow-500 text-4xl text-center"
        textClassName="text-yellow-100 text-center"
      />
      <div className="mb-8 mt-6 flex justify-center">
        {/* <CycleText /> */}
      </div>
      <div className="md:flex md:flex-row">
        <GeneralRules />
        <Forms />
      </div>
    </div>
  );
}

const GeneralRules = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 w-[90%] ml-8 md:w-[40%] md:ml-20">
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
            <b>2. </b>All teams must register by 20th Jan 2025. Late
            registrations will not be accepted.
          </p>
          <p className="mb-1">
            <b>3. </b>All participants must adhere to ensure{" "}
            <span className="text-yellow-500">
              respectful and fair behaviour.
            </span>
          </p>
          <p className="mb-1">
            <b>4. </b> Only First{" "}
            <span className="text-yellow-500">15 Teams </span> only will get
            Opportuinity in the Hackathon.
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Event <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>The event will start at{" "}
            <span className="text-yellow-500">
              11:00 am <span className="text-white">on</span> 31st Jan 2025.
            </span>{" "}
          </p>
          <p>
            <b>2. </b> The team has to split to{" "}
            <span className="text-yellow-500">Two parts(2-2)</span>, where two
            members will be finding{" "}
            <span className="text-yellow-500">physical clues</span> and other 2
            will be finding
            <span className="text-yellow-500">virtual clues</span> hidden in the
            systems.{" "}
          </p>
          <p className="mb-1">
            <b>2. </b> Clue Types:
            <br /> The treasure hunt will include different types of clues, such
            as:
            <br />- <span className="text-yellow-500">Tech History</span>:
            Questions related to important events and figures in technology.
            <br />- <span className="text-yellow-500">Physical Challenges</span>
            : Tasks that need to be completed physically on campus.
            <br />-{" "}
            <span className="text-yellow-500">Code-Based Knowledge</span>:
            Programming puzzles and coding challenges.
            <br />
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Hunt <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>Teams must follow the sequence of clues provided. Each
            clue will lead to the next location or task.
          </p>
          <p className="mb-1">
            <b>2. </b>Team should always to be with{" "}
            <span className="text-yellow-500">Supervisor </span> allotted to the
            team
          </p>
          <p className="mb-1">
            <b>3. </b>The clues will vary in difficulty{" "}
            <span className="text-yellow-500">
              {" "}
              Basic – Intermediate - Hard
            </span>{" "}
            will be provided.
          </p>
          <p className="mb-1">
            <b>4. </b>Each team must complete the treasure hunt within the{" "}
            <span className="text-yellow-500"> designated time frame</span>.
          </p>
          <p>
            <b>5. </b> Teams are not allowed to use any{" "}
            <span className="text-yellow-500">
              external resources <span className="text-white">or</span> AI tools
            </span>
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
  const [fourthMember, setFourthMember] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [submit, setSubmit] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center mt-32 ml-20">
          <p className="font-bold text-yellow-500 text-3xl">
            Thank You For Registering
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            More Opportunities for you...Click below
          </p>
          {/* <CycleText /> */}
        </div>
      ) : (
        <form
          className="md:ml-40 mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            tthAction(
              teamName,
              leaderName,
              mobileNumber,
              secondMember,
              thirdMember,
              fourthMember,
              collegeName
            )
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
          <div className="flex flex-col items-center pb-10">
            <div className="mb-10">
              <p className="text-3xl font-bold">Registration Form:</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 ">
              <div className="flex flex-col items-center">
                <div>
                  <input
                    type="text"
                    placeholder="Team Name"
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Leaders Name"
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Name of second Member  "
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={secondMember}
                    onChange={(e) => setSecondMember(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Name of third Member  "
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={thirdMember}
                    onChange={(e) => setThirdMember(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Name of forth Member  "
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={fourthMember}
                    onChange={(e) => setFourthMember(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="College Name"
                    className="mx-4 w-56 md:96 m-4"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                  />
                </div>
                <div className="flex  justify-center mt-4">
                  <input type="checkbox" className="mx-4 w-3" required />I have
                  read and agree to the all rules, terms and conditions
                </div>
                <div className="flex flex-col items-center mt-4">
                  <button className="group cursor-pointer rounded-xl border-4 border-yellow-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
                    <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-yellow-500 p-2 font-bold text-white">
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
          </div>
        </form>
      )}
    </section>
  );
};
