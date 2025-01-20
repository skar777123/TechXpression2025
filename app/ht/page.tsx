"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Tourney } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { HiTrophy } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";
import { HackathonAction } from "../action/action";
import Image from "next/image";
import Link from "next/link";
import Scanner from "./ui/scanner";
import { Spinner } from "@nextui-org/spinner";

// import { Nav } from "../LS/page";

type OmitWithTag<T, K extends keyof T> = Omit<T, K> & {
  [P in keyof T]: T[P] extends (...args: any[]) => JSX.Element ? T[P] : string;
};

export default function Hackthon() {
  return (
    <div>
      <Nav />
      <TypingText
        text=" Prizes upto 50K"
        className="text-yellow-400 text-2xl"
      />
      <ToastContainer position="top-right" hideProgressBar />
      <Ht />
      <BackgroundBeams />
      <div className="flex flex-col md:flex-row">
        <GeneralRules />
        <Flow />
      </div>
      <div>
        <BackgroundBeams />
        <Forms />
      </div>
    </div>
  );
}

export const Nav = () => {
  return (
    <div className="flex flex-row md:justify-around">
      <div>
        <Image
          src="/TX.png"
          alt="TechXpression "
          width={80}
          height={80}
          className=" mix-blend-difference  ml-4 mt-2"
        />
      </div>
      <div className=" md:ml-80 ">
        <nav className=" left-0 right-0 top-0 z-50 flex justify-center  px-6 py-8 text-white">
          <div className=" flex flex-row justify-between  space-x-10 opacity-60">
            <Link
              href="/"
              className="flex items-center gap-1  text-zinc-400 md:text-lg text-xs"
            >
              Home
            </Link>
            <Link
              href="LS"
              className="flex items-center gap-1  text-zinc-400 md:text-lg text-xs"
            >
              Live Stream
            </Link>
            <Link
              href="Map"
              className="flex items-center gap-1  text-zinc-400 md:text-lg text-xs"
            >
              Map
            </Link>
            <Link
              href="CC"
              className="flex items-center gap-1  text-zinc-400 md:text-lg text-xs"
            >
              Coded Connection
            </Link>
          </div>
          {/* <button
            onClick={() => {
              document.getElementById("launch-schedule")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="flex items-center gap-1  text-zinc-400 md:text-lg text-xs"
          >
          EVENTS <FiArrowRight /> 
          </button> */}
        </nav>
      </div>
    </div>
  );
};

const Ht = () => {
  return (
    <div className="pt-4">
      <BoldCopy
        text="Hackathon"
        backgroundTextClassName="text-yellow-500 "
        textClassName="text-yellow-100"
      />
      <div className=" flex flex-col justify-center items-center md:flex-row ">
        <RegButton
          text="Register"
          className="text-lg ml-10 mb-5  md:ml-auto "
          href="#register"
        />
        <CycleText />
      </div>
    </div>
  );
};

export function CycleText() {
  type WordType = {
    name: string;
    link?: string;
  };

  // Using OmitWithTag to ensure that the 'name' property is a string and 'link' is optional
  type OmittedWordType = OmitWithTag<WordType, "link">;

  const words: OmittedWordType[] = [
    { name: "More events" },
    { name: "Hackathon", link: "ht" },
    { name: "Geeks vs Geeks", link: "gvg" },
    { name: "Tech Treasure Hunt", link: "tth" },
    { name: "TechStar Unplugged", link: "tsu" },
    { name: "AIcons", link: "aic" },
    { name: "AI Cyber Forensics", link: "aicf" },
  ];

  const [index, setIndex] = useState(0);
  const total = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div>
      <span className="font-mono text-xl text-yellow-500">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.5 }}
            className="inline-block font-mono text-xl text-yellow-500"
          >
            <Link href={words[index]?.link || ""}>{words[index].name}</Link>
          </motion.h1>
        </AnimatePresence>
      </span>
    </div>
  );
}

