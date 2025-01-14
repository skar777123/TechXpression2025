"use client";
import React, { useState } from "react";
import { BarLoader, CycleText, Nav } from "../ht/page";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BoldCopy, TypingText } from "../ht/page";
import { toast, ToastContainer } from "react-toastify";
import { tsuAction } from "../action/action";
import Scanner from "../ht/ui/scanner";

export default function page() {
  return (
    <div>
      <Nav />
      <BackgroundBeams />
      <TypingText
        text=" Prizes upto 10K"
        className="text-yellow-400 text-2xl"
      />
      <ToastContainer position="top-right" hideProgressBar />
      <BoldCopy
        text="TechStar Unplugged"
        backgroundTextClassName="text-yellow-500 text-center"
        textClassName="text-yellow-100 text-center"
      />
      <div className="mb-8 mt-6 flex justify-center">
        <CycleText />
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
            <b>1. </b>Individuals and teams{" "}
            <span className="text-yellow-500">(upto 4 members)</span> are
            welcome to participate. Each team or individual must register by{" "}
            <span className="text-yellow-500">25th Jan 2025</span>. Each team
            must appoint a leader who will be the main point of contact.
          </p>
          <p className="mb-1">
            <b>2. </b> No <span className="text-yellow-500">Entry Fees</span>.
          </p>
          <p className="mb-1">
            <b>3. </b> All the Participants will be presented with{" "}
            <span className="text-yellow-500">E-Certificate</span> .
          </p>
          <p className="mb-1">
            <b>4. </b>All participants must adhere to the B. K. Birla College
            Code of Conduct and the events specific{" "}
            <span className="text-yellow-500">
              guidelines, ensuring respectful and fair behavior.
            </span>
          </p>
          <p className="mb-1">
            <b>5. </b>Event will commence in Central Lawn at{" "}
            <span className="text-yellow-500">
              10:00 am <span className="text-white">on</span> 31st Jan 2025
            </span>
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Event <span className="text-yellow-500">Categories</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>Tech Stand-Up Comedy: <br />
            <span className="ml-6">
              Perform a stand-up routine focused on tech-related humor.
            </span>
          </p>
          <p className="mb-1">
            <b>2. </b>
            <span className="text-yellow-500">Tech Roast:</span>
            <br />
            <span className="ml-6">
              Playfully roast tech trends, figures, or concepts, keeping it
              respectful and in good fun.
            </span>
          </p>
          <p className="mb-1">
            <b>3. </b>
            <span className="text-yellow-500">Music Mashup:</span> <br />
            <span className="ml-6">
              Create a musical performance that incorporates tech themes, either
              through lyrics or music composition.
            </span>
          </p>
          <p className="mb-1">
            <b>4. </b>
            <span className="text-yellow-500">Tech Memes:</span>
            <br />
            <span className="ml-6">
              {" "}
              Design and present original memes that capture the humor in
              technology.
            </span>
          </p>
          <p className="mb-1">
            <b>5. </b>
            <span className="text-yellow-500">Others:</span>{" "}
            <span>extra talents other than this categories</span>
          </p>
        </div>
      </div>
      <div className="text-start mt-4">
        <p className="text-s font-bold mb-1">
          Performance <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>Each performance should not exceed{" "}
            <span className="text-yellow-500">5 minutes</span>. Exceeding the
            time limit may result in penalties.
          </p>
          <p className="mb-1">
            <b>2. </b>All content must be{" "}
            <span className="text-yellow-500">original and created</span> for
            the event.
          </p>
          <p className="mb-1">
            <b>3. </b>
            <span className="text-yellow-500">
              Content must be appropriate
            </span>{" "}
            for all audiences and should avoid offensive language or themes.
          </p>
          <p className="mb-1">
            <b>4. </b>Participants are responsible for bringing their{" "}
            <span className="text-yellow-500">own props and equipment</span>.
            Basic audiovisual support will be provided.
          </p>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const [type, setType] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [secondMember, setSecondMember] = useState("");
  const [thirdMember, setThirdMember] = useState("");
  const [fourthMember, setFourthMember] = useState("");
  const [collegeName, setCollegeName] = useState("");
  // const [transactionId, setTransactionId] = useState("");
  const [submit, setSubmit] = useState(false);
  const [spinner, setSpinner] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center mt-32 ml-20">
          <p className="font-bold text-yellow-500 text-3xl text-center">
            Thank You For Registering
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            More Opportunities for you...Click below
          </p>
          <CycleText />
        </div>
      ) : (
        <form
          className="md:ml-40 mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSpinner(true);
            tsuAction(
              type,
              leaderName,
              mobileNumber,
              secondMember,
              thirdMember,
              fourthMember,
              collegeName
              // transactionId
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
                    <span className="text-yellow-500">25th Jan,2025</span>
                    <br />
                    <span className="text-yellow-500">
                      On spot Registration not acceptable
                    </span>
                  </span>
                  <p className="text-3xl font-bold">Registration Form:</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-4 ">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <label>Type: </label>
                      <div className="flex flex-row items-center">
                        <input
                          type="radio"
                          name="type"
                          placeholder="Team Name"
                          className="mx-4 w-30 m-4"
                          required
                          value="Group"
                          onChange={(e) => setType(e.target.value)}
                        />
                        <p>Group</p>
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

                    {type === "Group" ? (
                      <>
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
                            placeholder="Name of forth Member  "
                            className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                            required
                            value={fourthMember}
                            onChange={(e) => setFourthMember(e.target.value)}
                          />
                        </div>
                      </>
                    ) : null}
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
                    {/* <div>
                      <input
                        type="text"
                        placeholder="Transaction ID"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                      />
                    </div> */}
                    {/* <div className="flex justify-center p-4">
                      <Scanner />
                    </div> */}
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
