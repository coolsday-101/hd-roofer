import React from "react";
import { BenefitsCard } from "./BenefitsCard";

export const BenefitsGrid = () => {
  return (
    <section className="flex flex-wrap flex-1 gap-2 mt-12 text-white size-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center min-w-60 w-[505px] max-md:max-w-full">
        <BenefitsCard
          title="Protection"
          description="Shields your home from harsh weather—wind, rain, and snow."
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc749a2ae97e4cbc511eb808a19abbe8fb7c01a?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
        />
        <div className="mt-2">
          <BenefitsCard
            title="Energy Efficiency"
            description="Helps with wall insulation, reducing heating and cooling costs."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8af46bf931db54ee235e2ed51842f89f6b3ef6be?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60 max-md:max-w-full">
        <BenefitsCard
          title="Curb Appeal"
          description="Boosts your home's appearance and increases property value."
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa2d8f022d6a46a136482f278be6efd168dc3ed?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
        />
        <div className="flex flex-wrap flex-1 gap-2 mt-2 size-full max-md:max-w-full">
          <div className="flex-1 shrink basis-0 min-w-60">
            <BenefitsCard
              title="Pest and Moisture Control"
              description="Prevents damage from insects and water infiltration."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/49df61dbd60c9b459703ae3ae679df55ce82a17c?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
            />
          </div>
          <div className="flex-1 shrink basis-0 min-w-60">
            <BenefitsCard
              title="Low Maintenance"
              description="Modern siding options require minimal upkeep."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7fce7efd79b674df6ff1422557b52ad68701ecd3?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
