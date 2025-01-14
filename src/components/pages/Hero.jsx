import React from "react";
import GITHUB from "../../assets/github-logo.png";
import LINKEDIN from "../../assets/linkedin.png";
export const Hero = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Muntakimur Rahaman</h1>
        <p className="text-xl">Data Scientist</p>
        <div className="flex flex-row items-center justify-center relative">
          <a
            className="px-1 py-1 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 mr-1"
            href="https://www.github.com/muntakim1"
          >
            <img src={GITHUB} alt="" width={25} />
          </a>
          <a
            className="px-1 py-1 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 ml-1"
            href="https://www.linkedin.com/in/muntakim1/"
          >
            <img src={LINKEDIN} alt="" width={25} />
          </a>
        </div>
      </div>
      <p className="text-justify mt-4">
        Experienced data scientist with 4 years of expertise in delivering
        innovative solutions in geospatial analysis, computer vision, and time
        series modeling across diverse industries, including Madison.Tech and
        the Australian Oil and Gas sector. Skilled in managing and optimizing
        spatial and temporal databases, with a proven track record of designing
        analytical frameworks to address complex data challenges. Adept at
        leveraging advanced modeling techniques to uncover actionable insights,
        combining creativity and precision to solve problems effectively. A
        detail-oriented team player dedicated to driving data-informed
        strategies and decisions.
      </p>
    </div>
  );
};
