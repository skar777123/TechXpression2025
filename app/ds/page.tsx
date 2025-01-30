"use client";
import React, { useState } from "react";
import { BarLoader, BoldCopy, CycleText, Nav, TypingText } from "../ht/page";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Scanner from "../ht/ui/scanner";
import { toast } from "react-toastify";
import { dsprint } from "../action/action";

export default function page() {
  return (
    <div>
      <Nav />
      <TypingText
        text=" Prizes upto 10K"
        className="text-yellow-400 text-2xl"
      />
      <BoldCopy
        text="Data Sprint"
        backgroundTextClassName="text-yellow-500"
        textClassName="text-yellow-100"
      />
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
    <div className=" flex flex-col items-center justify-center py-10 w-[87%] ml-6 md:w-[40%] md:ml-20">
      <p className="text-lg font-bold">
        Rules and <span className="text-yellow-500">Regulations</span>
      </p>
      <div className="text-start mt-4 ">
        <p className="text-s font-bold mb-1">
          General <span className="text-yellow-500">rules</span>:
        </p>
        <div className="ml-6">
          <p className="mb-1">
            <b>1. </b>You can only participant{" "}
            <span className="text-yellow-500">Solo</span>{" "}
          </p>
          <p className="mb-1">
            <b>2. </b> No <span className="text-yellow-500">Entry Fees</span>.
          </p>
          <p className="mb-1">
            <b>3. </b> All teams must register by{" "}
            <span className="text-yellow-500">25th of January</span>. Late
            registrations will not be accepted. Late registrations will not be
            accepted.
          </p>
          <p className="mb-1">
            <b>4. </b> All the Participants will be presented with
            <span className="text-yellow-500">E-Certificate</span> .
          </p>
          <p className="mb-1">
            <b>5. </b> The Event is based on getting Insights of an{" "}
            <span className="text-yellow-500">Dataset</span>, which will be
            provided on the day of the event.
          </p>
          <p className="mb-1">
            <b>6. </b> All participants must ensure{" "}
            <span className="text-yellow-500">
              respectful and fair behaviour
            </span>
            .
          </p>
          <p className="mb-1">
            <b>7. </b> First{" "}
            <span className="text-yellow-500">40 Participants </span> only will
            get Opportunity in the Data Sprint.
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
            <span className="text-yellow-500">10:30 am to 3:30 pm</span>. All
            submissions must be completed by the end time.
          </p>
          <p className="mb-1">
            <b>2. </b>Projects must be original and created during the event{" "}
            <span className="text-yellow-500">
              Using pre-existing code is not allowed
            </span>
            . Plagiarism will result in disqualification.
          </p>

          <p className="mb-1">
            <b>3. </b>All projects must align with the given{" "}
            <span className="text-yellow-500">problem statement</span>.
          </p>
          <p className="mb-1">
            <b>4. </b>Allowed Tools: <br />
            <span className="text-yellow-500">Data Analysis Tools :</span>{" "}
            <br />
            <span className="pl-8">
              Python, R, Power Bi, Jupyter Notebook, Excel
            </span>
            <br />
            <span className="text-yellow-500">
              Machine Learning and Fraud Detection :
            </span>{" "}
            <br />
            <span className="pl-8">
              scikit-learn, TensorFlow/Keras, Autoencoders, XGBoost, LightGBM,
            </span>
            <br />
            <span className="pl-8">
              OpenRefine, FeatureTools, PyOD and Fraud Detection APIs.
            </span>
          </p>
          <p className="mb-1">
            <b>5. </b>Participants will focus on Fraud detection and Predictive
            Modeling capable of Forecasting Trends{" "}
            <span className="text-yellow-500">for next 50 years</span>.<br />
          </p>
          <p className="mb-1">
            <b>6. </b>Participants are expected to submit a{" "}
            <span className="text-yellow-500"> report</span> including problems
            idetification and solution{" "}
            <span className="text-yellow-500">based on prediction</span>.
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
            <span className="text-yellow-500">System</span> for the Event.
          </p>
          <p className="mb-1">
            <b>2. </b> Tables, Seats and Connectivity will be{" "}
            <span className="text-yellow-500"> provided</span>
          </p>
          <p className="mb-1">
            <b>3. </b> Participants will be responsible for any damage caused to
            the{" "}
            <span className="text-yellow-500">
              equipment, facilites, or systems
            </span>{" "}
            during the event.
          </p>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const [firstMember, setLeaderName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  // const [transactionId, setTransactionId] = useState("");
  const [submit, setSubmit] = useState(true);
  const [spinner, setSpinner] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center mt-32 ml-20">
          <p className="font-bold text-yellow-500 text-3xl  text-center">
            {/* Thank You For Registering */}
            Registration is Closed
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            More Opportunities for you...Click below
          </p>
          <CycleText />
        </div>
      ) : (
        <form
          className="md:ml-40 mt-10 "
          onSubmit={(e) => {
            e.preventDefault();
            setSpinner(true);
            dsprint(mobileNumber, collegeName, firstMember)
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
                    <div>
                      <input
                        type="text"
                        placeholder="Participant Name"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={firstMember}
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
                        placeholder="College Name"
                        className="mx-4 w-56 md:w-96 m-4 p-1 rounded-lg text-black"
                        required
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                      />
                    </div>
                    {/* <input
                      type="text"
                      placeholder="Transaction ID"
                      className="mx-4 m-4 w-56 md:w-96 p-1 rounded-lg text-black"
                      required
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                    /> */}
                    {/* <div className="flex justify-center p-4">
                      <Scanner />
                    </div> */}
                    <div className="flex  justify-center mt-4">
                      <input type="checkbox" className="mx-4 w-3" required />I
                      have read and agree to the all rules, terms and conditions
                    </div>
                    <div className="flex flex-col items-center mt-4">
                      <button className="group cursor-pointer rounded-xl border-4 border-yellow-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
                        <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg  bg-yellow-500 p-2 font-bold text-white">
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