function RegButton({ text, className, href }: IGetStartedButtonProps) {
  return (
    <div className="min-h-12 mr-10 flex ">
      <Link
        href={href || "#"}
        className={cn(
          "group flex  w-26 items-center justify-center gap-3 rounded-lg text-black bg-yellow-500 p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-green-500",
          className
        )}
      >
        <span
          className={cn(
            "text-white transition-colors duration-100 ease-in-out text-xs md:text-lg"
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
            "bg-yellow-700 group-hover:bg-white"
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-green-600 opacity-0 group-hover:opacity-100"
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-white opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
              )}
            />
          </div>
        </div>
      </Link>
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
            <span className="text-yellow-500">1 to 4 members</span> mandatory. Each
            team must appoint a leader who will be the main point of contact.
          </p>
          <p className="mb-1">
            <b>2. </b> Entry fee of Rs.
            <span className="text-yellow-500">149</span> /- per Team.
          </p>
          <p className="mb-1">
            <b>3. </b> All the Participants will be presented with
            <span className="text-yellow-500">E-Certificate</span>  .
          </p>
          <p className="mb-1">
            <b>4. </b> The Solutions to Problem Statement should be based on the
            Theme -<br />
            <span className="text-yellow-500">
              Artificial Intelligence and Cybersecurity
            </span>
          </p>
          <p className="mb-1">
            <b>5. </b> All teams must register by{" "}
            <span className="text-yellow-500">20th of January</span>. Late
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
            <b>7. </b> First <span className="text-yellow-500">50 Teams </span>{" "}
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
            <b>1. </b>The Hackathon will be at{" "}
            <span className="text-yellow-500">
              9:30 am to 4:00 pm <span className="text-white">each day –</span>{" "}
              31st Jan 2025 and 1st Feb 2025.
            </span>{" "}
            All submissions must be completed by the end time.
          </p>
          <p className="mb-1">
            <b>2. </b>Projects must be original and created during the
            Hackathon,{" "}
            <span className="text-yellow-500">
              pre-existing code is not allowed
            </span>
            . Plagiarism will result in disqualification.
          </p>
          <p className="mb-1">
            <b>3. </b>{" "}
            <span className="text-yellow-500">Problem Statement</span> will be
            provided by the Organizers.
          </p>
          <p className="mb-1">
            <b>4. </b> Submission will be through{" "}
            <span className="text-yellow-500">Github</span> repo and{" "}
            <span className="text-yellow-500">TechXpression</span> website.
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
            <span className="text-yellow-500">Laptops</span> and{" "}
            <span className="text-yellow-500">Accessories</span>, Organizers
            will be not responsible for any causes and absense of system.
          </p>
          <p className="mb-1">
            <b>2. </b> Tables, Seats, LAN and Charging-points will be{" "}
            <span className="text-yellow-500"> provided</span>
          </p>
          <p className="mb-1">
            <b>3. </b>{" "}
            <span className="text-yellow-500">
              Refreshments <span className="text-white">and</span> Meals
            </span>{" "}
            will be provided.
          </p>
          <p className="mb-1">
            <b>4. </b> Participants can use{" "}
            <span className="text-yellow-500">AI tools</span> to develope the
            Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

const Flow = () => {
  return (
    <div className="flex flex-col items-center py-10 w-[90%] ml-4 md:w-[40%] md:ml-20">
      <p className="text-lg font-bold">
        Event <span className="text-yellow-500">Flow</span>
      </p>
      <div className="text-start mt-4 ">
        <p className="text-s font-bold mb-1">
          Reporting Time: <span className="text-yellow-500">9:00 AM</span> (both
          day)
        </p>
        <p className="text-s font-bold mb-1">
          <span className="text-yellow-500">Day 1</span> : Friday, 31st Jan 2025
        </p>
        <div className="ml-8">
          <p className="mb-2">
            <b>1. </b>Architecture Design:{" "}
            <span className="text-yellow-500"> 1 hour </span>- Participants will
            design and plan the architecture of their application based on the
            problem statement provided.
          </p>
          <p className="mb-2">
            <b>2. </b>Backend Development:{" "}
            <span className="text-yellow-500">4 hours</span>- Teams will work on
            creating the functional backend for their application.
          </p>
        </div>
        <p className="text-s font-bold mb-1">
          <span className="text-yellow-500">Day 2</span> : Saturday, 1st Feb
          2025
        </p>
        <div className="ml-8">
          <p className="mb-2">
            <b>1. </b>UI/UX Design:{" "}
            <span className="text-yellow-500"> 2 hour </span>- Teams will design
            the user interface for their application, ensuring user-friendly and
            visually appealing results.
          </p>
          <p className="mb-2">
            <b>2. </b>Presentation:{" "}
            <span className="text-yellow-500">5 Minutes per Team</span>- Teams
            will showcase their projects to judges, highlighting unique features
            and functionalities.
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
  const [transactionId, setTransactionId] = useState("");
  // const [transactionScreenshot, setTransactionScreenshot] = useState("");
  const [submit, setSubmit] = useState(false);
  const [spinner, setSpinner] = useState(false);
  return (
    <section id="register">
      {submit ? (
        <div className="flex flex-col items-center justify-center pb-40">
          <p className="font-bold text-yellow-500 text-3xl text-center">
            Thank You For Registering
            {/* <span className="text-yellow-500">
              Registration will be starting on
            </span> */}
          </p>
          <p className="font-bold text-yellow-500 text-3xl mb-16 text-center">
            More Opportunities for you...Click below
            {/* 6th January, 2025 on 11:59 AM */}
          </p>
          <CycleText />
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSpinner(true);
            HackathonAction(
              teamName,
              leaderName,
              mobileNumber,
              secondMember,
              thirdMember,
              fourthMember,
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
                    <span className="text-yellow-500">25th Jan,2025</span>
                    <br />
                    <span className="text-yellow-500">
                      On spot Registration not acceptable
                    </span>
                  </span>
                  <p className="text-3xl font-bold">Registration Form:</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-4 ">
                  <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row  items-center m-2">
                      <div>
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
                        placeholder="Leaders Name"
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={leaderName}
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
                        value={secondMember}
                        onChange={(e) => setSecondMember(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Name of third Member  "
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={thirdMember}
                        onChange={(e) => setThirdMember(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Name of fourth Member  "
                        className="mx-4 w-56 p-1 rounded-lg text-black"
                        required
                        value={fourthMember}
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

const tourney = Tourney({
  subsets: ["latin"],
});

// export const Input = React.forwardRef<
//   HTMLInputElement,
//   React.ComponentProps<"input">
// >(({ className, type, ...props }, ref) => {
//   return (
//     <input
//       type={type}
//       className={cn(
//         "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Input.displayName = "Input";

interface TypingTextProps {
  /**
   * Text to type
   */
  text: string;

  /**
   * Delay between typing each character or word (smooth mode) in milliseconds
   * @default 32
   */
  delay?: number;

  /**
   * If true, the text will be erased after typing and then typed again.
   */
  repeat?: boolean;

  /**
   * Custom cursor to show at the end of the text.
   * Applies only when `smooth` is false.
   */
  cursor?: ReactNode;

  /**
   * Additional classes to apply to the container
   */
  className?: string;

  /**
   * If true, the container will grow to fit the text as it types
   */
  grow?: boolean;

  /**
   * Number of characters to keep always visible
   */
  alwaysVisibleCount?: number;

  /**
   * If true, the typing effect will be smooth instead of typing one character at a time.
   * Looks better for multiple words.
   */
  smooth?: boolean;

  /**
   * Time to wait before starting the next cycle of typing
   * Applies only when `repeat` is true.
   *
   * @default 1000
   */
  waitTime?: number;

  /**
   * Callback function to be called when the typing is complete
   */
  onComplete?: () => void;

  /**
   * If true, the cursor will be hidden after typing is complete
   * @default false
   */
  hideCursorOnComplete?: boolean;
}
const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};
export const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
    </motion.div>
  );
};

function Blinker() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <span className={show ? "" : "opacity-0"}>|</span>;
}

function SmoothEffect({
  words,
  index,
  alwaysVisibleCount,
}: {
  words: string[];
  index: number;
  alwaysVisibleCount: number;
}) {
  return (
    <div className="flex flex-wrap whitespace-pre">
      {words.map((word, wordIndex) => {
        return (
          <span
            key={wordIndex}
            className={cn("transition-opacity duration-300 ease-in-out", {
              "opacity-100": wordIndex < index,
              "opacity-0": wordIndex >= index + alwaysVisibleCount,
            })}
          >
            {word}
            {wordIndex < words.length && <span>&nbsp;</span>}
          </span>
        );
      })}
    </div>
  );
}

function NormalEffect({
  text,
  index,
  alwaysVisibleCount,
}: {
  text: string;
  index: number;
  alwaysVisibleCount: number;
}) {
  return (
    <>
      {text.slice(
        0,
        Math.max(index, Math.min(text.length, alwaysVisibleCount ?? 1))
      )}
    </>
  );
}

enum TypingDirection {
  Forward = 1,
  Backward = -1,
}

function CursorWrapper({
  visible,
  children,
  waiting,
}: {
  visible?: boolean;
  waiting?: boolean;
  children: ReactNode;
}) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setOn((prev) => !prev);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!visible || (!on && !waiting)) {
    return null;
  }

  return children;
}

function Type({
  text,
  repeat,
  cursor,
  delay,
  grow,
  className,
  alwaysVisibleCount,
  smooth,
  waitTime = 1000,
  onComplete,
  hideCursorOnComplete,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<TypingDirection>(
    TypingDirection.Forward
  );
  const [isComplete, setIsComplete] = useState(false);

  const words = useMemo(() => text.split(/\s+/), [text]);
  const total = smooth ? words.length : text.length;
  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setIndex((prevDir) => {
        if (
          direction === TypingDirection.Backward &&
          prevDir === TypingDirection.Forward
        ) {
          clearInterval(interval);
        } else if (
          direction === TypingDirection.Forward &&
          prevDir === total - 1
        ) {
          clearInterval(interval);
        }
        return prevDir + direction;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [total, direction, delay]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index >= total && repeat) {
      timeout = setTimeout(() => {
        setDirection(-1);
      }, waitTime);
    }

    if (index <= 0 && repeat) {
      timeout = setTimeout(() => {
        setDirection(1);
      }, waitTime);
    }
    return () => clearTimeout(timeout);
  }, [index, total, repeat, waitTime]);

  useEffect(() => {
    if (index === total && !repeat) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [index, total, repeat, onComplete]);

  const waitingNextCycle = index === total || index === 0;

  return (
    <div className={cn("relative font-mono", className)}>
      {!grow && <div className="invisible">{text}</div>}
      <div
        className={cn({
          "flex justify-center items-center inset-0": !grow,
        })}
      >
        <HiTrophy />
        {smooth ? (
          <SmoothEffect
            words={words}
            index={index}
            alwaysVisibleCount={alwaysVisibleCount ?? 1}
          />
        ) : (
          <NormalEffect
            text={text}
            index={index}
            alwaysVisibleCount={alwaysVisibleCount ?? 1}
          />
        )}
        <CursorWrapper
          waiting={waitingNextCycle}
          visible={Boolean(
            !smooth && cursor && (!hideCursorOnComplete || !isComplete)
          )}
        >
          {cursor}
        </CursorWrapper>
      </div>
    </div>
  );
}

export function TypingText({
  text,
  repeat = true,
  cursor = <Blinker />,
  delay = 32,
  className,
  grow = false,
  alwaysVisibleCount = 1,
  smooth = false,
  waitTime,
  onComplete,
  hideCursorOnComplete = false,
}: TypingTextProps) {
  return (
    <Type
      key={text}
      delay={delay ?? 32}
      waitTime={waitTime ?? 1000}
      grow={grow}
      repeat={repeat}
      text={text}
      cursor={cursor}
      className={className}
      smooth={smooth}
      alwaysVisibleCount={alwaysVisibleCount}
      onComplete={onComplete}
      hideCursorOnComplete={hideCursorOnComplete}
    />
  );
}

export function BoldCopy({
  text,
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        tourney.className,
        className
      )}
    >
      <div
        className={cn(
          "text-4xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-bold uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}

interface IGetStartedButtonProps {
  text: string;
  className?: string;
  href?: string;
}
