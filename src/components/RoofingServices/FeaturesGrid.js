import React from "react";
import { FeatureItem } from "./FeatureItem";

export const FeaturesGrid = ({content, gridCol = "4"}) => {
  return (
    <>
      {gridCol === "4" ? (
        <section className={`grid grid-cols-4 gap-12 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1280px]`}>
          {content.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature.title}
              imageSrc={feature.imageSrc}
            />
          ))}
        </section>
      ) : (
        <section className={`grid grid-cols-3 gap-12 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1280px]`}>
          {content.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature.title}
              imageSrc={feature.imageSrc}
            />
          ))}
        </section>
      )}
    </>
  );
};
