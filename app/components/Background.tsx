"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Orbitron } from "next/font/google";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef, useState } from "react";
import styles from "./ui/CornerNav.module.css";
import Link from "next/link";
import Image from "next/image";

const orb = Orbitron({
  subsets: ["latin"],
});

export const Background = () => {
  return (
    <>
      <div className="bg-zinc-950 ">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            // infinite: true,
            // syncTouch: true,
          }}
        >
          <Nav />
          <Scroll />
          <Hero />
          {/* <div>
            <div className="absolute flex  md:left-[29%] ml-16  justify-center items-center  mt-6">
              <div className="flex flex-col justify-center items-center text-center  md:text-2xl text-s font-bold">
                <p>
                  B. K. Birla College, Kalyan <br />
                  (Empowered Autonomous Status)
                  <br />
                  <br />
                </p>
                <div className="md:text-4xl text-xl">
                  <p className={orb.className}>TechXpression 2025</p>
                </div>
              </div>
            </div>
            <div className="absoulte flex justify-center pt-40">
              <img src="/TX.png" />
            </div>
          </div> */}
          <Schedule />
          {/* <Creds /> */}
        </ReactLenis>
      </div>
    </>
  );
};

// const Creds = () => {
//   return (
//     <div className="flex flex-col justify-center items-center text-white text-s pb-10 opacity-30">
//       <p>Copyright - B. K. Birla College, Kalyan</p>
//       <p>
//         Developed by{" "}
//         <a
//           href="https://www.linkedin.com/in/sanskar-gaikwad"
//           className="text-yellow-500"
//         >
//           Sanskar Gaikwad{" "}
//         </a>{" "}
//         {/* and{" "}
//         <a
//           href="https://www.linkedin.com/in/aditya-naikwadi-2753a72a1/"
//           className="text-yellow-500"
//         >
//           {" "}
//           Aditya Naikwadi
//         </a> */}
//       </p>
//     </div>
//   );
// };

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between">
      <div>
        <Image 
          width={20}
          height={20}
          src="/TX.png"
          alt="TechXpression"
          className="fixed w-16 ml-4 mt-2"
        />
      </div>
      <div
        className={`flex flex-row ${styles.navContainer} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div className="flex flex-row pt-2 pr-4">
          <button
            onClick={() => {
              document.getElementById("launch-schedule")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="flex justify-center"
          >
            EVENTS
            {/* <FiArrowRight /> */}
          </button>
        </div>
        <div className="flex flex-col">
          <button className={styles.navToggle} onClick={toggleNav}>
            ☰
          </button>
          <nav
            className={`bg-yellow-400 font-bold bg-opacity-80 ${styles.nav} ${
              isOpen ? styles.show : ""
            }`}
          >
            <ul className="ul">
              <li className="li pl-2">
                <Link href="LS">Live Stream</Link>
              </li>
              <li className="li pl-2">
                <Link href="Map">Map</Link>
              </li>
              <li className="li pl-2">
                <Link href="CC">Coded Connection</Link>
              </li>
              <li className="li pl-2">
                <Link href="CU">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Scroll = () => {
  return (
    <div className="  flex flex-row justify-center opacity-30 md:opacity-10 md:text-lg text-x  pt-20">
      <MdKeyboardDoubleArrowDown className="mt-1" />
      Scroll for more details
      <MdKeyboardDoubleArrowDown className="mt-1" />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["10%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <>
      <div className="absolute flex left-[1%]  md:left-[24%]   justify-center items-center  mt-6">
        <div className="flex flex-col justify-center items-center text-center  md:text-2xl text-s font-bold">
          <p>
            B. K. Birla College, Kalyan <br />
            (Empowered Autonomous Status)
            <br />
            <br />
          </p>
          <div className="md:text-4xl text-yellow-500">
            <p className={orb.className}>TechXpression 2025</p>
          </div>
          <div className="text-s md:text-3xl">
            <p className={orb.className}>
              AI Nexus: Bridging Innovation with security
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="sticky top-0 h-screen w-full bg-img-inherit"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage: "url(/TX.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]  ">
      <ParallaxImg
        src="/AI.jpg"
        alt="AI"
        start={-200}
        end={200}
        className="md:w-1/3 w-7/12"
      />
      <ParallaxImg
        src="/AIN.jpg"
        alt="AIN"
        start={300}
        end={-100}
        className="mx-auto md:w-2/3 w-4/4"
      />
      <ParallaxImg
        src="/AIC.png"
        alt="Date"
        start={300}
        end={200}
        className="ml-auto md:w-1/3 w-2/4"
      />
      <ParallaxImg
        src="/TXB.jpg"
        alt="TXB"
        start={400}
        end={200}
        className="m-auto w-9/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Events Schedule
      </motion.h1>
      <ScheduleItem
        href="/ht"
        title="Hackathon"
        date="31st Jan & 1st Feb"
        location="Seminar Hall, IT-Building"
      />
      <ScheduleItem
        href="/gvg"
        title="Geeks vs Geeks"
        date="31st Jan & 1st Feb"
        location="Main Lab, IT-Building"
      />
      <ScheduleItem
        href="/tth"
        title="Tech Treasure Hunt"
        date="31st Jan"
        location="Bvoc and M.Fin Lab"
      />
      <ScheduleItem
        href="/tsu"
        title="TechStar Unplugged"
        date="31st Jan"
        location="Central Lawn"
      />
      <ScheduleItem
        href="/aic"
        title="AIcons"
        date="1st Feb"
        location="IOT Lab, NR-Building"
      />
      <ScheduleItem
        href="/aicf"
        title="AI Cyber Forensics"
        date="1st Feb"
        location="IOT Lab, NR-Building"
      />
    </section>
  );
};

const ScheduleItem = ({ title, date, location, href }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <a href={href} className="cursor-pointer">
        <div>
          <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
          <p className="text-sm uppercase text-zinc-500">{date}</p>
        </div>
      </a>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
