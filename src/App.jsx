import { useState } from "react";
import "./App.css";
import Image from "./assets/portfolio.png";
import Experience from "./components/pages/Experience";
import { data_Skill, layout_skill } from "./data/skills_graph";
import experienceData from "./data/experienc.json";
import { Tags } from "./components/pages/Tags";
import { Hero } from "./components/pages/Hero";
import Skills from "./components/pages/Skills";
import ChatOverlay from "./components/ChatOverlayComponent";
import ContactSection from "./components/pages/Contacts";
import TestimonialSlideshow from "./components/pages/Testimonials";
import Education from "./components/pages/Education";

function App() {
  const [company, setCompany] = useState("");
  const selectedExperience = experienceData.positions.find(
    (position) => position.company === company
  );

  return (
    <div className=" bg-gray-900 py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 h-full">
        <div className="bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 opacity-50"></div>
      </div>

      <div className="flex flex-col items-center p-4">
        <div className="mb-4">
          <img
            className="rounded-full w-48"
            src={Image}
            alt="Portfolio Image"
          />
        </div>
        <Hero></Hero>
      </div>
      <Tags></Tags>
      <Experience
        setCompany={setCompany}
        selectedExperience={selectedExperience}
      ></Experience>
      <Skills data_Skill={data_Skill} layout_skill={layout_skill}></Skills>
      <Education></Education>
      <ChatOverlay></ChatOverlay>
      <TestimonialSlideshow></TestimonialSlideshow>
      <ContactSection />
    </div>
  );
}

export default App;
