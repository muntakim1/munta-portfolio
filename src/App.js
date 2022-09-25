import React from "react";

function App() {
  return (
    <div>
      {" "}
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
          <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-8" src="./img/logo.png" alt="" />
              <span className="text-2xl font-bold text-indigo-900 dark:text-white">
                Muntakim.
              </span>
            </div>
            <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
              <li className="hover:text-gray-500">
                <a href="/">home</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#about">about me</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#experience">Work Experience</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#certifications">Certifications</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#services">services</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#works">works</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#contact">contact</a>
              </li>
            </ul>

            {/* <div className="flex">
              <img
                id="moon"
                src="./img/moon.png"
                className="hidden md:block w-5 cursor-pointer"
                alt=""
              />
            </div> */}
            <div
              id="hamburger"
              className="space-y-1 md:hidden cursor-pointer z-20"
            >
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            <ul
              id="menu"
              className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
            >
              <li>
                <a id="hLink" href="/">
                  home
                </a>
              </li>
              <li>
                <a id="hLink" href="#about">
                  about me
                </a>
              </li>
              <li>
                <a id="hLink" href="#experience">
                  Work Experience
                </a>
              </li>
              <li>
                <a id="hLink" href="#certifications">
                  Certifications
                </a>
              </li>
              <li>
                <a id="hLink" href="#services">
                  services
                </a>
              </li>
              <li>
                <a id="hLink" href="#works">
                  works
                </a>
              </li>
              <li>
                <a id="hLink" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="background"></div>
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
          src="./img/man.png"
          alt=""
        />

        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>

        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
          <span className="text-gray-600">Data Scientist</span>
          <p id="text" className="text-red-500"></p>
        </div>

        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">
            Hi, I'm Muntakimur Rahaman
          </h1>
          <p className="text-gray-400">
            IBM's certified Data Scientist, Expert in Computer vision and Data
            Analytics, Experienced in oil and gas industry.
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="./"
          >
            Download CV
          </a>
        </div>
      </div>
      <div id="about" className="px-10 dark:bg-slate-900">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="relative">
            <img
              className="h-1/4 absolute top-0 left-0 -z-10"
              src="./img/dots.png"
              alt=""
            />
            <div className="h-full w-100 rounded-full overflow-hidden">
              <img src="./img/potrait.jpg" className="potrait" alt="" />
            </div>
          </div>

          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>

            <div className="w-100 grid grid-rows-1">
              <div className="col-span-3">
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                  "A Data Scientist who has more than one year of industry
                  experience in working with Big Data analytics and GIS
                  applications development using CesiumGS and Mapbox, computer
                  vision and timeseries analysis. Now working as a full-time
                  remote Data Scientist in an Australian based oil and gas
                  analytic firm.
                </blockquote>
              </div>
              <br />
              <div className="col-span-3">
                <p className="text-gray-500">
                  Muntakimur Rahaman 🐱‍🏍 is a technology geek and passionate
                  person for big data technologies, he has working experience in
                  managing streaming data from various resources. His background
                  in data science, big data infrastructure, problem-solving
                  strategy, data visualization, and project management inform
                  his mindful but competitive approach.
                  <br />
                  Muntakim is fueled by his passion for understanding the
                  nuances of data science and data engineering. He considers
                  himself a ‘forever student,’ eager to both builds on his
                  academic foundations in machine learning and data engineering
                  and stay in tune with the latest big data technologies through
                  continued coursework. His hunger for knowledge and
                  determination to turn information into action has contributed
                  to his most recent success at Leading Data Solutions, where he
                  deployed batch MapReduce and machine learning pipelines in a
                  large amount of data without any fault or failure.
                  <br /> Meanwhile, he vastly improved the productivity of his
                  team by implementing strategic project management methods and
                  ensuring a work-life balance for his department. Muntakim
                  believes mindfulness in the workplace is key to success - a
                  tenet he lives out through his interests in gym, meditation,
                  gardening, and reading. Muntakim is currently working as a
                  freelance data visualization expert & big data consultant in
                  Fiverr and also a full-time backend engineer in an Aussi
                  real-estate SAAS startup and is always interested in a
                  challenge. Reach out to{" "}
                  <a href="mailto:muntakim.cse@gmail.com">
                    muntakim.cse@gmail.com
                  </a>{" "}
                  to connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="py-40 dark:bg-slate-900">
        <div className="container mx-auto mt-25">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">Work Experience</h1>
            <h1 className="text-3xl dark:text-white">
              How long I am in the industry?
            </h1>

            <p className="w-1/2 mb-5  text-center text-gray-400">
              After graduating from University I start working as a Data
              Scientist in different multinational companies in remote position.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex items-center flex-wrap justify-center">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4 mr-5">
                <span className="flex absolute -left-3 justify-center items-center w-5 h-5 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 animate-ping text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>

                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2022 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Data Scientist
                </h3>
                <h4 className="text-lg font-light text-gray-900 dark:text-white">
                  Innova-analytics.ai, Australia & Oman
                </h4>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Developed Data Products</li>
                    <li>Created Computer vision Products</li>
                    <li>Working closely with executive managers</li>
                  </ul>
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2021 - June 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Big Data Engineer & Data Scientist
                </h3>
                <h4 className="text-lg font-light text-gray-900 dark:text-white">
                  Leading Data Engineers, NSW, Australia
                </h4>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Developed Realestate Genertive design algorithm</li>
                    <li>Created City planner algorithm</li>
                    <li>Developed Data pipeline</li>
                    <li>Managed and handled Big Data pipeline</li>
                    <li>Working closely with executive managers</li>
                  </ul>
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  November 2020-October 2020
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Data Scientist Intern
                </h3>
                <h4 className="text-lg font-light text-gray-900 dark:text-white">
                  FamaCash.com, Collegeville, PA 19426, USA
                </h4>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Developed Fraud Detection model</li>
                    <li>
                      Developed KyC/AML system using Advance machine learning.
                    </li>
                    <li>Working closely with executive managers</li>
                  </ul>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="certifications" className="py-40 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">Certifications</h1>
            <h1 className="text-3xl dark:text-white">
              Where did I learn from?
            </h1>
            <p className="w-1/2 text-center text-gray-400">
              I have taken various courses from Coursera and other online
              platforms. This courses helped me to start a career in this
              domain.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <div
                data-iframe-width="200"
                data-iframe-height="270"
                data-share-badge-id="cb94013e-0b13-4ad0-9f08-61363386f55c"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 justify-center md:my-10 m-1 transition-all hover:scale-110">
              <div
                data-iframe-width="200"
                data-iframe-height="270"
                data-share-badge-id="77a6d454-ae9f-4b9b-9710-854362362a89"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <div
                data-iframe-width="200"
                data-iframe-height="270"
                data-share-badge-id="a13f7882-9278-4e8a-9183-9d84a9529bcb"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl items-center justify-center rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.cloudskillsboost.google/public_profiles/540fda08-070c-4c10-904c-5fcf2a53ebed/badges/710377">
                {" "}
                <img
                  className="mr-5 mt-5"
                  width="200px"
                  src="./img/assets/aws_1.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.cloudskillsboost.google/public_profiles/540fda08-070c-4c10-904c-5fcf2a53ebed/badges/730729">
                <img
                  className="mr-5 mt-5"
                  width="200px"
                  src="./img/assets/aws.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>

            <div className="w-full class-Certification  md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.cloudskillsboost.google/public_profiles/6ae54ab8-25fc-4171-9d14-b954cfb3c23a/badges/710646">
                <img
                  className="mr-5 mt-5"
                  width="200px"
                  src="./img/assets/gcp.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.cloudskillsboost.google/public_profiles/6ae54ab8-25fc-4171-9d14-b954cfb3c23a/badges/698166">
                <img
                  className="mr-5 mt-10"
                  width="200px"
                  src="./img/assets/gcp_1.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>

            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <div
                data-iframe-width="200"
                data-iframe-height="270"
                data-share-badge-id="9536a13b-88d4-4a69-852b-e2ef45543142"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://coursera.org/share/caca134d5a50f3628fc32039bb5446ba">
                <img
                  className="mr-5 mb-5 mt-10"
                  width="200px"
                  src="./img/assets/coursera_1.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>
            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://coursera.org/share/61d099c6a232140a205d57bf91ef3a9e">
                <img
                  className="mr-5 mt-10"
                  width="200px"
                  src="./img/assets/coursera_2.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>
            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.linkedin.com/learning/certificates/2506830f0cc251cc0e5e021ff678a19c2035f96b98760707dbbafb6c2ca84185?trk=share_certificate">
                <img
                  className="mr-5 mt-10"
                  width="200px"
                  src="./img/assets/linkedin.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>
            <div className="w-full class-Certification md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <a href="https://www.linkedin.com/learning/certificates/3f91b5138896995da7f4a9b3e5cf19293236c790fac9ac7794ce6a385e1fcec3?trk=share_certificate">
                <img
                  className="mr-5 mt-10"
                  width="200px"
                  src="./img/assets/linkedin_2.png"
                  alt="aws-1"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className=" py-40 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">SERVICES</h1>
            <h1 className="text-3xl dark:text-white">What do I offer?</h1>
            <p className="w-1/2 text-center text-gray-400">
              As a motivated Data Scientist with specialist expertise to assists
              the decision makers to take decisions based on data and helping
              them to improve their existing products and marketing strategy
              using data analysis & data science.
            </p>
          </div>

          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Data Driven Product Development
              </h1>
              <p className="text-gray-400">
                I specialize in creating data driven products for the business
                need.
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Dash Plotly
                </span>
                <span class="px-4 py-2 rounded-full text-white bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Postgres
                </span>
                <span class="px-4 py-2 rounded-full text-white bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Python
                </span>
                <span class="px-4 py-2 rounded-full text-white bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Docker
                </span>
              </div>
            </div>

            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Computer Vision
              </h1>
              <p className="text-gray-400">
                I specialize in creating computer vision models for object
                detection and Image classsification.
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white-200 bg-green-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Open Cv
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-green-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Tensorflow & Pytorch
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-green-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Python
                </span>
              </div>
            </div>

            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Data Analytics
              </h1>
              <p className="text-gray-400">
                I create dashboard insights for the subject matter experts to
                take better decisions.
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white-200 bg-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Scikit learn
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  plotly
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Jupyter Notebook
                </span>
              </div>
            </div>

            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Time Series Analysis
              </h1>
              <p className="text-gray-400">
                I specialize in creating timeseries models for forecasting and
                prediction according to the business needs.
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white-200 bg-purple-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Scikit learn
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-purple-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  fbprophet
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-purple-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Jupyter Notebook
                </span>
              </div>
            </div>

            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Dashboard Development
              </h1>
              <p className="text-gray-400">
                I specialize in creating interactive dashboards to show the
                insights
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white bg-orange-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Power BI
                </span>
                <span class="px-4 py-2 rounded-full text-white bg-orange-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Tableau
                </span>
                <span class="px-4 py-2 rounded-full text-white bg-orange-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Dash Plotly
                </span>
              </div>
            </div>

            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
              <img className="w-10" src="./img/icon.png" alt="" />
              <h1 className="font-medium text-lg dark:text-white">
                Natural Language processing
              </h1>
              <p className="text-gray-400">
                I specialize in creating bots using NLP and BERTS.
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span class="px-4 py-2 rounded-full text-white-200 bg-yellow-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  BERT
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-yellow-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Gensim
                </span>
                <span class="px-4 py-2 rounded-full text-white-200 bg-yellow-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Transformers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="works" className="py-40 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
            <h1 className="text-3xl dark:text-white">Works & Projects</h1>
            <p className="w-1/2 text-center text-gray-400">
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee, I turn your
              requirements into a well-designed websites
            </p>
          </div>

          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>

            <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src="./img/item.png" alt="1" />
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-indigo-600 font-bold">CONTACT</h1>
            <h1 className="text-3xl dark:text-white">Have a Question?</h1>
            <p className="w-1/2 text-center text-gray-400">
              Do you have an idea? Let's discuss it and see what we can do
              together.
            </p>
          </div>

          <form className="mt-5 p-8 flex flex-col gap-5 items-center">
            <input
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              type="text"
              placeholder="Name Surname"
            />
            <input
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full bg-gray-800">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-8" src="./img/logo.png" alt="" />
            <span className="text-2xl font-bold text-white">Portwind.</span>
          </div>
          <span className="hidden md:block font-medium text-white">
            © 2022 Portwind. Design with ♥️ by Lama Dev.
          </span>
          <div className="flex gap-2">
            <img
              className="w-4 cursor-pointer"
              src="./img/facebook.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="./img/instagram.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="./img/twitter.png"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="./img/linkedin.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
