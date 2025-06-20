import React from "react";
import BenefitCard from "./BenefitCard";

const RoofBenefits = () => {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02622e59d05cd2e9884a7eb6c4efd99684f07096?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
      title: "Energy Efficiency",
      description:
        "Metal roofs reflect heat in the summer and retain warmth in the winter, helping to reduce your energy bills all year round.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e406afcb48e04578f0d5c0b4b8e2da3db0afe8d?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
      title: "Exceptional Longevity",
      description: (
        <>
          A metal roof can last{" "}
          <span className="text-orange font-bold">50+ years</span>, which is
          more than three times the lifespan of traditional shingles. It may
          very well be the{" "}
          <span className="text-orange font-bold">
            last roof you ever need.
          </span>
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdeb3688cc5a113b559657a0efe3669590167bb8?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
      title: "Lower Insurance Premiums",
      description:
        "Many insurance providers offer lower rates for homes with metal roofs, thanks to their resistance to fire, impact, and extreme weather.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ea4ebb15e0bbb2004cb76d0a1f4ca890548b488?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
      title: "Eco-Friendly",
      description:
        "Metal roofs can often be installed directly over existing shingles—saving you money on removal and helping reduce landfill waste.",
    },
  ];

  return (
    <section className="flex flex-col justify-center p-16 text-white bg-slate-600 max-md:px-5 max-md:py-9">
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
