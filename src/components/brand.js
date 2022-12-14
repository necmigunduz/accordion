import React from "react";

const Brand = ({ brandName }) => {
  return (
    <button
      className="
        w-[2.5em] 
        hover:w-[2.6em] 
        hover:h-[2.6em] 
        h-[2.5em] 
        text-center 
        align-center 
        bg-slate-800 
        text-slate-400 
        border-slate-900 
        hover:border-slate-500
        hover:border-slate-800 
        hover:text-slate-100 
        hover:bg-slate-700 
        m-[0.2em]
        border
        rounded-3xl
      "
    >
      {brandName}
    </button>
  );
};

export default Brand;
