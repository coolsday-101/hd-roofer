import React from "react";

const FilterTag = ({ label, isActive }) => {
  return (
    <button
      className={`gap-2.5 self-stretch px-3 py-2 my-auto rounded text-xs font-medium cursor-pointer transition-colors
        ${isActive
          ? "bg-slate-500 text-white"
          : "bg-white text-slate-500 border border-solid border-[#D8E2EB]"
        }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default FilterTag;
