import React from "react";
import CheckmarkIcon from "./icons/pepicons-pencil_checkmark-filled.svg";

const benefits = [
  <>
    Additional{" "}
    <span className="text-orange font-bold">
      insulation can be added above the roof
    </span>{" "}
    for better energy efficiency
  </>,
  <>
    Flat roofs allow for{" "}
    <span className="text-orange font-bold">deck or entertainment space</span>{" "}
    installations
  </>,
  <>
    Certain designs can be framed and expanded into{" "}
    <span className="text-orange font-bold">usable living areas</span>
  </>,
  <>
    Ideal for structures with{" "}
    <span className="text-orange font-bold">low or no slope</span>
  </>,
  <>
    <span className="text-orange font-bold">Green roof systems</span> can be
    added for rainwater control and a maintenance-free finish
  </>,
  <>
    <span className="text-orange font-bold">Skylights</span> on flat roofs bring
    natural light into your home all day
  </>,
  <>
    Flat roofing materials are{" "}
    <span className="text-orange font-bold">durable and walkable</span>
  </>,
  <>
    Flat roofs often require{" "}
    <span className="text-orange font-bold">little to no ventilation</span>
  </>,
  <>
    <span className="text-orange font-bold">Continuous insulation</span> on top
    eliminates heat loss through wood framing gaps
  </>,
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
