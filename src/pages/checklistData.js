import React from "react";
import CheckmarkIcon from "./roofing/metal/icons/pepicons-pencil_checkmark-filled.svg";

const benefits = [
  "Emergency tarping & leak-stop (within 24 hrs)",
  "Hail-resistant roofing & siding",
  "Full siding repair or re-clad",
  "Free drone & thermal inspections",
  "Insurance claim support",
  "Engineered for Calgary weather",
];

const checklistData = () => {
  return (
    <div className="grid grid-cols-3 gap-4 gap-x-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:h-auto overflow-auto h-fit max-w-[1280px] mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-2">
          <img
            src={CheckmarkIcon}
            alt="Checkmark"
            className="w-6 h-6 flex-shrink-0"
          />
          <p className="text-sm">{benefit}</p>
        </div>
      ))}
    </div>
  );
};

export default checklistData;
