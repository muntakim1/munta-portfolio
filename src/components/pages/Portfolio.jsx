import React from "react";
import PORTFOLIO1 from "../../assets/portfolio/project-1.png";
import PORTFOLIO2 from "../../assets/portfolio/project-2.gif";
import PORTFOLIO4 from "../../assets/portfolio/project-4.gif";
import PORTFOLIO3 from "../../assets/portfolio/project-3.gif";
import PhotoGrid from "../PhotoGallery";
const Portfolio = () => {
  const photos = [
    {
      src: PORTFOLIO1,
      alt: "LLM powered Dashboard",
    },
    {
      src: PORTFOLIO2,
      alt: "Vibration Analysis App",
    },
    {
      src: PORTFOLIO4,
      alt: "Railway Safety detection",
    },
    {
      src: PORTFOLIO3,
      alt: "Cost Estimation App",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mt-4">Portfolio</h2>
      <div className="mt-4">
        <PhotoGrid photos={photos}></PhotoGrid>
      </div>
    </div>
  );
};

export default Portfolio;
