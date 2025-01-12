import React from "react";

export const Tags = () => {
  return (
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
  );
};
