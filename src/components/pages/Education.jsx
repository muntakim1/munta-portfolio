import React from "react";
import Plot from "react-plotly.js";
import { data_education, layout_education } from "../../data/education";
const Education = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mt-4">Education</h2>
      <div className="mt-4">
        <Plot
          data={data_education}
          layout={layout_education}
          config={{ displayModeBar: false, showSendToCloud: true }}
          // onClick={(event) => setCompany(event['points'][0]['data']['name'])}
        />
      </div>
    </div>
  );
};

export default Education;
