import React from "react";
import Plot from "react-plotly.js";

const Skills = ({ data_Skill, layout_skill }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mt-4 mb-8">Experties</h2>
      <Plot
        data={data_Skill}
        layout={layout_skill}
        config={{ displayModeBar: false, showSendToCloud: true }}
        // onClick={(event) => setCompany(event['points'][0]['data']['name'])}
      />
    </div>
  );
};

export default Skills;
