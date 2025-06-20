import React, { useState } from "react";
import "./HideScrollBar.css";
//import ToggleComponent from "./ToggleComponent";

const CategoryPicker = ({ categories, selectedCategory, onCategoryChange, count }) => {
  return (
 <div className="flex flex-col items-center w-[100%] text-center max-mobile2:overflow-x-auto hide-scrollbar mb-12">

  <div className="relative flex space-x-4 bg-white rounded-full p-[0.25rem] justify-around max-mobile2:ml-[650px] hide-scrollbar">
  {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(index)}
          className={`px-4 py-2 rounded-sm md:text-base font-bold transition-all w-fit max-mobile2:w-[150px] cursor-pointer border border-gray3 ${
            selectedCategory === index
              ? "bg-blue2 text-white"
              : "bg-white text-blue2"
          } ${index === 0 ? "!ml-0" : ""}`}
        >
          {category} {index === 1 ? "(8)" : index === 2 ? "(7)" : index === 3 ? "(17)" : index === 4 ? "(7)" : ""}
        </button>
      ))}
  </div>
  </div>

    /*<div className="flex justify-center gap-4 mb-6 w-fit mx-auto my-0 border rounded-full p-1 max-mobile1:w-[100%]">
      <div>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(index)}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            selectedCategory === index
              ? "bg-[#214083] text-white"
              : "bg-white text-[#214083]"
          }`}
        >
          {category}
        </button>
      ))}
      </div>
    </div>*/
  );
};

export default CategoryPicker;
