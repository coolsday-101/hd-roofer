import React from "react";
import BenefitCard from "./BenefitCard";
import EfficiencyImage from "./imgs/mdi_home-energy.svg";
import LongevityImage from "./imgs/weui_time-filled.svg";
import InsuranceImage from "./imgs/gridicons_stats-down-alt.svg";
import FriendlyImage from "./imgs/material-symbols_eco.svg";

const RoofBenefits = () => {
  const benefits = [
    {
      icon: EfficiencyImage,
      title: "Energy Efficiency",
      description:
        "Metal roofs reflect heat in the summer and retain warmth in the winter, helping to reduce your energy bills all year round.",
    },
    {
      icon: LongevityImage,
      title: "Exceptional Longevity",
      description: (
        <>
          A metal roof can last{" "}
          50+ years, which is
          more than three times the lifespan of traditional shingles. It may
          very well be the{" "}
          last roof you ever need.
        </>
      ),
    },
    {
      icon: InsuranceImage,
      title: "Lower Insurance Premiums",
      description:
        "Many insurance providers offer lower rates for homes with metal roofs, thanks to their resistance to fire, impact, and extreme weather.",
    },
    {
      icon: FriendlyImage,
      title: "Eco-Friendly",
      description:
        "Metal roofs can often be installed directly over existing shingles—saving you money on removal and helping reduce landfill waste.",
    },
  ];

  return (
    <section className="flex flex-col justify-center p-16 text-white bg-dark-blue max-md:px-5 max-md:py-9">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <h2 className="text-3xl font-semibold text-center text-white max-md:max-w-full">
          Why Choose a Metal Roof?
        </h2>
        <div className="flex flex-wrap gap-12 justify-center mt-12 w-full max-md:mt-10 max-md:max-w-full max-w-[1280px] mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofBenefits;
