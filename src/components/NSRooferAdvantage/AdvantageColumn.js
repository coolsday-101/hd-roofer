import React from "react";
import { FeatureSection } from "./FeatureSection";

export const AdvantageColumn = ({ features }) => {
  return (
    <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
      {features.map((feature, index) => (
        <div key={index} className={index > 0 ? "mt-6" : ""}>
          <FeatureSection
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  );
};
