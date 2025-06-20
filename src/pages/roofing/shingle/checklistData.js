import React from "react";
import CheckmarkIcon from "./icons/pencil_checkmark-filled.svg";

const benefits = [
  "Copper-infused granules help prevent staining, moss, and algae growth",
  "UV protection in modern shingles lasts longer than older styles",
  "Cost-effective and quick to install",
  "Flexible, durable fiberglass and asphalt composition",
  "Improved tar/sealant strips offer stronger adhesion",
  "Shingles are recyclable after removal",
  "Steeper slopes increase lifespan and strength",
  "Can be walked on safely without causing damage",
  "Year-round installation possible",
  <>
    Backed by{" "}
    <span className="text-orange font-bold">
      40–50 year manufacturer warranties and a 10-year transferable workmanship
      warranty
    </span>
  </>,
  "Available in a wide range of styles and colours to match your home",
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
