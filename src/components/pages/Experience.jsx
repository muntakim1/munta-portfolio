import React from "react";
import ExperienceCard from "../ExperienceCard";
import { data, layout } from "../../data/Experience_graph";
import Plot from "react-plotly.js";

const Experience = ({ setCompany, selectedExperience }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mt-4 mb-2">
        Work Experience
      </h2>
      <div className="flex mb-4">
        <div className="w-1/3 p-4" style={{ width: "65%" }}>
          <Plot
            data={data}
            layout={layout}
            config={{ displayModeBar: false }}
            onClick={(event) => setCompany(event["points"][0]["data"]["name"])}
          />
        </div>
        <div className="w-2/3 p-4">
          {selectedExperience ? (
            <ExperienceCard
              company={selectedExperience.company}
              title={selectedExperience.title}
              duration={selectedExperience.duration}
              employnent_type={selectedExperience.employmentType}
              location={selectedExperience.location}
              responsibilities={selectedExperience.responsibilities}
            />
          ) : (
            <div className="text-2xl font-bold">
              Click on a point in the graph to view detailed information
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
