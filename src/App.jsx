import { useState } from 'react';
import './App.css';
import Image from './assets/portfolio.png';
import { data, layout } from './data/Experience_graph';
import {data_Skill,layout_skill} from './data/skills_graph'
import Plot from 'react-plotly.js';
import ExperienceCard from './components/ExperienceCard';
import experienceData from './data/experienc.json';

function App() {
  const [company, setCompany] = useState('');

  const selectedExperience = experienceData.positions.find(
    (position) => position.company === company
  );

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="mb-4">
          <img className="rounded-full w-48" src={Image} alt="Portfolio Image" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Muntakimur Rahaman</h1>
          <p className="text-xl">Data Scientist</p>
          
        </div>
        <p className="text-justify mt-4">
            Experienced data scientist with 4 years of expertise in delivering
            innovative solutions in geospatial analysis, computer vision, and time series
            modeling across diverse industries, including Madison.Tech and the
            Australian Oil and Gas sector. Skilled in managing and optimizing spatial
            and temporal databases, with a proven track record of designing analytical
            frameworks to address complex data challenges. Adept at leveraging
            advanced modeling techniques to uncover actionable insights, combining
            creativity and precision to solve problems effectively. A detail-oriented
            team player dedicated to driving data-informed strategies and decisions.
          </p>
      </div>
      <div>
      <marquee direction="">
        <div className="p-4 flex justify-center">
      <div className="w-1/4 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        Data Engineering
      </div>
      <div className="w-1/4 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        Data Science
      </div>
      <div className="w-1/4 rounded-m d bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        Machine Learning
      </div>
      <div className="w-1/4 rounded-m d bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        Deep Learning
      </div>
      <div className="w-1/4 rounded-m d bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        Conversational & Generative A.I.
      </div>
      <div className="w-1/4 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-sm text-white text-center transition-all shadow-sm m-1">
        MLOps Engineering
      </div>
      </div>
      </marquee>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mt-4 mb-2">Work Experience</h2>
        <div className="flex mb-4">
          <div className="w-1/2 p-4" style={{ width: '70%' }}>
            <Plot
              data={data}
              layout={layout}
              config={{ displayModeBar: false }}
              onClick={(event) => setCompany(event['points'][0]['data']['name'])}
            />
          </div>
          <div className="w-1/2 p-4">
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
              <div className="text-2xl font-bold">Click on a point in the graph to view detailed information</div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mt-4 mb-2">Experties</h2>
        <Plot
              data={data_Skill}
              layout={layout_skill}
              config={{ displayModeBar: false,showSendToCloud: true }}
              // onClick={(event) => setCompany(event['points'][0]['data']['name'])}
            />
      </div>

    
    </>
  );
}

export default App;