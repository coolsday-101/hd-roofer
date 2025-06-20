import React from "react";

export const InsulationCheckItem = ({ icon, text }) => {
  return (
    <li className="flex gap-2 items-center w-full max-md:max-w-full">
      <img
        src={icon}
        alt=""
        className="object-contain mt-0 shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <p className="self-stretch my-auto text-gray-950">{text}</p>
    </li>
  );
};
