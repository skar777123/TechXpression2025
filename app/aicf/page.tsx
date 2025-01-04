"use client";
import React, { useState } from "react";
import { Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BoldCopy, CycleText, Input, TypingText } from "../ht/page";
import { toast } from "react-toastify";
import { aicfAction } from "../action/action";

export default function page() {
  return (
    <div>
      <Nav />
      <BackgroundBeams />
      <TypingText
        text=" Prizes upto 10K"
        className="text-yellow-400 text-2xl"
      />
      <BoldCopy
        text="AI Cyber Forensics"
        backgroundTextClassName="text-yellow-500"
        textClassName="text-blue-100"
      />
      <div className="mb-8 flex justify-center">
        <CycleText />
      </div>
      <div className="flex flex-row">
        <GeneralRules />
        <Forms />
      </div>
    </div>
  );
}

const GeneralRules = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 w-[40%] ml-20">
      <p className="text-lg font-bold">
        Rules and <span className="text-yellow-500">Regulations</span>
      </p>
      <div className="text-start mt-4 ">
        <p className="text-s font-bold mb-1">
          General <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>You can as a{" "}
            <span className="text-yellow-500">
              Solo <span className="text-white">or </span>Duo
            </span>{" "}
            mandatory. If Duo, they should appoint a leader who will be the main
            point of contact.
          </p>
          <p className="mb-1">
            <b>2. </b> All teams must register by{" "}
            <span className="text-yellow-500">25th of January</span>. Late
            registrations will not be accepted. Late registrations will not be
            accepted.
          </p>
          <p className="mb-1">
            <b>3. </b> The Event is based solving hiiden clues in an Cyber crime
            scene with use of{" "}
            <span className="text-yellow-500">AI and Forensics </span> based on a
            problem statement.
          </p>
          <p className="mb-1">
            <b>4. </b> All participants must ensure{" "}
            <span className="text-yellow-500">respectful and fair behaviour</span>
            .
          </p>
          <p className="mb-1">
            <b>5. </b> First <span className="text-yellow-500">40 Teams </span>{" "}
            only will get Opportuinity in the Hackathon.
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Event <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>The event will be at{" "}
            <span className="text-yellow-500">1:00 pm to 4:00 pm</span>. All
            submissions must be completed by the end time.
          </p>

          <p className="mb-1">
            <b>2. </b>Submissions must be made through{" "}
            <span className="text-yellow-500">TechXpression</span> website. Each
            submission must include:
            <br />
            o Scene Title / Problem statement
            <br />
            o Description
            <br />
            o Presentation (if required)
            <br />
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Participants <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b> To all Participants we will provide{" "}
            <span className="text-yellow-500">System</span> (Duos and Solo each
            one)
          </p>
          <p className="mb-1">
            <b>2. </b> Tables, Seats and Connectivity will be{" "}
            <span className="text-yellow-500"> provided</span>
          </p>
          <p className="mb-1">
            <b>3. </b> Participants can use{" "}
            <span className="text-yellow-500">AI tools</span> to find the
            Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const [type, setType] = useState("");
  const [firstMember, setLeaderName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [secondMember, setSecondMember] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [submit, setSubmit] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center mt-32 ml-20">
          <p className="font-bold text-yellow-500 text-3xl">
            Thank You For Registering
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16">
            More Opportunities for you...Click below
          </p>
          <CycleText />
        </div>
      ) : (
        <form
          className="ml-40 mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            aicfAction(
              type,
              mobileNumber,
              collegeName,
              firstMember,
              secondMember
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
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <label>Type: </label>
                  <div className="flex flex-row items-center">
                    <input
                      type="radio"
                      name="type"
                      placeholder="Team Name"
                      className="mx-4 w-30 m-4"
                      required
                      value="Duo"
                      onChange={(e) => setType(e.target.value)}
                    />
                    <p>Duo</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <input
                      type="radio"
                      name="type"
                      placeholder="Team Name"
                      className="mx-4 w-30 m-4"
                      required
                      value="Solo"
                      onChange={(e) => setType(e.target.value)}
                    />
                    <p>Solo</p>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Participant Name"
                    className="mx-4 w-96 m-4"
                    required
                    value={firstMember}
                    onChange={(e) => setLeaderName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="mx-4 w-96 m-4"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                {type === "Duo" ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Name of second Member  "
                      className="mx-4 w-96 m-4"
                      required
                      value={secondMember}
                      onChange={(e) => setSecondMember(e.target.value)}
                    />
                  </div>
                ) : null}

                <div>
                  <input
                    type="text"
                    placeholder="College Name"
                    className="mx-4 w-96 m-4"
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
                  <button className="group cursor-pointer rounded-xl border-4 border-blue-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
                    <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-blue-500 p-2 font-bold text-white">
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
