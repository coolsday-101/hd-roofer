import React from "react";
import CheckmarkIcon from "./icons/pepicons-pencil_checkmark-filled.svg";

const benefits = [
  "Adds value to your home",
  "Cuts down on heating and cooling costs",
  "Can reduce your homeowner’s insurance premium",
  "Superior resistance to wind, fire, hail, and falling debris",
  "Installs over shingles—no need for tear-off",
  "Zinc and aluminum coatings prevent rust and corrosion",
  "High snow load strength, perfect for Canadian winters",
  "Quiet performance when installed over solid sheathing",
  "Virtually maintenance-free",
  "Available in a variety of colours and modern styles",
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
