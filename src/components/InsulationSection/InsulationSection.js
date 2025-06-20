import React from "react";
import { InsulationContent } from "./InsulationContent";

export const InsulationSection = () => {
  return (
    <section className="flex flex-col justify-center p-16 max-md:py-9 w-full text-sm font-semibold bg-cloud-grey max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-16 w-full min-h-[318px] max-md:max-w-full max-w-[1280px] mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9cfe5051888e715e2f3dd0ad762d94987529b19?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Home insulation illustration"
          className="object-contain flex-1 shrink w-full aspect-[1.71] basis-0 min-w-60 max-md:max-w-full"
        />
        <InsulationContent />
      </div>
    </section>
  );
};

export default InsulationSection;
