/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
  FiMapPin,
} from "react-icons/ai";

import Image from "next/legacy/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import wanderLust from "../public/wanderlust2.0.png";
import workDay from "../public/workday-scheduler.png";
// import jate from "../public/jate7.JPG";
import passGen from "../public/passwordGenerator2.png";
import { useState } from "react";

const grayGradient = "bg-gradient-to-b from-gray-200 to-gray-600";
const paddingAndRadius = "px-4 py-2 rounded-lg";
const darkStyles = "dark:bg-gray-800";
// const darkStyles = "dark:bg-gray-800 dark:text-white";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kobys Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  Start of Page */}
      <main className={`px-10 bg-pink-200 text-black pb-20 space-y-10 selection:bg-fuchsia-300 selection:text-fuchsia-900 md:px-20 lg:px-40 ${darkStyles}`}>
        {/* Navbar */}
        <section>
          <nav className="mb-12 p-6 pt-6 flex justify-center shadow-lg bg-indigo-200 rounded-b-lg  border-2 border-gray-400">
            <ul className="flex items-center text-lg">
              <li className="px-4 hover:text-pink-400 ">
                <a href="#home">Home</a>
              </li>
              <li className="px-4 hover:text-pink-400">
                <a href="#background">Background</a>
              </li>
              <li className="px-4 hover:text-pink-400">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="px-4 hover:text-pink-400">
                < BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>
        {/* Home */}
        <section
          id="home"
          className="bg-purple-200 min-h-screen shadow-lg rounded-lg border-2 border-gray-400"
        >
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-pink-400 font-medium md:text-6xl ">
              Koby Sillito
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Hi, I'm Koby, a full stack developer from the US. I'm currently
              studying at the University of Texas, and I'm looking for a
              placement.
            </p>
          </div>
          {/* Socials */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/KobyS82" target="_blank">
              <AiFillGithub className="hover:text-pink-400"/>
            </a>
            <a
              href="https://www.linkedin.com/in/koby-sillito/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-pink-400"/>
            </a>
            <a
              href="https://docs.google.com/document/d/17N3A6zOqL7IJ6HCXbcePu9OvhL8HGvxpBMXVfIZhKWc/edit?usp=sharing"
              target="_blank"
            >
              <AiFillFileText className="hover:text-pink-400"/>
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-pink-300 to-indigo-200 rounded-full w-80 h-80 m-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="dev ed" layout="fill" objectFit="cover" className="hover:animate-spin-slow"/>
          </div>
        </section>

        {/* Background */}
        <section id="background" className="p-10 bg-purple-200 rounded-lg shadow-lg border-2 border-gray-400">
          <div className="">
            <h3 className="text-3xl py-1">Background</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am currently in a
              <span className="text-teal-500"> certificate </span> program at the <span className="text-teal-500">University Of Texas</span> for full stack development. I will be graduating May 2023 being ready to enter the job market. I am constantly learning new languages and frameworks. Here are some languages that I am already proficient in:
            </p>
          </div>
          {/* Cards */}
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-indigo-200">
              <div className="flex justify-center">
                <Image src={design} alt="3d-design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                HTML & CSS
              </h3>
              <p className="py-2">
                I have lots of practice with HTML and CSS, and I am very comfortable with both.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks I use</h4>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Handlebars</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-indigo-200">
              <div className="flex justify-center">
                <Image src={code} alt="3d-design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                JavaScript
              </h3>
              <p className="py-2">
                JavaScript is my favorite language to work with. I have experience with both vanilla JavaScript and React.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks I use:</h4>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">jQuery.js</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-indigo-200">
              <div className="flex justify-center">
                <Image
                  src={consulting}
                  alt="3d-design"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Backend
              </h3>
              <p className="py-2">
                I have experience with both SQL and NoSQL databases. I am also comfortable with Node.js.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks I use</h4>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Sequelize</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="p-10 bg-purple-200 rounded-lg shadow-lg border-2 border-gray-400">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
                My projects, currently, are mainly from my coding bootcamp. I am currently working on a few projects that I will be adding to my portfolio soon.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Here are some projects that I have worked on:
            </p>
          </div>
          {/* Cards */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg rounded-lg">
              <div className="bg-indigo-200 shadow-lg rounded-t-lg flex flex-col flex-wrap text-center">
                <h4 className="font-bold">Wanderlust</h4>
                <p>Wanderlust is a travel blog where users can post daily uploads about their trip.</p>
                <p>For this project, I worked mostly on the controllers, handlebars, and troubleshooting errors.</p>
                <a className="font-semibold hover:text-pink-400 hover:font-bold" href="https://github.com/TMortara/Travel-Blog/deployments" target={"_blank"}>Link to Repo</a>
              </div>
              <a href="https://quiet-everglades-33653.herokuapp.com/" target="_blank">
                <Image
                  src={wanderLust}
                  alt="wanderlust"
                  className="rounded-b-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg rounded-lg">
              <div className="bg-indigo-200 shadow-lg rounded-t-lg flex flex-col flex-wrap text-center">
                <h4 className="font-bold">Workday Scheduler</h4>
                <p>This scheduler can be used to track the time and save todos in a browser</p>
                <p>For this project, I implimented DayJS and worked on local storage.</p>
                <a className="font-semibold hover:text-pink-400 hover:font-bold" href="https://github.com/KobyS82/Work-Day-Scheduler" target={"_blank"}>Link to Repo</a>
              </div>
              <a href="https://kobys82.github.io/Work-Day-Scheduler/" target="_blank">
                <Image
                  src={workDay}
                  alt="Nike"
                  className="rounded-b-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg rounded-lg">
              <div className="bg-indigo-200 shadow-lg rounded-t-lg flex flex-col flex-wrap text-center">
                <h4 className="font-bold">JATE</h4>
                <p>This page will serve as a text editor that can be downloaded and used offline</p>
                <p>For this project, I implimented IndexedDB to create a progressive web application (PWA).</p>
                <a className="font-semibold hover:text-pink-400 hover:font-bold" href="https://github.com/KobyS82/Text-Editor" target={"_blank"}>Link to Repo</a>
              </div>
              <a href="https://text-editor-kobys.herokuapp.com/" target="_blank">
                {/* <Image
                  src={jate}
                  alt="Nike"
                  className="rounded-b-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                /> */}
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg rounded-lg">
              <div className="bg-indigo-200 shadow-lg rounded-t-lg flex flex-col flex-wrap text-center">
                <h4 className="font-bold">Password Generator</h4>
                <p>This page will serve as a tool to help create a password for a user that can have many variations.</p>
                <p>For this project, I implimented event listeners and algorithyms to create a random passwords.</p>
                <a className="font-semibold hover:text-pink-400 hover:font-bold" href="https://github.com/KobyS82/Password-Generator" target={"_blank"}>Link to Repo</a>
              </div>
              <a href="https://kobys82.github.io/Password-Generator/" target="_blank">
                <Image
                  src={passGen}
                  alt="Nike"
                  className="rounded-b-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
